import * as scriptFunc from "./scripts.js";

let prof_items = document.getElementsByClassName("prof-it");

Array.from(prof_items).forEach(item => item.addEventListener("click", () => scriptFunc.prof_item_changer(item)));

