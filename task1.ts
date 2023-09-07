function canVote(name: string, age:number){
    if(age>=18) console.log(name + " can vote")
    else console.log(name+ " can't vote")
}

canVote("tanmay", 19)
canVote("subh", 12)

let canVote1= (name: string, age:number) =>{
    if(age>=18) console.log(name + " can vote")
    else console.log(name+ " can't vote")
}


canVote1("tanmay", 19)
canVote1("subh", 12)

function dayOfWeek(day:number){
    switch (day){
        case 1: {
            console.log("Monday")
            break
        }
        case 2: {
            console.log("Tue")
            break
        }
        case 3: {
            console.log("Wed")
            break
        }
        case 4: {
            console.log("Thur")
            break
        }
        case 5: {
            console.log("Fri")
            break
        }
        case 6: {
            console.log("Sat")
            break
        }
        case 7: {
            console.log("Sun")
            break
        }
        default: {
            console.log("Not a day")
            break
        }
    }
}

dayOfWeek(1)
dayOfWeek(8)

let dayOfWeek1=(day:number)=>{
    switch (day){
        case 1: {
            console.log("Monday")
            break
        }
        case 2: {
            console.log("Tue")
            break
        }
        case 3: {
            console.log("Wed")
            break
        }
        case 4: {
            console.log("Thur")
            break
        }
        case 5: {
            console.log("Fri")
            break
        }
        case 6: {
            console.log("Sat")
            break
        }
        case 7: {
            console.log("Sun")
            break
        }
        default: {
            console.log("Not a day")
            break
        }
    }
}

dayOfWeek1(2)
dayOfWeek(9)

function even(num1: number, num2:number){
    for(let i:number = num1;i<=num2; i++){
        if(i%2==0) console.log(i);
        
    }
}

even(1,9)

let function1= (num1:number, num2:number)=> {
    for(let i:number = num1;i<=num2; i++){
        if(i%2==0) console.log(i);
        
    }
}

function1(2, 13)