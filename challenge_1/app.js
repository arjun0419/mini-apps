
//On page load, let player X start the game
//On page load, instantiate a new board
//on click of a button, change button value to X

function Board() {
  return {
    row1: [null, null, null],
    row2: [null, null, null],
    row3: [null, null, null],
    counter: 0
  }
};

var newBoardCreator = function() {
  var newBoard = new Board();
  return newBoard;
};

var board = newBoardCreator();

var someFunction = function(event){
  if(event.target.innerText === '-') {
    if (board.counter % 2 === 0) {
      event.target.innerText = "X";
      board.counter++;
    } else {
      event.target.innerText = "O";
      board.counter++;
    }
  }
}
