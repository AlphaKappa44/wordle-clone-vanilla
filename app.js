// create keyboard
// select keys
const keyboard = document.querySelector('.key-container');

// create arry of key's letters
const keys = ['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 
'Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'ENTER',
'W', 'X', 'C', 'V', 'B', 'N'];

const handleClick = (event) => {
    event.preventDefault();
    console.log('click', event.target);
}

// assign letters to keys
keys.forEach(key => {
    const buttonElement = document.createElement('button')
    buttonElement.textContent = key;
    buttonElement.setAttribute('id', key);
    buttonElement.addEventListener('click', handleClick);
    keyboard.append(buttonElement);
})

// create the tiles
const tileDisplay = document.querySelector('.tile-container');

