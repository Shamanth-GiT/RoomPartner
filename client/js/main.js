import * as scriptFunc from "./scripts.js";

let status_blinker = document.getElementById("status");

window.onload = scriptFunc.blinker(status_blinker);