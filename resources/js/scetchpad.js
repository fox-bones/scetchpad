const gridContainer = document.querySelector('#grid-container');
const dropdownButton = document.getElementById('btn');
const dropDownMenu = document.getElementById('dropdown');
const _4x4 = document.getElementById('_4x4');
const _8x8 = document.getElementById('_8x8');
const _16x16 = document.getElementById('_16x16');
const _32x32 = document.getElementById('_32x32');
const _64x64 = document.getElementById('_64x64');
const _128x128 = document.getElementById('_128x128');

// remove prior grid squares and replace with new amount
const gridSpawn = num => {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    };
    let i = 0;
    while (i < num) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        gridContainer.appendChild(gridCell);
        i++;
    };
};

// change container dimensions based on user choice
const gridChange = dimensions => {
    if (dimensions === '4x4') {
        document.getElementById('grid-container').style.gridTemplate='repeat(4, 1fr) / repeat(4, 1fr)';
        gridSpawn(16);
    } else if (dimensions === '8x8') {
        document.getElementById('grid-container').style.gridTemplate='repeat(8, 1fr) / repeat(8, 1fr)';
        gridSpawn(64);
    } else if (dimensions === '16x16') {
        document.getElementById('grid-container').style.gridTemplate='repeat(16, 1fr) / repeat(16, 1fr)';
        gridSpawn(256);
    } else if (dimensions === '32x32') {
        document.getElementById('grid-container').style.gridTemplate='repeat(32, 1fr) / repeat(32, 1fr)';
        gridSpawn(1024);
    } else if (dimensions === '64x64') {
        document.getElementById('grid-container').style.gridTemplate='repeat(64, 1fr) / repeat(64, 1fr)';
        gridSpawn(4096);
    } else if (dimensions === '128x128') {
        document.getElementById('grid-container').style.gridTemplate='repeat(128, 1fr) / repeat(128, 1fr)';
        gridSpawn(16384);
    } else {
        document.getElementById('grid-container').style.gridTemplate='repeat(4, 1fr) / repeat(4, 1fr)';
        gridSpawn(16);
    }
};

gridChange();

// change container dimensions based on user click
_4x4.addEventListener('click', 
    function() {
        gridChange('4x4');
    });
_8x8.addEventListener('click', 
    function() {
        gridChange('8x8');
    });
_16x16.addEventListener('click', 
    function() {
        gridChange('16x16');
    });
_32x32.addEventListener('click',
    function() {
        gridChange('32x32');
    });
_64x64.addEventListener('click',
    function() {
        gridChange('64x64');
    });
_128x128.addEventListener('click',
    function() {
        gridChange('128x128');
    });