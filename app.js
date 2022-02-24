// create keyboard
// select keys
const keyboard = document.querySelector('.key-container');

// create arry of key's letters
const keys = ['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 
'Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'ENTER',
'W', 'X', 'C', 'V', 'B', 'N', '-'];

let currentRow = 0;
let currentTile = 0;

// Solution alternative:
// const handleClick = (event) => {
//     console.log('click', event.target);
//     console.log('click', event.target.id);
//     addLetter(event.target.id)
// }

// Handles the letter coming from the eventListener
const handleClick = (key) => {
    console.log('Clicked Tile:', key);
    // use the letter in a fonction to add it in the grid
    addLetter(key)
    // console.log(letter)
}

// Function to add the handled letter typed inside a tile/row/grid 
const addLetter = (letter) => {
    // const tile = document.getElementById('guessedRow-0-tile0');
    const tile = document.getElementById('guessedRow-' + currentRow + '-tile-' + currentTile);
    tile.textContent = letter;
    guessedRows[currentRow][currentTile] = letter;
    currentTile++;
    console.log(guessedRows)
}

// assign letters to keys
keys.forEach(key => {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = key;
    buttonElement.setAttribute('id', key);
    // buttonElement.addEventListener('click', handleClick);
    buttonElement.addEventListener('click', ()=> handleClick(key));
    keyboard.append(buttonElement);
})

// creates the tiles
const tileDisplay = document.querySelector('.tile-container');

// handle the click
const wordle = 'SUPER';

// creates an array of 6 empty arrays of guessed letters for 6 attempts
const guessedRows = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
];

// loop creates divs for each guessed letter
guessedRows.forEach((guessedRow, guessedRowIndex) => {
    const rowElement = document.createElement('div');
    rowElement.setAttribute('id', 'guessedRow-' + guessedRowIndex);
    // loop inside the loop: creates letter for each tile
    guessedRow.forEach((guessedLetter, guessedLetterIndex) => {
        const tileElement = document.createElement('div');
        tileElement.setAttribute('id', 'guessedRow-' + guessedRowIndex + '-tile-' + guessedLetterIndex)
        tileElement.classList.add('tile');
        rowElement.append(tileElement);
    })
    tileDisplay.append(rowElement);
});