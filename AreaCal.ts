class AreaCal{
    
    public square(x:number){
        var res:number=x*x;
        console.log("AREA OF SQAURE:"+res.toFixed(2));
    }
    public  rectangle(a:number,b:number,c:number){
        var res:number=2*(a*b + b*c + a*c);
        console.log(return +res.toFixed(2));
        
    }
    public triangle(b:number,h:number,s1:number,s2:number,s3:number,H:number){
         var res:number=b*h+(s1+s2+s3)*H;
          console.log("SURFACE AREA OF TRIANGLE:"+res.toFixed(2));
      }
}
let acal:AreaCal= new AreaCal();
console.log("AREA CALCULATION");
console.log("-----------------");
let res1=obj.square(4.5);
console.log(res1);
let res2=obj.rectangle(7.3,6.5,7.5);
console.log(res2);
let res3=obj.triangle(45,45.6,30,30,30,54);
console.log(res3);
