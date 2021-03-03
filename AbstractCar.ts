abstract class AbstractCar{
    cname: string;
    ccolor: string;
    enginecap: number;
    nfcylinders: number;
    constructor(cname: string,ccolor:string, enginecap: number, nfcylinders: number){
        this.cname=cname;
        this.ccolor=ccolor;
        this.enginecap=enginecap;
        this.nfcylinders=nfcylinders;
    }
    abstract stopCar();
    abstract startCar();
}
class SUV extends AbstractCar{
    cname: string;
    ccolor: string;
    enginecap: number;
    nfcylinders: number;
    manufacturer:string;
    price:number;

    constructor(cname: string,ccolor:string, enginecap:number,nfcylinders:number,manufacturer:string,price:number){
        super(cname,ccolor,enginecap,nfcylinders);
        this.manufacturer=manufacturer;
        this.price=price;
    }
    startCar(){
        console.log(this.cname + " is ready to start..");
    }
    stopCar(){
        console.log(this.ccolor + " is halted!");
    }
    dis(){
        console.log("Car name : " +this.cname);
        console.log("Car color : " +this.ccolor);
        console.log("Engine capacity : " +this.enginecap);
        console.log("No.of.cylinders : " +this.nfcylinders);
        console.log("Manufacturer : " +this.manufacturer);
        console.log("Price : "+this.price);
    }
}

   
        class HatchBack extends AbstractCar {
    
            cname: string;
            ccolor: string;
            enginecap: number;
            nfcylinders: number;
            manufacturer:string;
            price:number;
        
            constructor(cname: string,ccolor:string, enginecap:number,nfcylinders:number,manufacturer:string,price:number){
                super(cname,ccolor,enginecap,nfcylinders);
                this.manufacturer=manufacturer;
                this.price=price;
            }
            startCar(){
                console.log(this.cname + " is ready to start..");
            }
            stopCar(){
                console.log(this.ccolor + " is halted!");
            }
            dis(){
                console.log("Car name : " +this.cname);
                console.log("Car color : " +this.ccolor);
                console.log("Engine capacity : " +this.enginecap);
                console.log("No.of.cylinders : " +this.nfcylinders);
                console.log("Manufacturer : " +this.manufacturer);
                console.log("Price : "+this.price);
            }}
        
    
    class Sedan extends AbstractCar {
        cname: string;
        ccolor: string;
        enginecap: number;
        nfcylinders: number;
        manufacturer:string;
        price:number;
    
        constructor(cname: string,ccolor:string, enginecap:number,nfcylinders:number,manufacturer:string,price:number){
            super(cname,ccolor,enginecap,nfcylinders);
            this.manufacturer=manufacturer;
            this.price=price;
        }
        startCar(){
            console.log(this.cname + " is ready to start..");
        }
        stopCar(){
            console.log(this.cname + " is halted!");
        }
        dis(){
            console.log("Car name : " +this.cname);
            console.log("Car color : " +this.ccolor);
            console.log("Engine capacity : " +this.enginecap);
            console.log("No.of.cylinders : " +this.nfcylinders);
            console.log("Manufacturer : " +this.manufacturer);
            console.log("Price : "+this.price);
        }
    }
    let suv:SUV=new SUV("Baleno","Blue",96,3,"Hyundai",8.5);
console.log("SUV CAR DETAILS");
console.log("-----------------");
suv.dis();
suv.startCar();
suv.stopCar();
console.log();
let hatch:HatchBack=new HatchBack("Swift","Silver",98,2,"Suzuki",5.73);
console.log("HATCHBACK CAR DETAILS");
console.log("---------------------");
hatch.dis();
hatch.startCar();
hatch.stopCar();
let sedan:Sedan=new Sedan("Audi","Black",100,5,"Volkswagen ",10.25);
console.log("SEDAN CAR DETAILS");
console.log("-----------------");
sedan.dis();
sedan.startCar();
sedan.stopCar();
