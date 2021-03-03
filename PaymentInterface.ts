interface PaymentManager{
    doPayment(paymentcreds:number,paymentMode:string):string;
    getPaymentStatus(refId: string):string;
}
class UPIPaymentImpl implements PaymentManager{
    public doPayment(paymentcreds:number,paymentMode:string):string
    {
        return `Payment of Rs ${paymentcreds} in ${paymentMode} is in progress...`;
    }
    public getPaymentStatus(refId: string): string {
       return `Payment done successfully for the reference Id: ${refId} `;
    }
}
class CreditCardPaymentImpl implements PaymentManager{
    doPayment(paymentcreds:number,paymentMode:string):string{
    return `Payment of Rs ${paymentcreds} in ${paymentMode} is in progress!!`;
    }
    getPaymentStatus(refId: string): string {
        return `Payment done successfully for the reference Id: ${refId} `;
    }
}

let upi:UPIPaymentImpl=new UPIPaymentImpl();
console.log(upi.doPayment(10000,'PhonePay'));
console.log(upi.getPaymentStatus('123456789'));
let upiobj:CreditCardPaymentImpl=new CreditCardPaymentImpl();
console.log(upiobj.doPayment(20000,'Gpay'));
console.log(upiobj.getPaymentStatus('58794651'));