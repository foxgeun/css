const loginForm = document.querySelector('#login_form')
const loginInput = document.querySelector('#login_form input')
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME= "hidden";
const username = loginInput.value;

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem("username", username)
    
  }



const savedusername = localStorage.getItem(username);

if(savedusername == null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText= `Hello ${username}`;
}

