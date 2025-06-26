import { QdrantClient } from '@qdrant/js-client-rest'
import { embed } from '@xsai/embed'
import dotenv from 'dotenv'
import fs from 'fs'
dotenv.config()

function documents() {
  return {
    comps: 'output/content/comps.md',
    refers: 'output/content/refers.md',
  }
}

function split(document: string) {
  return document.split('!=========!').map((item) => item.trim())
}

async function embedPart(part: string) {
  const { embedding } = await embed({
    baseURL: process.env.EMBEDDING_BASE_URL!,
    apiKey: process.env.EMBEDDING_API_KEY!,
    model: process.env.EMBEDDING_MODEL!,
    input: part,
  })
  return embedding
}

function client() {
  return new QdrantClient({
    url: process.env.QDRANT_BASE_URL!,
    apiKey: process.env.QDRANT_API_KEY!,
  })
}

async function main() {
  const docs = documents()
  const cli = client()

  console.log(`[UPLOAD] start to upload ${Object.keys(docs).length} documents`)
  console.log(`[UPLOAD] will upload to collections ${Object.keys(docs).join(', ')}`)

  for (const [key, value] of Object.entries(docs)) {
    console.log(`[UPLOAD] checking collection ${key}`)
    const exists = await cli.collectionExists(key)
    if (!exists) {
      console.log(`[UPLOAD] collection ${key} does not exist, creating...`)
      await cli.createCollection(key, {
        vectors: {
          size: parseInt(process.env.EMBEDDING_VECTOR_LENGTH!),
          distance: 'Cosine',
        }
      })
    } else {
      console.log(`[UPLOAD] collection ${key} already exists, overwriting...`)
      await cli.deleteCollection(key)
      await cli.createCollection(key, {
        vectors: {
          size: parseInt(process.env.EMBEDDING_VECTOR_LENGTH!),
          distance: 'Cosine',
        }
      })
    }
    console.log(`[UPLOAD] successfully checked collection ${key}`)

    const parts = split(fs.readFileSync(value, 'utf-8'))
    console.log(`[UPLOAD] start to upload ${key}`)
    const points = await Promise.all(parts.map(async (part) => {
      const embedding = await embedPart(part)
      const id = crypto.randomUUID()
      console.log(`[UPLOAD] generated embedding for ${id}`)
      return {
        id,
        vector: embedding,
        payload: {
          text: part,
        }
      }
    }))
    console.log(`[UPLOAD] will upload ${points.length} points to collection ${key}`)
    await cli.upsert(key, { points })
    console.log(`[UPLOAD] uploaded ${points.length} points to collection ${key}`)
  }
}

main()