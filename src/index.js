import "./styles.css";
import { home } from "./home.js"
import { menu } from "./menu.js";
import { contact } from "./contact.js";

home()

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    if (button.id === "home") {
        button.addEventListener("click", clearHome);
    } else if (button.id === "menu") {
        button.addEventListener("click", clearMenu);
    } else {
        button.addEventListener("click", clearContact);
    }
});

function clear() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
}

function clearHome() {
    clear();
    home();
}

function clearMenu() {
    clear();
    menu();
}

function clearContact() {
    clear();
    contact();
}


