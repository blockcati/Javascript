let firstName = "Alice";
let lastName = "Johnson";
let age = 25;
let isEmployed = true;

let fullName = firstName + " " + lastName;
console.log("Full Name: " + fullName);

let yearsToRetirement = 65 - age;
console.log("Years to Retirement: " + yearsToRetirement);

if (isEmployed) {
    console.log(fullName + " is currently employed.");
} else {
    console.log(fullName + " is not currently employed.");
}
