class Car{
    ccolor: string;
    enginecap: number;
    nfcylinders: number;
    constructor(ccolor:string, enginecap: number, nfcylinders: number){
        this.ccolor=ccolor;
        this.enginecap=enginecap;
        this.nfcylinders=nfcylinders;
    }
    StartCar(){
        console.log("Car has been started..");
    }
   StopCar(){ 
        console.log("Car has been stopped!");
   }
   AccelerateCar(){ 
            console.log("Accelerate your car");
   }
  OpenCarLock(){ 
            console.log("Car lock is opened..");
  }
    CloseCarLock(){ 
            console.log("Car lock is closed");
    }}
    let C:Car=new Car("BLACK",2000,3);
    C.StartCar();
    C.StopCar();
    C.AccelerateCar();
    C. OpenCarLock();
    C.CloseCarLock();

