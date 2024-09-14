country = ["Australia","Germany","United States of America"];

function Longestcountry(country){
    let ansIdx=0;

    for(i=0; i<country.length; i++){
        if(country[i].length>country[ansIdx].length){
            ansIdx=i;
        }

    }

}
console.log(Longestcountry);