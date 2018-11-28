console.log('JS Loaded');

//Create players for switch between 
var playerX = 'X';
var playerO = 'O';
var currentPlayer = playerX;


//Create variables for cells to listen for click
// var cells = document.querySelectorAll('.cell');
// var cell = cells.children;

var cells = document.getElementsByClassName('cell');

for (var i=0; i<cells.length; i++) {
    console.log(cells[i]);
    cells[i].addEventListener('click', markCell);
}

// Function to Mark Cell and change to next player upon click
function markCell() {
    this.innerText = currentPlayer;
    if (currentPlayer === playerX) {
        currentPlayer = playerO
     } else {
         currentPlayer = playerX;
     }
     cells[i].removeEventListener('click', markCell);
}



// Disable clicked cell from being clicked again
// function usedCell() {
//     if cell[i]
// }


// cells.addEventListener('click', function (go) {
//     console.log('Go');
// })
