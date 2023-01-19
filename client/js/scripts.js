function blinker(blink_elem){
    blink_elem.style.color= (blink_elem.style.color==='green'?'white':'green');
    setTimeout(() => blinker(blink_elem), 600);
}

export{blinker};
