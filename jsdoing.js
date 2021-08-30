const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(information) {
  information.preventDefault();
  console.dir(information);
  console.log(information); //이렇게 function으로 주어진 infrormation 확인 가능
}

loginForm.addEventListener("submit", onLoginSubmit); //click event 대신 submit event로 대체
