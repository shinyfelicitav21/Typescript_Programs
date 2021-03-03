var UPIPaymentImpl = /** @class */ (function () {
    function UPIPaymentImpl() {
    }
    UPIPaymentImpl.prototype.doPayment = function (paymentcreds, paymentMode) {
        return "Payment of Rs " + paymentcreds + " in " + paymentMode + " is in progress...";
    };
    UPIPaymentImpl.prototype.getPaymentStatus = function (refId) {
        return "Payment done successfully for the reference Id: " + refId + " ";
    };
    return UPIPaymentImpl;
}());
var CreditCardPaymentImpl = /** @class */ (function () {
    function CreditCardPaymentImpl() {
    }
    CreditCardPaymentImpl.prototype.doPayment = function (paymentcreds, paymentMode) {
        return "Payment of Rs " + paymentcreds + " in " + paymentMode + " is in progress!!";
    };
    CreditCardPaymentImpl.prototype.getPaymentStatus = function (refId) {
        return "Payment done successfully for the reference Id: " + refId + " ";
    };
    return CreditCardPaymentImpl;
}());
var upi = new UPIPaymentImpl();
console.log(upi.doPayment(10000, 'PhonePay'));
console.log(upi.getPaymentStatus('123456789'));
var upiobj = new CreditCardPaymentImpl();
console.log(upiobj.doPayment(20000, 'Gpay'));
console.log(upiobj.getPaymentStatus('58794651'));
