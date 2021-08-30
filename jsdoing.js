const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(information) {
  information.preventDefault();
  console.dir(information);
  console.log(loginInput.value); //이렇게 function으로 주어진 infrormation 확인 가능
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}

loginForm.addEventListener("submit", onLoginSubmit); //click event 대신 submit event로 대체
link.addEventListener("click", handleLinkClick);
