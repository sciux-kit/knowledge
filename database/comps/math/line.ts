import { comp } from "#"

// <canvas:line>
const line = comp("line", "Line segment between two points.")
line.fullname("canvas:line")

line.attr("from", "The start point of the line", "[number, number]")
line.attr("to", "The end point of the line", "[number, number]")
line.attr("value", "The display latex of the length of the line", "string")
line.attr("type", "The type of the line", '"solid" | "dashed" | "dotted"', '"solid"')

line.use("end-point", "start-point")

// <canvas:line:start-point>
const startPoint = comp("start-point", "The start point of the line.")
startPoint.fullname("canvas:line:start-point")
startPoint.attr("as", "The variable name of the start point, you can use the variable in following context, [x, y] will be the value of the variable", "string")

// <canvas:line:end-point>
const endPoint = comp("end-point", "The end point of the line.")
endPoint.fullname("canvas:line:end-point")
endPoint.attr("as", "The variable name of the end point, you can use the variable in following context, [x, y] will be the value of the variable", "string")

line.withComp(endPoint, startPoint)
export default line
