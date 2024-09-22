function fetchData(callback) {
    setTimeout(() => {
        const data = "Sample Data";
        callback(data);
    }, 2000);
}

function processData(data) {
    console.log("Data received:", data);
}

fetchData(processData);