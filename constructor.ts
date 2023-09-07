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

class Point2{

    constructor(private _x:number, private _y:number){
        // this.x=x
        // this.y=y
    }

    draw(){
        console.log('X ' + this._x + 'Y ' + this._y)
    }

    get x(){
        return this.x;
    }
set x(value){
    if(value<0){
        throw new Error('value can not be less than 0')
    }
    this.x=value
}


}

let point: Point2= new Point2(1,2)
// point.x=3
// point.y=4
point.draw()





