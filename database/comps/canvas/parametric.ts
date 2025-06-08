import { comp } from "#"

// <canvas:parametric>
const parametric = comp("parametric", "A parametric graph")
parametric.fullname("canvas:parametric")

parametric.attr("expr", "The expression of the parametric graph", "(t: number) => [number, number]")
parametric.attr("domain", "The domain of the parametric graph", "[number, number]", "[-Math.Infinity, Math.Infinity]")
parametric.attr("range", "The range of the parametric graph", "[number, number]", "[-Math.Infinity, Math.Infinity]")

// <canvas:parametric:point-on>
const point_on = comp('point-on', 'Save (x,y) coordinates on the parametric graph according to a x coordinate or a y coordinate')
point_on.fullname('canvas:parametric:point-on')

point_on.attr('x', 'The x coordinate of the coordinate on the parametric graph you want to save, cannot valued when `y` is valued', 'number')
point_on.attr('y', 'The y coordinate of the coordinate on the parametric graph you want to save, cannot valued when `x` is valued', 'number')
point_on.attr('as', 'The name of the variable, save a coordinate set ([number, number][])', 'string')
point_on.attr('as-max', 'The name of the variable, save the maximum coordinate ([number, number])', 'string')
point_on.attr('as-min', 'The name of the variable, save the minimum coordinate ([number, number])', 'string')

export { parametric, point_on }
