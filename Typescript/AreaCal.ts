class area{
    
    public square(x:any){
        var res:any=x*x;
        console.log("AREA OF SQAURE:"+res.toFixed(2));
    }
    public  rectangle(a:any,b:any,c:any){
        var res:any=2*(a*b + b*c + a*c);
        console.log("AREA OF RECTANGLE:"+res.toFixed(2));
    }
    public triangle(b:any,h:any,s1:any,s2:any,s3:any,H:any){
         var res:any=b*h+(s1+s2+s3)*H;
          console.log("SURFACE AREA OF TRIANGLE:"+res.toFixed(2));
      }
}
let obj:areacalculation= new areacalculation("AREA CALCULATION");
console.log("-------------------------------------");
let res1=obj.square(4.5);
console.log(res1);
let res2=obj.rectangle(7.3,6.5,7.5);
console.log(res2);
let res3=obj.triangle(45,45.6,30,30,30,54);
console.log(res3);
