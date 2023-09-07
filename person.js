"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(address, aadhaar, email) {
        var _this = this;
        this.address = address;
        this.aadhaar = aadhaar;
        this.email = email;
        this.display = function () { console.log("id: ".concat(_this.address, " Name: ").concat(_this.aadhaar, " Email:").concat(_this.email, "!!")); };
    }
    return Person;
}());
exports.Person = Person;
var emp = new Person("Green Glen", 112334, "tanmay@gmail.com");
emp.display();
