// class Point1{
//     x: number;
//     y: number;
//     constructor(x:number, y:number){
//         this.x=x
//         this.y=y
//     }
//     draw(){
//         console.log('X ' + this.x + 'Y ' + this.y)
//     }
// }
// let point: Point1= new Point1(1,2)
// point.x=3
// point.y=4
// point.draw()
// class Point1{
//     constructor(private x:number, private y:number){
//         this.x=x
//         this.y=y
//     }
//     draw(){
//         console.log('X ' + this.x + 'Y ' + this.y)
//     }
// }
// let point: Point1= new Point1(1,2)
// // point.x=3
// // point.y=4
// point.draw()
// class Point1{
//     constructor(private x:number, private y:number){
//         // this.x=x
//         // this.y=y
//     }
//     draw(){
//         console.log('X ' + this.x + 'Y ' + this.y)
//     }
// }
// let point: Point1= new Point1(1,2)
// // point.x=3
// // point.y=4
// point.draw()
var Point2 = /** @class */ (function () {
    function Point2(_x, _y) {
        this._x = _x;
        this._y = _y;
        // this.x=x
        // this.y=y
    }
    Point2.prototype.draw = function () {
        console.log('X ' + this._x + 'Y ' + this._y);
    };
    Object.defineProperty(Point2.prototype, "x", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('value can not be less than 0');
            }
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point2;
}());
var point = new Point2(1, 2);
// point.x=3
// point.y=4
point.draw();
