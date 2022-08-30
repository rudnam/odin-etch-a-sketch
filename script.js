var SIZE = 16;
var isMouseDown = false;
const canvas = document.querySelector('#canvas');
const reset = document.querySelector('#reset');
const resize = document.querySelector('#resize');

document.body.onmousedown = function(e) {
    e.preventDefault();
    isMouseDown = true;
    console.log('down')
}
document.body.onmouseup = function() {
    isMouseDown = false;
    console.log('up');
}

for (let i = 0; i < SIZE; i++) {
    var column = document.createElement("div");
    column.classList.add("column");
    canvas.appendChild(column)
    for (let j = 0; j < SIZE; j++) {
        var cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("mouseenter", paintBlack);
        column.appendChild(cell);
    }
}

function paintBlack(e) {
    if (isMouseDown) {
        e.target.style.backgroundColor="black";
    }
}

function resetCanvas() {
    let cells = document.getElementsByClassName('cell');
    for(let index = 0; index < cells.length ; ++index) {
        cells[index].style.backgroundColor = 'white';
    }
}

function resizeCanvas() {
    var newSize = prompt('Enter new size (max 100):');
    if (newSize < 101) {
        SIZE = newSize;
        while(canvas.hasChildNodes()) {
            canvas.removeChild(canvas.lastChild);
        }
        for (let i = 0; i < SIZE; i++) {
            var column = document.createElement("div");
            column.classList.add("column");
            canvas.appendChild(column)
            for (let j = 0; j < SIZE; j++) {
                var cell = document.createElement("div");
                cell.classList.add("cell");
                cell.addEventListener("mouseover", paintBlack);
                column.appendChild(cell);
            }
        }
    } 
}

reset.addEventListener('click', resetCanvas);
resize.addEventListener('click', resizeCanvas);