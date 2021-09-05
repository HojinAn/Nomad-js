const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //이제 localStorage에 저장되는 toDos array는 그냥 text array가 아니라 Object array다.
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
  const newToDoObj = {
    //toDos array에 그냥 text가 아닌 Object를 저장함으로 id지정등을 해줄 수 있도록 할거다.
    text: newToDo,
    id: Date.now(), //랜덤한 id를 생성해주기 위해 그냥 Date.now 함수 활용한 것
  };
  toDos.push(newToDoObj);
  paintToDo(newToDo); //이러면 paintToDo는 text인 newToDo만 갖고 있다.
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; //중요한 것은 localStorage와 toDos array는 다른 거다. localStorage는 database가 아니다. 단지 toDos array를 복사해두는 곳일 뿐이다. database는 toDos가 database다.
  parsedToDos.forEach(paintToDo);
}
