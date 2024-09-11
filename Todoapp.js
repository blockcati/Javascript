let todo= [];

let req = prompt("Please Enter Your Request")
console.log(req);

while(true){
    if(req == "quit"){
        console.log("quiting App");
        break;
    }

    if(req == "list"){
console.log("___________")
for(let i = 0; i<todo.length; i++){
    console.log(i, todo[i]);
}
    
    console.log("________")


}else if(req== "Add"){
    let Task = prompt ("Enter your Task to add")
    todo.push(Task);
    console.log ("Task added")
} else if(req=="Delete"){
    let index = prompt("Enter the index of the task you want to delete") 
    todo.splice(index, 1);
    console.log("Task deleted")
} else{
    console.log("Invalid Request")
}

req = prompt("Please Enter your Request");

}