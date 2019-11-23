const todos = ["Buy new Turtle"];

let input = prompt("What would you like to do?");

const listTodos = () => {
    console.log("**********");
    todos.forEach((todo, index) => {
        console.log(index + ": " + todo);
    });
    console.log("**********");
}

const addTodo = () => {
    const newTodo = prompt("Enter new todo");
        todos.push(newTodo);
        console.log("Added Todo");
}

const deleteTodo = () => {
    let index = prompt("Enter index of todo to delete");
    todos.splice(index, 1);
    console.log("Deleted Todo");
}



while (input !== "quit") {
    if (input === "list") {
        listTodos();
    } else if (input === "new") {
        addTodo();
    } else if (input === "delete") {
        deleteTodo();
    }
    input = prompt("What would you like to do?");
}
console.log("OK, You quit the app!");