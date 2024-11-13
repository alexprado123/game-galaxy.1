const con = document.querySelector(".con");
const btnSingIn = document.getElementById("btn-inicio");
const btnSingUp = document.getElementById("btn-registro");

btnSingIn.addEventListener("click",()=>{
    con.classList.remove("toggle");
})

btnSingUp.addEventListener("click",()=>{
    con.classList.add("toggle");
})