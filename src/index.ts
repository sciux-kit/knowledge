import fs from "node:fs"

export enum KnowledgeType {
  COMP = "comp",
  ANIM = "anim",
  REFER = "refer",
  TOOL = "tool",
}

// Read the content of sciux file relative to what typescript file use the function
export function sciux(path: string) {
  return fs.readFileSync(path, "utf-8")
}

export * from "./comp"
export * from "./anim"
export * from "./tool"
export * from "./refer"
