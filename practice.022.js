let fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

fruits.push('Fig');
console.log('After push:', fruits);

let lastFruit = fruits.pop();
console.log('After pop:', fruits);
console.log('Popped element:', lastFruit);

let slicedFruits = fruits.slice(1, 3);
console.log('Sliced portion:', slicedFruits);

fruits.unshift('Grape');
console.log('After unshift:', fruits);

let firstFruit = fruits.shift();
console.log('After shift:', fruits);
console.log('Shifted element:', firstFruit);

fruits.splice(2, 1, 'Cantaloupe');
console.log('After splice:', fruits);
