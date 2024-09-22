const promise = new Promise((resolve) => {
    setTimeout(() => resolve("Promise resolved!"), 2000);
});
promise.then(result => console.log(result));