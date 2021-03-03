var car = /** @class */ (function () {
    function car(ccolor, enginecap, nfcylinders) {
        this.ccolor = ccolor;
        this.enginecap = enginecap;
        this.nfcylinders = nfcylinders;
    }
    car.prototype.StartCar = function () {
        console.log("Car has been started..");
    };
    car.prototype.StopCar = function () {
        console.log("Car has been stopped!");
    };
    car.prototype.AccelerateCar = function () {
        console.log("Accelerate your car");
    };
    car.prototype.OpenCarLock = function () {
        console.log("Car lock is opened..");
    };
    car.prototype.CloseCarLock = function () {
        console.log("Car lock is closed");
    };
    return car;
}());
var c = new car("BLACK", 2000, 3);
c.StartCar();
c.StopCar();
c.AccelerateCar();
c.OpenCarLock();
c.CloseCarLock();
