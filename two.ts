function sayHello(name:string):void{
    console.log("Hello:" + name)
    console.log(`Hello ${name}`)  // string interpolation
}

let sayHello2=(name:string)=>{
    console.log("Hello:" + name)
    console.log(`Hello ${name}`)
}

function Add(num1:number, num2:number):number{
    return num1+num2
}


let Add2= (num1:number, num2:number):number=>num1+num2


sayHello("tanmay")
sayHello2("sukhija")
console.log(Add(10, 23))
console.log(Add2(14, 56))