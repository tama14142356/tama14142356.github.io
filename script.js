const langBtn = document.getElementById("lang-btn");
const translatableElements = document.querySelectorAll("[data-en], [data-ja]");
let currentLang = "ja";

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

langBtn.addEventListener("click", () => {
    if (currentLang === "en") {
        translatableElements.forEach(el => {
            el.textContent = el.getAttribute("data-ja");
        });
        langBtn.textContent = "JA";
        currentLang = "ja";
    } else {
        translatableElements.forEach(el => {
            el.textContent = el.getAttribute("data-en");
        });
        langBtn.textContent = "EN";
        currentLang = "en";
    }
});
