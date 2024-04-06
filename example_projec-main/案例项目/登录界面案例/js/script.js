const signinBtn = document.getElementById("signin");
const signupBtn = document.getElementById("signup");
const fistFrom = document.getElementById("from1");
const secondFrom = document.getElementById("from2");
const container = document.querySelector(".container")

signinBtn.addEventListener("click",()=>{
	container.classList.remove("right-panel-active")
})

signupBtn.addEventListener("click",()=>{
	container.classList.add("right-panel-active")
})

fistFrom.addEventListener("submit",(e) => e.preventDefault())
secondFrom.addEventListener("submit",(e) => e.preventDefault())