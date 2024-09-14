function add (a,b){
    return a+b;
}
function substract(a,b){
    return a-b;
}

function operate(a,b, add){

   return add(a,b);

}
console.log(operate(5,2, add));
console.log(operate(5,2, substract));