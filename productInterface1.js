"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arr = new Array();
arr.push({ id: 101, name: "car", price: 500, description: "vehicle" });
arr.push({ id: 102, name: "bike", price: 200, description: "two-wheeler" });
var display = function (arr) {
    arr.forEach(function (element) {
        console.log("ID: ".concat(element.id, " NAME:").concat(element.name, " PRICE:").concat(element.price, " Desc: ").concat(element.description));
    });
};
display(arr);
