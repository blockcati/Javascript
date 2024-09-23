let promise = new Promise((resolve, reject) => {
    let dataFetched = true;
    setTimeout(() => {
        if (dataFetched) {
            resolve("Data fetched successfully!");
        } else {
            reject("Failed to fetch data.");
        }
    }, 2000);
});

promise
    .then(response => console.log(response))
    .catch(error => console.log(error));