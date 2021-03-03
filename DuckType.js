var Sparrow = /** @class */ (function () {
    function Sparrow() {
        this.color = "brown";
    }
    return Sparrow;
}());
var Parrot = /** @class */ (function () {
    function Parrot() {
        this.color = "green";
    }
    return Parrot;
}());
var Duck = /** @class */ (function () {
    function Duck() {
        this.color = "white";
    }
    Duck.prototype.swim = function () {
        console.log("Going for a dip!");
    };
    return Duck;
}());
var parrot = new Sparrow();
var sparrow = new Parrot();
var parrotTwo = new Duck();
console.log("Parrot color: " + parrot.color);
console.log("Sparrow color: " + sparrow.color);
console.log("Parrot color: " + parrotTwo.color);
