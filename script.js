
const gridContainer = document.querySelector('#board');
const colorButtons = document.querySelectorAll('.color-btn');
const toolBUttons = document.querySelectorAll('.tool-btn');
const resetButton = document.querySelector('.reset-btn');
const board = document.querySelector('#board');

createGrid(16) 

const boardSqrs = document.querySelectorAll('.square');
let selectedColor = "black";
let selectedTool = "pen";
let isDrawing = false;


function draw(elem, color) {
    elem.style.backgroundColor = color;
}

function erase(elem) {
    elem.style.backgroundColor = '';
}

function resetGrid() {
    boardSqrs.forEach(sqr => {
         sqr.style.backgroundColor = '';
    })
}

colorButtons.forEach( btn => {
    btn.addEventListener('click', e => {
        const color = e.target.dataset.color;
        selectedColor = color;
        console.log(selectedColor);
                
    } )
})

toolBUttons.forEach( btn => {
    btn.addEventListener('click', e => {
        const tool = e.currentTarget.id;
        selectedTool = tool;
    })
})

resetButton.addEventListener('click', e => {
    resetGrid();    
})

boardSqrs.forEach(sqr => {
    sqr.addEventListener('mouseup', e => {    
            isDrawing = false;
    })
})


boardSqrs.forEach(sqr => {
    sqr.addEventListener('mousedown', e => {    
        const sqr = e.target;
        if (selectedTool === 'pen') {
            isDrawing = true;
            draw(sqr, selectedColor)
        } else {
            erase(sqr);
        }
    })
})

boardSqrs.forEach(sqr => {
    sqr.addEventListener('mouseenter', e => {     
        const sqr = e.target;
        if (isDrawing) {
            draw(sqr, selectedColor);
        }
    })
})


boardSqrs.forEach(sqr => {
    sqr.addEventListener('mousedown', e => {    
        const sqr = e.target;
        if (selectedTool === 'eraser') {
            erase(sqr);
        } 
    })
})


function createGrid(size) { 
    const sqrWidth = gridContainer.clientWidth / size;
    const sqrHeight = gridContainer.clientHeight / size;

    for(let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.style.width = `${sqrWidth}px`;
        square.style.height = `${sqrHeight}px`;
        square.classList.add('square');
        gridContainer.appendChild(square);
    }
}

