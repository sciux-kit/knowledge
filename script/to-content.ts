import { comps, anims, tools, refers, config, type Config } from "@"
import type { Comp, Anim, Tool, Refer } from "#"
import fs from "node:fs"

const start = Date.now()

function main() {
  let content = ''
  content += `---`
  for (const item of Object.entries(config)) {
    content += `\n${item[0]}: ${item[1]}`
  }
  content += `\n---`
  console.log(`[TO_CONTENT] Processed ${Object.entries(config).length} dependencies`)

  content += `\n\n# Components\n\n`
  for (const comp of comps) {
    const data = comp.toData()
    content += `\n\n## ${data.name} (${data.fullname})`
    content += `\n${data.desc}`
    content += `\n\n### Attributes`
    for (const attr of data.attrs) {
      content += `\n- ${attr.name}: ${attr.desc} (${attr.type})${attr.dft ? ` [${attr.dft}]` : ""}`
    }
    content += `\n\n### Rules`
    for (const rule of data.rules) {
      content += `\n- ${rule}`
    }
    content += `\n\n### Examples`
    for (const example of data.examples) {
      content += `\n- ${example}`
    }
    content += `\n\n> Components under namespace: ${data.use.map(i => `\`<${i}>\``).join(", ")}`
    content += `\n\n!=========!`
  }
  console.log(`[TO-CONTENT] Processed ${comps.length} components`)

  if (!fs.existsSync("output")) {
    fs.mkdirSync("output")
  }
  fs.writeFileSync("output/content.md", content)

  console.log(`[TO-CONTENT] Saved to output/content.md`)
  console.log(`[TO-CONTENT] Total size: ${fs.statSync("output/content.md").size}`)
  console.log(`[TO-CONTENT] Total time: ${Date.now() - start}ms`)
  console.log(`[TO-CONTENT] Total string length: ${content.length}`)
}

main()
