// Variables
const gridContainer = document.querySelector('.grid-container');
const gridItem  = document.querySelector('.grid-item');
const gridInfo = document.querySelector('#grid-info');

let n = 5;
let widthAndHeight = 750; 

//Change hegiht and width of grid according to the number of boxes
gridContainer.style.width = `${widthAndHeight}px`;
gridContainer.style.height = `${widthAndHeight}px`;

function gridSize() {
    n = prompt("Enter a number between 1 and 100");
    if (n >=1 && n <= 100) {
        generateGrid()
    } else {
        alert("Enter a number between 1 and 100");
    }
}

function generateGrid() {
    gridContainer.innerHTML = "";
    //Calculate grid item size
    const itemSize = widthAndHeight / n;

    for (let i = 0; i < n * n; i++) { //Create boxes
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');

        // Apply Size change to grid item
        gridItem.style.width = `${itemSize}px`;
        gridItem.style.height = `${itemSize}px`;

        // left click to draw
        gridItem.addEventListener('click', () => {
            gridItem.classList.add ('black');
        })

        // right click to erase
        gridItem.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            gridItem.classList.remove ('black');
        })

        gridContainer.appendChild(gridItem);
        gridInfo.textContent = `${n} x ${n}`;
    }
}

gridSize();