// select keys
// create keyboard
const keyboard = document.querySelector('.key-container');
// creates the tiles
const tileDisplay = document.querySelector('.tile-container');

const messageDisplay = document.querySelector('.message-container');

// handle the click
const wordle = 'SUPER';
// create array of key's letters
const keys = ['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 
'Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'ENTER',
'W', 'X', 'C', 'V', 'B', 'N', 'DEL'];

let currentRow = 0;
let currentTile = 0;
let isGameOver = false;

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
    if (key === 'DEL' ) {
        deleteLetter();
        console.log(guessedRows)
        return
    }
    if (key === 'ENTER' ) {
        console.log('Checking row:')
        checkRow();
        console.log(guessedRows)
        return
    }
    addLetter(key)
    // console.log(letter)
    console.log(guessedRows)
}

// Function to add the handled letter typed inside a tile/row/grid 
    const addLetter = (letter) => {
        if(currentTile < 5 && currentRow < 6) {
        // const tile = document.getElementById('guessedRow-0-tile0');
        const tile = document.getElementById('guessedRow-' + currentRow + '-tile-' + currentTile);
        tile.textContent = letter;
        guessedRows[currentRow][currentTile] = letter;
        tile.setAttribute('data', letter);
        currentTile++;

    }
}

const deleteLetter = () => {
    if (currentTile > 0) {
        currentTile--
        const tile = document.getElementById('guessedRow-' + currentRow + '-tile-' + currentTile);
        tile.textContent = '';
        guessedRows[currentRow][currentTile] = '';
        tile.setAttribute('data', '');
        console.log('Deleted letter')
    } else {
        console.log('Nothing to delete!')
    }

}

const checkRow = () => {
    guess = guessedRows[currentRow].join('')

    if (currentTile > 4) {
        console.log('Guess is ' + guess, 'and Wordle is ' + wordle)
        flipTile()
        if (wordle == guess) {
            showMessage('GOOD JOB !!!')
            isGuessed = true
            return
        } else {
            if (currentRow >= 5) {
                isGameOver = true
                showMessage('Game Over...')
                return
            }
            if (currentRow < 5) {
                currentRow++
                currentTile = 0
            }
        }
    }

}

const showMessage = (message) => {
    const messageElement = document.createElement('p')
    messageElement.textContent = message
    messageDisplay.append(messageElement)
    setTimeout(() => {
        messageDisplay.removeChild(messageElement)
    }, 4000);
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

const flipTile = () => {
    const rowTiles = document.querySelector('#guessedRow-' + currentRow).childNodes
    rowTiles.forEach((tile, index) => {
        const dataLetter = tile.getAttribute('data')
        setTimeout(() => {
            if (dataLetter == wordle[index]) {
                tile.classList.add('green-overlay')
            } else if (wordle.includes(dataLetter)) {
                tile.classList.add('yellow-overlay')
            } else {
                tile.classList.add('grey-overlay')
            }
        }, 500 * index);
    })
}