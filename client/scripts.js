/*
    Used to show activity status.
*/
function blinker(blink_elem){
    blink_elem.style.color= (blink_elem.style.color==='green'?'white':'green');
    setTimeout(() => blinker(blink_elem), 600);
}

function prof_item_changer(elem){
    let stack_card = document.getElementById("stack_card_2");
    let lst = document.getElementsByClassName("prof-it");
    /* 
        Rather than storing media state, we can just iterate through each
        profile item and check if it is already text-muted. When we find one that 
        is not text-muted, we know that is the current state and so we can modify it
        accordingly
    */
    Array.from(lst).forEach(x => !x.classList.contains("text-muted") ? x.classList.add("text-muted") : x);
    elem.classList.remove("text-muted");
    stack_card.firstElementChild.innerHTML = elem.innerHTML;
    stack_card.lastElementChild.firstElementChild.innerHTML = elem.innerHTML;
}

export{blinker, prof_item_changer};
