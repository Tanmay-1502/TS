export class Employee{
    constructor(public id: number, public name: string){

    }
   // display=()=> { return this.id + " " + this.name}
    display=()=> {console.log(`id: ${this.id} Name: ${this.name} parent`)}
}

let emp:Employee= new Employee(1, "Tanmay")

emp.display()
//emp.display1()