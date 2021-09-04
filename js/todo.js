const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = []; //input한 data들을 loalStorage에 저장하고 싶은데 우선 만들어준 것이 array!

function saveToDos() {
  localStorage.setItem("todos", toDos); //입력된 아래 toDos array를 localStorage에 넣어준다.
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
  toDos.push(newToDo); //여기 써먹으려고 위에서 array 선언 이걸 local storage에 넣어줄거다 하지만 localstorage는 text만 저장가능하고 array는 불가하다.
  paintToDo(newToDo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
