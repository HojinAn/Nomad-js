const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newToDo);
  paintToDo(newToDo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
  console.log("this is the turn of", item);
}
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); //이거 통해서 string으로 쓰여있던 걸 array로 변환해준다. array 각각의 item에 대해 function을 실행할 수 있다. 화면에 뿌려주던가 텍스트를 변형하거나 JS는 이것을 가능하게 해준다.
  parsedToDos.forEach(sayHello); //foreach는 array 각각의 item에 대해 function을 실행할수 있게 해준다.
}
