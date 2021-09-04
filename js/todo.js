const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteToDo() {
  console.log("don't know which one is clicked")//여러개의 button이 생겨도 무엇이 클릭됐는지 모른다 아직
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
  const button = document.createElement("button");
  button.innerText = "❌"; //윈도우 기준 이모지 단축키는 '윈도우 + .' 입니다
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button); //먼저 span을 추가하고 button을 추가했다 button이 span다음에 위치하게 될 것
  toDoList.appendChild(li); //span, button을 해주고나서야 li를 toDoList에 추가
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
