var customer = ["David", 123, "Bag", "David@gmail.com", 9687789450, new Date()];
console.log("Email Id of customer : " + customer[3]);
console.log("Customer details : " + customer);
console.log("Length of the tuple :" + customer.length);
customer.push("James", 124, "Milk", "James@yahoo.com", 7896548512, new Date());
console.log("Length of the tuple : " + customer.length);
console.log("Customer Details : ");
for (var i = 0; i < customer.length; i++) {
    console.log(customer[i]);
}
customer.pop();
console.log("Length of the tuple after pop operation: " + customer.length);
for (var i = 0; i < customer.length; i++) {
    if (customer[i] == 'James') {
        console.log("James found at index: " + i);
    }
}
