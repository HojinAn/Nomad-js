const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
  console.dir(
    event.target.parentElement.innerText
  ); /*이렇게 봐주면 어떤 버튼이 클릭되었나 콘솔로 구분 가능 target은 클릭된 HTML element다. parentElement는 클릭된 element button의 부모다.
  console.log 매개변수로 전달된 값을 출력한다.  요소를 HTML과 같은 트리 구조로 출력한다.
  console.dir 매개변수로 전달된 객체의 속성을 출력한다. 요소를 JSON과 같은 트리 구조로 출력한다.*/
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
  paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
