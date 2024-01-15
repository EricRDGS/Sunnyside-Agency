let hamburguer = document.getElementById("hamburguer");
let menu = document.getElementById("menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("fa-x");
    menu.classList.toggle("show");
});