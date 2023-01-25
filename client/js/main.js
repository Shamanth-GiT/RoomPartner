import * as scriptFunc from "./scripts.js";

let status_blinker = document.getElementById("status");
let prof_items = document.getElementsByClassName("prof-it");

window.onload = scriptFunc.blinker(status_blinker);

Array.from(prof_items).forEach(item => item.addEventListener("click", () => scriptFunc.prof_item_changer(item)));

