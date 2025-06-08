import { AnimGen, CompGen, ReferGen, ToolGen } from "#"
import * as angle from "./comps/canvas/angle"
import * as circle from "./comps/canvas/circle"
import * as dot from "./comps/canvas/dot"
import * as functionSet from "./comps/canvas/function"
import * as line from "./comps/canvas/line"
import * as plane from "./comps/canvas/plane"
import * as polygon from "./comps/canvas/polygon"
import * as parametric from "./comps/canvas/parametric"
import * as figure from "./comps/canvas/figure"

const resolve = (series: object) => Object.entries(series).map(([key, value]) => value)
export const comps: CompGen[] = []
export const anims: AnimGen[] = []
export const tools: ToolGen[] = []
export const refers: ReferGen[] = []

comps.push(...resolve(angle), ...resolve(circle), ...resolve(dot), ...resolve(functionSet), ...resolve(line), ...resolve(plane), ...resolve(polygon), ...resolve(parametric), ...resolve(figure))

export { default as config } from "./config"
export * from "./config"
