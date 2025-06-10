import { refer, sciux } from "#"
import usage1 from './usage1.sciux'
import usage2 from './usage2.sciux'
import usage3 from './usage3.sciux'

export const radian1 = refer(usage1, 'A sector OAB value is 90 degrees')
radian1.explain('from -45 to 45, the angle is 90 degrees, so the start side and the end side are perpendicular to each other.')
radian1.explain('use `<arc>` to mark the angle value.')
radian1.explain('use `<bounding>` to add a bouding to let the angle be a sector')
radian1.explain('use `<origin>`, `<start-point>`, `<end-point>` to add the label to the origin, end of start side and end of end side.')

export const radian2 = refer(
  usage2,
  'The border of a garden pond consists of a straight edge AB of length 2.4m,and a curved part C,as shown in the diagram.The curved part is an arc of a circle,centre Oand radius 2m.'
)
radian2.explain('Let the original point move to the center of the canvas.')
radian2.explain('Define the division of the unit, in there 1 unit = 20 px')
radian2.explain('Calculate the half angle of the open part of the angle.')
radian2.explain('start side and end side should be dahsed because there is a line to close the figure.')
radian2.explain('Save start point and end point as variable A and B, so we can use them in the line component.')

export const radian3 = refer(
  usage3,
  'The diagram depicts a triangle AOB with an inscribed circle centered at C, tangent to sides OA, OB, and AB, where a dashed line from O through C intersects AB at T, and a perpendicular from C to AB intersects at D, with the circle\'s radius labeled as r cm.'
)
radian3.explain('Let the original point move to the center of the canvas.')
radian3.explain('Define the radius of the circle.')
radian3.explain('Save the center of the circle as variable O.')
radian3.explain('Save the radius of the circle as variable r.')
radian3.explain('Save the start point and end point of the line as variable A and B.')
radian3.explain('Save the perpendicular from C to AB as variable D.')
