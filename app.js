// Variables
const gridContainer = document.querySelector('.grid-container');
const gridItem  = document.querySelector('.grid-item');
const gridInfo = document.querySelector('#grid-info');

let n = 5;
let rows = n;
let columns = n;
let widthAndHeight = n * 30

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
    //Change hegiht and width of grid according to the number of boxes
    let widthAndHeight = n * 30
    gridContainer.style.width = `${widthAndHeight}px`;
    gridContainer.style.height = `${widthAndHeight}px`;

    for (let i = 0; i < n * n; i++) { //Create boxes
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);
        gridInfo.textContent = `${n} x ${n}`;

        // left click to draw
        gridItem.addEventListener('click', () => {
            gridItem.classList.add ('black');
        })

        // right click to erase
        gridItem.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            gridItem.classList.remove ('black');
        })
    }
}

gridSize();