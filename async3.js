function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 2000);
    });
}

async function processData() {
    let result = await fetchData();
    console.log(result);
    console.log('Data processed');
}

processData();