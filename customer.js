"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var person_1 = require("./person");
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(address, aadhaar, email, password, id) {
        var _this = _super.call(this, address, aadhaar, email) || this;
        _this.password = password;
        _this.id = id;
        _this.displayC = function () {
            //super.display();
            console.log("address:".concat(_this.address, " aadhaar: ").concat(_this.aadhaar, " email: ").concat(_this.email));
            console.log("password: ".concat(_this.password, " id: ").concat(_this.email));
        };
        return _this;
    }
    return Customer;
}(person_1.Person));
exports.Customer = Customer;
