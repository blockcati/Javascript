let cart=[];

let Req = prompt("What You want to do");

if(Req="Add"){
   let task= prompt("Which Item Please?")
    cart.push(task);
    console.log("Item Added");

}else if(Req== "Remove"){
    let Index= prompt("Which Item Please?")
    todo.slice(Index, 1)
    console.log("Item Removed");

} else if(Req=="Quit"){
    console.log("Good Bye");
}else if(Req == "List" ){
    for(i=0; i<cart.length; i++)
    console.log();
} else if("Invaild Req");