let max = prompt("Enter the maximum num");
console.log(max);

const random = Mathfloor(Math.random()*max)+1;
console.log(max);
let guess = prompt("Guess The Number");

while(true){
    if(guess == "Quit"){
console.log("user Quit")
break;
}

if(guess==random){
    console.log("You are right"+"Your Number was"+ random)
    break;
} else if(guess<random){
   guess = prompt("Your Gusess was to small")

}else{
    guess = prompt("Your Guess was to big")
}

}
