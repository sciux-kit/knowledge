import { comp } from "#"

const canvas = comp("canvas", "A canvas component support figure elements.")
canvas.fullname("canvas")

canvas.attr("width", "The width of coordinate range of x-axis, **NOT** the real-rendered width", "number")
canvas.attr("height", "The height of coordinate range of y-axis, **NOT** the real-rendered height", "number")
canvas.attr("origin", "The origin of the coordinate system", "[number, number]")

export default canvas
