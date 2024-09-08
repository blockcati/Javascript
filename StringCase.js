let inputString = "Hello World!";
let conversionType = "uppercase"; 

if (conversionType === "uppercase") {
    console.log(inputString.toUpperCase());
} else if (conversionType === "lowercase") {
    console.log(inputString.toLowerCase());
} else {
    console.log("Invalid conversion type. Please choose 'uppercase' or 'lowercase'.");
}