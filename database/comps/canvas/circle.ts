import { comp } from "#"

// <canvas:circle>
const circle = comp("circle", "Circle with a center point and a radius.")
circle.fullname("canvas:circle")
circle.attr("x", "The x coordinate of the center point", "number")
circle.attr("y", "The y coordinate of the center point", "number")
circle.attr("r", "The radius of the circle", "number")
circle.attr("from", "The start angle of the circle, the default radian direction is clockwise.", "number", "0")
circle.attr("to", "The end angle of the circle, the default radian direction is clockwise.", "number", "360")
circle.attr("type", "The type of the circle", "string", "solid")

circle.use("edge-point", "origin")

// <canvas:circle:edge-point>
const edgePoint = comp("edge-point", "A point on the edge of the circle.")
edgePoint.fullname("canvas:circle:edge-point")
edgePoint.attr("radian", "The decision radian of the position of the point, for example, if radian === 90, the point will be on the bottom of the circle, the default radian direction is clockwise.", "number")
edgePoint.attr("as", "The variable name of the edge point, you can use the variable in following context, [x, y] will be the value of the variable", "string")

// <canvas:circle:origin>
const origin = comp("origin", "The origin point of the canvas.")
origin.fullname("canvas:circle:origin")
origin.attr("as", "The variable name of the origin point, you can use the variable in following context, [x, y] will be the value of the variable", "string")

export { circle, edgePoint, origin }
