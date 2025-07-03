import { comps, anims, tools, refers, config, type Config } from "@"
import type { Comp, Anim, Tool, Refer, CompGen } from "#"
import fs from "node:fs"

const start = Date.now()

function generateComp(comp: Comp) {
  let content = ''
  const data = comp
  content += `\n\n## \`<${data.name}>\` (\`<${data.fullname}>\`)`
  content += `\n${data.desc}`
  if (data.attrs.length > 0) {
    content += `\n\n### Attributes`
    for (const attr of data.attrs) {
      content += `\n- \`${attr.name}\`: ${attr.desc} (${attr.type})${attr.dft ? ` [${attr.dft}]` : ""}`
    }
  }
  if (data.rules.length > 0) {
    content += `\n\n### Rules`
    for (const rule of data.rules) {
      content += `\n- ${rule}`
    }
  }
  if (data.examples.length > 0) {
    content += `\n\n### Examples`
    for (const example of data.examples) {
      content += `\n${example}`
    }
  }
  if (data.use.length > 0) {
    content += `\n\n> Components under namespace: ${data.use.map(i => `\`<${i}>\``).join(", ")}`
  }
  for (const withComp of data.withs) {
    content += generateComp(withComp)
  }
  return content
}

function generateComps() {
  let content = ''
  content += `---`
  for (const item of Object.entries(config)) {
    content += `\n${item[0]}: ${item[1].version}`
  }
  content += `\n---`
  console.log(`[TO_CONTENT] Processed ${Object.entries(config).length} dependencies`)

  content += `\n\n# Components`
  for (const comp of comps) {
    content += generateComp(comp.toData())
    content += `\n\n!=========!`
  }
  console.log(`[TO-CONTENT] Processed ${comps.length} components`)

  if (!fs.existsSync("output/content")) {
    fs.mkdirSync("output/content")
  }
  fs.writeFileSync("output/content/comps.md", content.trim())

  console.log(`[TO-CONTENT] Saved to output/content/comps.md`)
  console.log(`[TO-CONTENT] Total size: ${fs.statSync("output/content.md").size}`)
  console.log(`[TO-CONTENT] Total string length: ${content.length}`)
}

function generateRefers() {
  let content = ''
  content += `# References`
  for (const refer of refers) {
    const data = refer.toData()
    content += `\n!=========!\n\n`
    content += `> Description: ${data.desc}\n\n`
    content += `\`\`\`sciux\n`
    content += data.document
    content += `\`\`\``
    content += `\n\n`
    if (data.explainations.length > 0) {
      content += `### Explanation\n`
      for (const explain of data.explainations) {
        content += `- ${explain}\n`
      }
    }
  }
  console.log(`[TO-CONTENT] Processed ${refers.length} refers`)
  if (!fs.existsSync("output/content")) {
    fs.mkdirSync("output/content")
  }
  fs.writeFileSync("output/content/refers.md", content.trim())
  console.log(`[TO-CONTENT] Saved to output/content/refers.md`)
  console.log(`[TO-CONTENT] Total size: ${fs.statSync("output/content/refers.md").size}`)
  console.log(`[TO-CONTENT] Total string length: ${content.length}`)
}

generateComps()
generateRefers()

console.log(`[TO-CONTENT] Total time: ${Date.now() - start}ms`)

