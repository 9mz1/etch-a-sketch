// Variables
const gridContainer = document.querySelector('.grid-container');
const gridItem  = document.querySelector('.grid-item');
const gridInfo = document.querySelector('#grid-info');

const resetBtn = document.querySelector('#reset');
const gridSizeBtn = document.querySelector('#grid-size');
const rainbowBtn = document.querySelector('#rainbow-btn');

let n = 8;
let widthAndHeight = 750; 
let rainbow = 0;

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
        gridItem.addEventListener('mouseover', () => {
            if (rainbow === 1) {
                const randomColor = `rgb(${numberGen()}, ${numberGen()}, ${numberGen()})`;
                gridItem.style.backgroundColor = randomColor;
            }
        });

        gridItem.addEventListener('click', () => {
            if (rainbow === 0) {
                gridItem.classList.add('black');
            }
        });

        // right click to erase
        gridItem.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            gridItem.classList.remove ('black');
        })

        gridContainer.appendChild(gridItem);
        gridInfo.textContent = `${n} x ${n}`;
    }
}

// Rainbow Functions
function numberGen() {
    let randomNo = Math.floor(Math.random() * 255);
    return randomNo;
}
function rainbowMode() {
    if  (rainbow) {
        rainbow = 0;
        rainbowBtn.style.backgroundColor = "#7BA4B3";
    } else if(!rainbow) {
        rainbow = 1;
        rainbowBtn.style.backgroundColor = "#EF4269";
    }
}

//Event Listeners
resetBtn.addEventListener('click', () => {
    generateGrid();
})

gridSizeBtn.addEventListener('click', () => {
    gridSize();
})

rainbowBtn.addEventListener('click', () => {
    rainbowMode();
})

generateGrid();