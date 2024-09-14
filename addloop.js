function square(n) {
    return n * n;
}

function applyFunction(func, num) {
    return func(num);
}

console.log(applyFunction(square, 4));