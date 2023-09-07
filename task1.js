function canVote(name, age) {
    if (age >= 18)
        console.log(name + " can vote");
    else
        console.log(name + " can't vote");
}
canVote("tanmay", 19);
canVote("subh", 12);
var canVote1 = function (name, age) {
    if (age >= 18)
        console.log(name + " can vote");
    else
        console.log(name + " can't vote");
};
canVote1("tanmay", 19);
canVote1("subh", 12);
function dayOfWeek(day) {
    switch (day) {
        case 1: {
            console.log("Monday");
            break;
        }
        case 2: {
            console.log("Tue");
            break;
        }
        case 3: {
            console.log("Wed");
            break;
        }
        case 4: {
            console.log("Thur");
            break;
        }
        case 5: {
            console.log("Fri");
            break;
        }
        case 6: {
            console.log("Sat");
            break;
        }
        case 7: {
            console.log("Sun");
            break;
        }
        default: {
            console.log("Not a day");
            break;
        }
    }
}
dayOfWeek(1);
dayOfWeek(8);
var dayOfWeek1 = function (day) {
    switch (day) {
        case 1: {
            console.log("Monday");
            break;
        }
        case 2: {
            console.log("Tue");
            break;
        }
        case 3: {
            console.log("Wed");
            break;
        }
        case 4: {
            console.log("Thur");
            break;
        }
        case 5: {
            console.log("Fri");
            break;
        }
        case 6: {
            console.log("Sat");
            break;
        }
        case 7: {
            console.log("Sun");
            break;
        }
        default: {
            console.log("Not a day");
            break;
        }
    }
};
dayOfWeek1(2);
dayOfWeek(9);
function even(num1, num2) {
    for (var i = num1; i <= num2; i++) {
        if (i % 2 == 0)
            console.log(i);
    }
}
even(1, 9);
var function1 = function (num1, num2) {
    for (var i = num1; i <= num2; i++) {
        if (i % 2 == 0)
            console.log(i);
    }
};
function1(2, 13);
