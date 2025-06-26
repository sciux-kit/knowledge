import { comp } from "#"

// <canvas:function>
const func = comp('function', 'A function component')
func.fullname('canvas:function')

func.attr('expr', 'The expression of the function', '(x: number) => number')
func.attr('domain', 'The domain of the function', '[number, number]')
func.attr('division', 'The division of the function', 'number', '1')

// <canvas:function:point-on>
const point_on = comp('point-on', 'Setup a (x,y) coordinate on the function according to the x coordinate')
point_on.fullname('canvas:function:point-on')

point_on.attr('x', 'The x coordinate of the coordinate on the function you want to save', 'number')
point_on.attr('as', 'The name of the variable', 'string')

export { func as function, point_on }
