const todos = ["Buy new Turtle"];

let input = prompt("What would you like to do?");



while (input !== "quit") {
    if (input === "list") {
        console.log(todos);
    } else if (input === "new") {
        const newTodo = prompt("Enter new todo");
        todos.push(newTodo);
        console.log(todos);
    }    
    input = prompt("What would you like to do?");
}
console.log("OK, You quit the app!");