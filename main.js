console.log('JS Loaded');

//Create players for switch between 
var playerX = 'X';
var playerO = 'O';
var currentPlayer = playerX;


// Creates cells ARRAY of each cell in the game board
var cells = document.getElementsByClassName('cell');


//Adds event Listener to each cell and allows each cell to get marked upon CLICK
for (var i=0; i<cells.length; i++) {
    console.log(cells[i]);
    cells[i].addEventListener('click', markCell);
}

// Function to Mark Cell and switch to next player (toggle btw 'X' / 'O' ) upon click
function markCell() {
    this.innerText = currentPlayer;
    if (currentPlayer === playerX) {
        currentPlayer = playerO
     } else {
         currentPlayer = playerX;
     }
     cells[i].removeEventListener('click', markCell);
}
