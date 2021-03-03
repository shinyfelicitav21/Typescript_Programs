//FUNCTION WITH DEFAULT PARAMETER
    console.log("FUNCTION WITH DEFAULT PARAMETER:");
    console.log("---------------------------------");
    function defaultparams(firstname: string, lastname: string = "Smith") : string {
    return lastname + ' ' + firstname + '!';
     }

console.log(defaultparams('William')); 
console.log(defaultparams('Davis')); 
console.log(defaultparams('Brown', 'Welcome'));

    //FUNCTION WITH OPTIONAL PARAMETER
    console.log("FUNCTION WITH OPTIONAL PARAMETER");
    console.log("---------------------------------");
function optional(firstname: string, lastname?: string) : string {
    return lastname + ' ' + firstname + '!';
     }

console.log(optional('Hello','William')); 
console.log(optional('name')); 
console.log(optional('Hello','Brown'));

    //FUNCTION WITH REST PARAMETER
    console.log("FUNCTION WITH REST PARAMETER");
    console.log("-----------------------------");

function rest(firstname: string, ...lastname: string[]) {
    return firstname + " " + lastname.join(", ") + "!";
}
console.log(rest("Hello", "William", "Smith")); 
console.log(rest("Hello"));
console.log(optional('Hello','Brown'));

