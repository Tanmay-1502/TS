import { Point } from "./interface";
let draw= (point: Point)=>
{
    console.log(point.x, point.y)
}


draw({x:1, y:2})