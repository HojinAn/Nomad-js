const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //관습처럼 쓰는 표기법, string만 포함된 변수는 대문자로 표기하고 저장

function onLoginSubmit(information) {
  information.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  greeting.innerText = `Hello ${username}`; //``안에 이렇게 써주면 "Hello "+username이랑 같은 역할을 해준다. 즉, 변수와 string을 결합하고 싶다면 이 2가지 방법을 쓰면 된다. ${variable name}을 쓰려면 ``(백틱) ''따옴표 가 아니다
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
