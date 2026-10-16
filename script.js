const gridContainer = document.querySelector('#board');

function createGrid(size) { 
    const sqrWidth = gridContainer.clientWidth / size;
    const sqrHeight = gridContainer.clientHeight / size;

    for(let i = 1; i < size * size; i++) {
        const square = document.createElement('div');
        square.style.width = `${sqrWidth}px`;
        square.style.height = `${sqrHeight}px`;
        square.classList.add('square');
        gridContainer.appendChild(square);
    }

}

 createGrid(16) 