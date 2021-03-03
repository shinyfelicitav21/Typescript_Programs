var areacal = /** @class */ (function () {
    function areacal() {
    }
    areacal.prototype.square = function (x) {
        var res = x * x;
        console.log("AREA OF SQAURE:" + res.toFixed(2));
    };
    areacal.prototype.rectangle = function (a, b, c) {
        var res = 2 * (a * b + b * c + a * c);
        console.log("AREA OF RECTANGLE:" + res.toFixed(2));
    };
    areacal.prototype.triangle = function (b, h, s1, s2, s3, H) {
        var res = b * h + (s1 + s2 + s3) * H;
        console.log("SURFACE AREA OF TRIANGLE:" + res.toFixed(2));
    };
    return areacal;
}());
var obj = new areacal();
console.log("AREA CALCULATION");
var res1 = obj.square(4.5);
console.log(res1);
var res2 = obj.rectangle(7.3, 6.5, 7.5);
console.log(res2);
var res3 = obj.triangle(45, 45.6, 30, 30, 30, 54);
console.log(res3);
