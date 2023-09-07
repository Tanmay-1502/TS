import {Person } from "./person";

export class Customer extends Person
{
    constructor(address:string ,aadhaar:number, email:string, public password:string, public id:number){
        super(address, aadhaar, email)
    }
     displayC=()=> {
    //super.display();
    console.log(`address:${this.address} aadhaar: ${this.aadhaar} email: ${this.email}`)
    console.log(`password: ${this.password} id: ${this.email}` )
    }
}