const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = []; //input한 data들을 loalStorage에 저장하고 싶은데 우선 만들어준 것이 array!

function saveToDos() {
  // localStorage.setItem("todos", toDos); 하지만 HTML은 array를 저장할 수 없기 때문에 이렇게 해주면 각각의 값들이 array가 아닌(["a","b","c"]) 그냥 text로 저장된다.(a,b,c)
  localStorage.setItem(
    "todos",
    JSON.stringify(toDos)
  ); /*array의 텍스트 모양 자체를 string으로 저장해버리면 된다! 그걸 해주는 역할이 JSON.stringify 얘가 toDos array의 ["a", "b", "c"] 뭐 이런 형태를 localStorage에 그대로 저장할 수 있도록 해주는 것이다. 
 즉, JSON.stringify는 어떤 JavaScript 코드던 간에 그걸 string으로 바꿔준다.*/
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
