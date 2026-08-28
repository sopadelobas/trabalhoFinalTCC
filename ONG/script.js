const navBar = document.querySelector("nav"),
menuBotao = document.querySelectionAll(".list"),
overlay = document.querySelectorAll(".overlay");

menuBotao.forEach(menuBotao => {
    menuBotao.addEventListener("click", () => {
        navBar.classList.toggle("open");
    });
});

 overlay.addEventListener("click", () =>)