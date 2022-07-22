const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
todoButton.addEventListener("click", addTodo);

todoList.addEventListener("click", deleteAndCheck);

function addTodo(event) {
  event.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const todoLi = document.createElement("li");
  todoLi.classList.add("todo-item");
  todoLi.innerText = todoInput.value;
  todoInput.value = "";
  todoDiv.appendChild(todoLi);
  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  completeButton.classList.add("completed-btn");
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  trashButton.classList.add("trash-btn");

  todoDiv.appendChild(trashButton);
  todoDiv.appendChild(completeButton);

  todoList.appendChild(todoDiv);
}

function completedItem() {
  const item = document.querySelector("todo-item");
}

//delete
function deleteAndCheck(e) {
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }
  if (item.classList[0] === "completed-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
