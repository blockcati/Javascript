let numbers = [12, 5, 8, 130, 44];

let Minimum = numbers.reduce((min,el)=>{
    if(el<min){
        return min;
    }else{
        return el;
    }
})
console.log(Minimum);