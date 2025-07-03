import { comp } from "#"

// <canvas:polygon>
const polygon = comp("polygon", "A polygon component")
polygon.fullname("canvas:polygon")
polygon.attr("points", "The points of the polygon", "[number, number][]")

export default polygon
