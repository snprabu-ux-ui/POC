const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
console.log("todoList", todoList);
function addTodo() {
    console.log("Add todo...");
    if (todoInput.value == "") {
        console.log("Fill the todo");
        alert("Fill the todo");
    } else {
        const todoItem = document.createElement("li");
        const todoActionItem = document.createElement('a');
        todoActionItem.setAttribute('href','#');
        todoActionItem.textContent = 'In plan';
        todoItem.textContent = todoInput.value;
        todoItem.appendChild(todoActionItem);
        todoList.appendChild(todoItem);
        console.log(todoList);
        localStorage.setItem("todo", todoInput.value);
        todoInput.value = "";
    }
}

document.addEventListener('click',function(e){
    console.log(e.target.classList);
    if(e.target.nodeName === 'A'){
        if(e.target.classList.length === 0){
            e.target.setAttribute('class','strikeout');
            e.target.text = 'done'
        } else {
            e.target.className = '';
            e.target.text = 'In plan'
        }
    }
});