const MAX = 9;

function scale() {
    let number = 1;
    let distance = 1;
    while(number < MAX) {
        moveRight(number, distance);
        number += distance;
        moveUp(number, distance);
        number += distance;
        distance++;
        moveLeft(number, distance);
        number += distance;
        moveDown(number, distance);
        number += distance;
    }
}

function moveRight(number, distance) {
    for(let i = 0; i < distance; i++) {
        document.querySelector(`#n${1}`).textContent = number;
        document.querySelector(`#n${1}`).parentNode.appendChild(i+1);
    }
}

scale();