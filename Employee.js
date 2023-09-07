"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(id, name) {
        var _this = this;
        this.id = id;
        this.name = name;
        // display=()=> { return this.id + " " + this.name}
        this.display = function () { console.log("id: ".concat(_this.id, " Name: ").concat(_this.name, " parent")); };
    }
    return Employee;
}());
exports.Employee = Employee;
var emp = new Employee(1, "Tanmay");
emp.display();
//emp.display1()
