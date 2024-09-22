function calculate(operation, a, b) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
        default:
            return "Invalid operation";
    }
}

console.log(calculate('add', 5, 3));
console.log(calculate('subtract', 10, 4));
