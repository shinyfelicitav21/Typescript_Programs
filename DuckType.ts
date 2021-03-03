class Sparrow {
   color = "brown";
}
class Parrot { 
    color = "green";

}
class Duck {
    color = "white";
    swim(){
        console.log("Going for a dip!");
    } 
}
var parrot: Parrot = new Sparrow(); 
var sparrow: Sparrow = new Parrot();
var parrotTwo: Parrot = new Duck();

 
console.log("Parrot color: "+parrot.   color);
console.log("Sparrow color: "+sparrow.   color);
console.log("Parrot color: "+parrotTwo.   color);