const signinBtn = document.querySelector("#signin-btn");
const signUpBtn = document.querySelector("#signup-btn");
const container = document.querySelector(".container");

const signinBtn2 = document.querySelector("#signin-btn2");
const signUpBtn2 = document.querySelector("#signup-btn2");


signUpBtn.addEventListener("click",() =>{
	container.classList.add("signUp-mode")
});

signinBtn.addEventListener("click",() =>{
	container.classList.remove("signUp-mode")
});

signUpBtn2.addEventListener("click",()=>{
	container.classList.add("signUp-mode2")
});

signinBtn2.addEventListener("click",()=>{
	container.classList.remove("signUp-mode2")
})