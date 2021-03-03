//FUNCTION WITH DEFAULT PARAMETER
console.log("FUNCTION WITH DEFAULT PARAMETER:");
console.log("---------------------------------");
function defaultparams(firstname, lastname) {
    if (lastname === void 0) { lastname = "Smith"; }
    return lastname + ' ' + firstname + '!';
}
console.log(defaultparams('William'));
console.log(defaultparams('Davis'));
console.log(defaultparams('Brown', 'Welcome'));
//FUNCTION WITH OPTIONAL PARAMETER
console.log("FUNCTION WITH OPTIONAL PARAMETER");
console.log("---------------------------------");
function optional(firstname, lastname) {
    return lastname + ' ' + firstname + '!';
}
console.log(optional('Hello', 'William'));
console.log(optional('name'));
console.log(optional('Hello', 'Brown'));
//FUNCTION WITH REST PARAMETER
console.log("FUNCTION WITH REST PARAMETER");
console.log("-----------------------------");
function rest(firstname) {
    var lastname = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        lastname[_i - 1] = arguments[_i];
    }
    return firstname + " " + lastname.join(", ") + "!";
}
console.log(rest("Hello", "William", "Smith"));
console.log(rest("Hello"));
console.log(optional('Hello', 'Brown'));
