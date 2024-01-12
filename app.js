const todolist = [
  {
    tasktext: "One task",
    isDone: false,
    id: 1,
  },
  {
    tasktext: "Two task",
    isDone: false,
    id: 2,
  },
  {
    tasktext: "Three task",
    isDone: true,
    id: 3,
  },
];

const addtask = document.querySelector(".input");
const pushButton = document.querySelector(".button");
const todoList = document.querySelector(".task__list");
let count = 0;

function createtask(task) {
  let { tasktext, isDone } = task; 
  const item = document.createElement("li");
  item.className = "list";

  const label = document.createElement("label");

  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = isDone;
  input.className = "item-"; 

  const text = document.createElement("p");
  text.className = "textEl";
  text.textContent = tasktext; 

  const img = document.createElement("img");
  img.src = "img/Vector.png";
  img.alt = "trash";
  img.className = "img";

  todoList.appendChild(item);
  item.appendChild(label);
  item.appendChild(img);
  label.appendChild(input);
  label.appendChild(text);

  input.addEventListener("change", function changeClassItem() {
    item.classList.toggle("list-");
    text.classList.toggle("textElSub");
  });
  img.addEventListener("click", function() {
    todoList.removeChild(item);
  });
  
}


function addTaskToDoList(element) {
  const text = addtask.value;
  console.log;
  if (text.trim().length) {
    createtask({ tasktext: text, isDone: false });
  } else {
    alert("Поле пустое!");
  }
}

pushButton.addEventListener("click", addTaskToDoList);