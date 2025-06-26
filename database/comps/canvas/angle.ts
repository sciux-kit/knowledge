import { comp } from "#"

// <canvas:angle>
const angle = comp("angle", "Angle with at least two sides.")
angle.fullname("canvas:angle")
angle.attr("x", "The x coordinate of the center of the angle", "number")
angle.attr("y", "The y coordinate of the center of the angle", "number")
angle.attr("from", "The starting angle of the angle, the default radian direction is clockwise.", "number", "0")
angle.attr("to", "The ending angle of the angle, the default radian direction is clockwise.", "number")
angle.attr("start-side", "The length of the start side of the angle", "number")
angle.attr("end-side", "The length of the end side of the angle", "number")
// angle.attr("start-side-color", "The color of the start side of the angle", "string", "black")
// angle.attr("end-side-color", "The color of the end side of the angle", "string", "black")
angle.attr("start-side-type", "The type of the start side of the angle", "string", "'solid' | 'dashed' | 'dotted'")
angle.attr("end-side-type", "The type of the end side of the angle", "string", "'solid' | 'dashed' | 'dotted'")
angle.attr("start-side-value", "The display latex value of the start side of the angle", "string")
angle.attr("end-side-value", "The display latex value of the end side of the angle", "string")

angle.use("arc", "bounding", "end-point", "start-point", "origin")

// <canvas:angle:arc>
const arc = comp("arc", "a arc for tagging the value of an angle, must be used under an <angle> component.")
arc.fullname("canvas:angle:arc")
// arc.attr("color", "The color of the arc", "string", "black")
arc.attr("type", "The type of the arc", "string", "'solid' | 'dashed' | 'dotted'")
// arc.attr("width", "The width of the arc", "number", "1")
arc.attr("value", "The display latex value of the angle", "string")

// <canvas:angle:bounding>
const bounding = comp("bounding", "Bounding arc for an angle, must be used under an <angle> component.")
bounding.fullname("canvas:angle:bounding")
// bounding.attr("color", "The color of the bounding arc", "string", "black")
bounding.attr("type", "The type of the bounding arc", "string", "'solid' | 'dashed' | 'dotted'")
// bounding.attr("width", "The width of the bounding arc", "number", "1")
bounding.attr("value", "The display latex", "string")

// <canvas:angle:end-point>
const endPoint = comp("end-point", "The end point of the angle, must be used under an <angle> component.")
endPoint.fullname("canvas:angle:end-point")
endPoint.attr("as", "The variable name of the coordinate will be saved in the context", "string")
endPoint.attr("value", "The display latex", "string")

// <canvas:angle:start-point>
const startPoint = comp("start-point", "The start point of the angle, must be used under an <angle> component.")
startPoint.fullname("canvas:angle:start-point")
startPoint.attr("as", "The variable name of the coordinate will be saved in the context", "string")
startPoint.attr("value", "The display latex", "string")

// <canvas:angle:origin>
const origin = comp("origin", "The origin of the angle, must be used under an <angle> component.")
origin.fullname("canvas:angle:origin")
origin.attr("as", "The variable name of the coordinate will be saved in the context", "string")
origin.attr("value", "The display latex", "string")

export { angle, arc, bounding, endPoint, startPoint, origin }
