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
var AbstractCar = /** @class */ (function () {
    function AbstractCar(cname, ccolor, enginecap, nfcylinders) {
        this.cname = cname;
        this.ccolor = ccolor;
        this.enginecap = enginecap;
        this.nfcylinders = nfcylinders;
    }
    return AbstractCar;
}());
var SUV = /** @class */ (function (_super) {
    __extends(SUV, _super);
    function SUV(cname, ccolor, enginecap, nfcylinders, manufacturer, price) {
        var _this = _super.call(this, cname, ccolor, enginecap, nfcylinders) || this;
        _this.manufacturer = manufacturer;
        _this.price = price;
        return _this;
    }
    SUV.prototype.startCar = function () {
        console.log(this.cname + " is ready to start..");
    };
    SUV.prototype.stopCar = function () {
        console.log(this.ccolor + " is halted!");
    };
    SUV.prototype.dis = function () {
        console.log("Car name : " + this.cname);
        console.log("Car color : " + this.ccolor);
        console.log("Engine capacity : " + this.enginecap);
        console.log("No.of.cylinders : " + this.nfcylinders);
        console.log("Manufacturer : " + this.manufacturer);
        console.log("Price : " + this.price);
    };
    return SUV;
}(AbstractCar));
var HatchBack = /** @class */ (function (_super) {
    __extends(HatchBack, _super);
    function HatchBack(cname, ccolor, enginecap, nfcylinders, manufacturer, price) {
        var _this = _super.call(this, cname, ccolor, enginecap, nfcylinders) || this;
        _this.manufacturer = manufacturer;
        _this.price = price;
        return _this;
    }
    HatchBack.prototype.startCar = function () {
        console.log(this.cname + " is ready to start..");
    };
    HatchBack.prototype.stopCar = function () {
        console.log(this.ccolor + " is halted!");
    };
    HatchBack.prototype.dis = function () {
        console.log("Car name : " + this.cname);
        console.log("Car color : " + this.ccolor);
        console.log("Engine capacity : " + this.enginecap);
        console.log("No.of.cylinders : " + this.nfcylinders);
        console.log("Manufacturer : " + this.manufacturer);
        console.log("Price : " + this.price);
    };
    return HatchBack;
}(AbstractCar));
var Sedan = /** @class */ (function (_super) {
    __extends(Sedan, _super);
    function Sedan(cname, ccolor, enginecap, nfcylinders, manufacturer, price) {
        var _this = _super.call(this, cname, ccolor, enginecap, nfcylinders) || this;
        _this.manufacturer = manufacturer;
        _this.price = price;
        return _this;
    }
    Sedan.prototype.startCar = function () {
        console.log(this.cname + " is ready to start..");
    };
    Sedan.prototype.stopCar = function () {
        console.log(this.ccolor + " is halted!");
    };
    Sedan.prototype.dis = function () {
        console.log("Car name : " + this.cname);
        console.log("Car color : " + this.ccolor);
        console.log("Engine capacity : " + this.enginecap);
        console.log("No.of.cylinders : " + this.nfcylinders);
        console.log("Manufacturer : " + this.manufacturer);
        console.log("Price : " + this.price);
    };
    return Sedan;
}(AbstractCar));
var suv = new SUV("Baleno", "Blue", 96, 3, "Hyundai", 8.5);
console.log("SUV CAR DETAILS");
console.log("-----------------");
suv.dis();
suv.startCar();
suv.stopCar();
console.log();
var hatch = new HatchBack("Swift", "Silver", 98, 2, "Suzuki", 5.73);
console.log("HATCHBACK CAR DETAILS:");
hatch.dis();
hatch.startCar();
hatch.stopCar();
var sedan = new Sedan("Audi", "Black", 100, 5, "Volkswagen ", 10.25);
console.log("SEDAN CAR DETAILS:");
sedan.dis();
sedan.startCar();
sedan.stopCar();
