// create keyboard
// select keys
const keyboard = document.querySelector('.key-container');

// create arry of key's letters
const keys = ['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 
'Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'ENTER',
'W', 'X', 'C', 'V', 'B', 'N', '-'];

const handleClick = (event) => {
    event.preventDefault();
    console.log('click', event.target);
}

// assign letters to keys
keys.forEach(key => {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = key;
    buttonElement.setAttribute('id', key);
    buttonElement.addEventListener('click', handleClick);
    keyboard.append(buttonElement);
})

// creates the tiles
const tileDisplay = document.querySelector('.tile-container');

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
        tileElement.setAttribute('id', 'guessedRow-' + guessedRowIndex + '-tile' + guessedLetterIndex)
        tileElement.classList.add('tile');
        rowElement.append(tileElement);
    })
    tileDisplay.append(rowElement);
});