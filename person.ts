export class Person{
    constructor(public address: string, public aadhaar: number, public email:string){

    }
    display=()=> {console.log(`id: ${this.address} Name: ${this.aadhaar} Email:${this.email}!!`)}
}

let emp:Person= new Person("Green Glen", 112334,"tanmay@gmail.com")

emp.display()