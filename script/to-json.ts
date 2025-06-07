import { comps, anims, tools, refers, config, type Config } from "@"
import type { Comp, Anim, Tool, Refer } from "#"
import process from "node:process"
import fs from "node:fs"

const start = Date.now()
const main = () => {
  const data: {
    version: string
    dependencies: Config
    database: {
      comps: Comp[]
      anims: Anim[]
      tools: Tool[]
      refers: Refer[]
    }
  } = {
    version: process.env.npm_package_version!,
    dependencies: config,
    database: {
      comps: [],
      anims: [],
      tools: [],
      refers: [],
    },
  }

  for (const comp of comps) {
    data.database.comps.push(comp.toData())
  }
  console.log(`[TO-JSON] prcessed ${comps.length} comps`)

  for (const anim of anims) {
    data.database.anims.push(anim.toData())
  }
  console.log(`[TO-JSON] prcessed ${anims.length} anims`)

  for (const tool of tools) {
    data.database.tools.push(tool.toData())
  }
  console.log(`[TO-JSON] prcessed ${tools.length} tools`)

  for (const refer of refers) {
    data.database.refers.push(refer.toData())
  }
  console.log(`[TO-JSON] prcessed ${refers.length} refers`)

  if (!fs.existsSync("output")) fs.mkdirSync("output")
  fs.writeFileSync("output/database.json", JSON.stringify(data, null, 2))

  console.log(`[TO-JSON] saved to output/database.json`)
  console.log(`[TO-JSON] total time: ${Date.now() - start}ms`)
  console.log(`[To-JSON] Total string length: ${JSON.stringify(data).length}`)
  console.log(`[TO-JSON] Total size: ${fs.statSync("output/database.json").size}`)
}

main()
