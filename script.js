var SIZE = 16;
var isMouseDown = false;
const canvas = document.querySelector('#canvas');
const reset = document.querySelector('#reset');
const resize = document.querySelector('#resize');
const rainbow = document.querySelector('#rainbow');
const grid = document.querySelector('#grid');

document.body.onmousedown = function(e) {
    if (canvas.contains(e.target)) {
        e.preventDefault();
    }
    isMouseDown = true;
};

document.body.onmouseup = function() {
    isMouseDown = false;
};

for (let i = 0; i < SIZE; i++) {
    var column = document.createElement("div");
    column.classList.add("column");
    canvas.appendChild(column);
    for (let j = 0; j < SIZE; j++) {
        var cell = document.createElement("div");
        cell.classList.add("cell");
        if (grid.checked) {
            cell.style.border = '1px solid red';
        }
        cell.addEventListener("click", paintCanvas);
        cell.addEventListener("mouseenter", paintCanvas2);
        column.appendChild(cell);
    }
}

function paintCanvas(e) {
    if (rainbow.checked) {
        e.target.style.backgroundColor = "orange";
    }
    else {
        e.target.style.backgroundColor = "black";
    }
}

function paintCanvas2(e) {
    if (isMouseDown) {
        if (rainbow.checked) {
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            e.target.style.backgroundColor = '#' + randomColor;
        }
        else {
            e.target.style.backgroundColor = "black";
        }
    }
}

function resetCanvas() {
    let cells = document.getElementsByClassName('cell');
    for(let index = 0; index < cells.length ; ++index) {
        cells[index].style.backgroundColor = 'white';
    }
}

function resizeCanvas() {
    var newSize = resize.value;
    if (newSize < 65) {
        SIZE = newSize;
        while(canvas.hasChildNodes()) {
            canvas.removeChild(canvas.lastChild);
        }
        for (let i = 0; i < SIZE; i++) {
            var column = document.createElement("div");
            column.classList.add("column");
            canvas.appendChild(column);
            for (let j = 0; j < SIZE; j++) {
                var cell = document.createElement("div");
                cell.classList.add("cell");
                if (grid.checked) {
                    cell.style.border = '1px solid red';
                }
                cell.addEventListener("click", paintCanvas);
                cell.addEventListener("mouseenter", paintCanvas2);
                column.appendChild(cell);
            }
        }
    } 
}

function toggleGrid() {
    let cells = document.getElementsByClassName('cell');
    if (grid.checked) {
        for(let index = 0; index < cells.length ; ++index) {
            cells[index].style.border = '1px solid red';
        }
    }
    else {
        for(let index = 0; index < cells.length ; ++index) {
            cells[index].style.border = '';
        }
    }
}

reset.addEventListener('click', resetCanvas);
resize.addEventListener('change', resizeCanvas);
grid.addEventListener('change', toggleGrid);