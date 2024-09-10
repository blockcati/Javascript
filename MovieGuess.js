let  Favoriate = "Avatar";
let Guess =prompt("Enter The movie Name");

while(Favoriate!=Guess && Guess!="Quit"){
    console.log("Wrong Movie");
    Guess=prompt("");
}
if(Guess==Favoriate){
    console.log("You Got It Right");
    } else{
        console.log("You Quit");
    }