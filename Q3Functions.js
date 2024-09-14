let city = ["Los Angeles", "New York", "San Francisco", "Seattle"];

function ShortestCity(city){
    let shortestCity = city[0];
    for (let i=0; i<city.length; i++){
        if (city[i].length < shortestCity.length) {
            shortestCity = city[i];
        }
    }
    return shortestCity;
}
console.log(ShortestCity(city));