const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// stirng만 포함된 변수라서 대문자로만 표시 (string 저장하고 싶을 때 사용)
//반복해서 사용하는 경우 따로 대문자 변수로 저장해두기

function onLoginsubmit(event) {
  event.preventDefault(); //기본 동작은 실행 되지 않게 막아줌
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("USERNAME_KEY", username);
  paintGreetings(username);
}

function paintGreetings(username) {
  const hour = Date.getHours;
  greeting.innerText = `Hello, ${username}!`;
  // 백틱(`)으로 감싸야 함 "Hello " + username;와 같음
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem("USERNAME_KEY");

if (savedUsername === null) {
  // form 보여주기
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginsubmit);
} else {
  // greetings 보여주기
  paintGreetings(savedUsername);
}
