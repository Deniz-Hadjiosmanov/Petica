const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const hamburgerLine1 = document.querySelector("#line1");
const hamburgerLine2 = document.querySelector("#line2");
const hamburgerLine3 = document.querySelector("#line3");
let openHamburger = false;

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

function rotateHamburger() {
    if (openHamburger === false) {
        openHamburger = true;
        hamburgerLine1.style.transform = "translateY(10px) rotate(48deg)";
        hamburgerLine3.style.transform = "translateY(-10px) rotate(-48deg)";
        hamburgerLine2.style.opacity = "0";
    }
    else {
        openHamburger = false;
        hamburgerLine1.style.transform = "translateY(0px) rotate(0deg)";
        hamburgerLine3.style.transform = "translateY(0px) rotate(0deg)";
        hamburgerLine2.style.opacity = "100";
    }

}
