const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(information) {
  information.preventDefault();
  loginForm.classList.add("hidden");
  const username = loginInput.value;
  greeting.innerText = "Hello " + username;
  greeting.classList.remove("hidden"); //'hidden을 2번 이상 썼으니 제거하고 통일하고 싶다!
}

loginForm.addEventListener("submit", onLoginSubmit); //click event 대신 submit event로 대체
