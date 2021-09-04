const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); //document.querySelector("#todo-form input");랑 같다 todo-form은 html에서 form의 id값
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
  event.preventDefault();
  console.log(toDoInput.value);//console로 확인하기
}

toDoForm.addEventListener("submit", handleToDoSubmit);
