import { Product } from "./productInterface";
let arr:Product[] = new Array()
arr.push({id:101, name:"car", price: 500, description:"vehicle"})
arr.push({id:102, name: "bike", price:200, description: "two-wheeler"})


let display= (arr:Product[])=>{
    arr.forEach(element => {
        console.log(`ID: ${element.id} NAME:${element.name} PRICE:${element.price} Desc: ${element.description}`)
        
    });
}

display(arr)

