import { AnimGen, CompGen, ReferGen, ToolGen } from "#"
import * as angle from "./api/canvas/angle"

const resolve = (series: object) => Object.entries(series).map(([key, value]) => value)
export const comps: CompGen[] = []
export const anims: AnimGen[] = []
export const tools: ToolGen[] = []
export const refers: ReferGen[] = []

comps.push(...resolve(angle))

export { default as config } from "./config"
export * from "./config"
