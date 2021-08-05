'use strict';
const box = document.getElementById("box")
let boxTop = 200;
let boxLeft = 200;

function keyListener(event){
    const keyName = event.key;
    console.log('keydown event\n\n' + 'key: ' + keyName);
    console.log(typeof keyName);

//Movimentação vertical
    if(keyName === 'ArrowUp'){
        box.style.top = (boxTop - 10) + "px";
        
    }
    else if(keyName === 'ArrowDown'){
        box.style.top = (boxTop + 10) + "px";
    }
//Movimentação lateral
    if(keyName === 'ArrowLeft'){
        box.style.left = (boxLeft - 10) + "px";
    }
    else if(keyName === 'ArrowRight'){
        box.style.left = (boxLeft + 10) + "px";
    }
}

document.addEventListener('keydown', keyListener);