import { Employee } from "./Employee";

export class Manager extends Employee
{
    constructor(id:number, name:string, public designation:string){
        super(id, name)
    }
     displayM=()=> {
    //super.display();
    console.log(`id: ${this.id} Name: ${this.name}`)
    console.log(`designation: ${this.designation}`)
    }
}