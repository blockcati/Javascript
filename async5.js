async function fetchDataWithError() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/invalidurl');
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

fetchDataWithError();
