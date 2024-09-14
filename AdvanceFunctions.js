function generateGreeting(timeOfDay = "morning") {
    switch (timeOfDay) {
        case "morning":
            return "Good morning!";
        case "afternoon":
            return "Good afternoon!";
        case "evening":
            return "Good evening!";
        default:
            return "Hello";  
    }
}


console.log(generateGreeting("morning"));   
console.log(generateGreeting());            
console.log(generateGreeting("evening"));   
console.log(generateGreeting("night"));      
