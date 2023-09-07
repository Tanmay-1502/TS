function sayHello(name) {
    console.log("Hello:" + name);
    console.log("Hello ".concat(name)); // string interpolation
}
var sayHello2 = function (name) {
    console.log("Hello:" + name);
    console.log("Hello ".concat(name));
};
function Add(num1, num2) {
    return num1 + num2;
}
var Add2 = function (num1, num2) { return num1 + num2; };
sayHello("tanmay");
sayHello2("sukhija");
console.log(Add(10, 23));
console.log(Add2(14, 56));
