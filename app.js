const loginForm = document.getElementById("login-form");
const logininput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");


function onLoginBtnClick(){
    const username = logininput.value;
    if( username === "") {
        alert("please write yout name");
    }else if( username.length > 15) {
        alert("yout name is too long.")
    }

}

loginButton.addEventListener("click",onLoginBtnClick )