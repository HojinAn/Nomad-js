const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newToDo) {
  const li = document.createElement("li"); //상수 이름은 potato여도 상관없음 괄호안은 "li"여야함
  const span = document.createElement("span");
  li.appendChild(span); //span을 li 내부에 집어넣었다.
  span.innerText = newToDo; //span태그 내용을 newToDo로 채웠다.    이렇게 HTML을 만들어 준거다
  toDoList.appendChild(li);//만들어준 li를 toDolist child로 넣어주
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
