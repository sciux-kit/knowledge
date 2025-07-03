import { AnimGen, CompGen, ReferGen, ToolGen } from "#"
import angle from "./comps/math/angle"
import circle from "./comps/math/circle"
import dot from "./comps/math/dot"
import functionSet from "./comps/math/function"
import line from "./comps/math/line"
import plane from "./comps/math/plane"
import polygon from "./comps/math/parametric"
import parametric from "./comps/math/parametric"
import figure from "./comps/math/figure"
import canvas from "./comps/widget/canvas"

import * as radian from "./refers/radian"

const resolve = (series: object) => Object.entries(series).map(([key, value]) => value)
export const comps: CompGen[] = []
export const anims: AnimGen[] = []
export const tools: ToolGen[] = []
export const refers: ReferGen[] = []

comps.push(angle, circle, dot, functionSet, line, plane, polygon, parametric, figure, canvas)
refers.push(...resolve(radian))

export { default as config } from "./config"
export * from "./config"
