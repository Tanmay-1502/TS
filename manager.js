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
exports.Manager = void 0;
var Employee_1 = require("./Employee");
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(id, name, designation) {
        var _this = _super.call(this, id, name) || this;
        _this.designation = designation;
        _this.displayM = function () {
            //super.display();
            console.log("id: ".concat(_this.id, " Name: ").concat(_this.name));
            console.log("designation: ".concat(_this.designation));
        };
        return _this;
    }
    return Manager;
}(Employee_1.Employee));
exports.Manager = Manager;
