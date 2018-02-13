function GameSession() {
  return {
    playerXwins: 0,
    playerOwins: 0,
    tie: 0
  }
}

//Board object
function Board() {
  return {
    board: [null, null, null, null, null, null, null, null, null],
    counter: 0,
  }
};

//creates a new instance of the Board object
var newBoardCreator = function() {
  var newBoard = new Board();
  return newBoard;
};

// var play = newBoardCreator();

//creates a new game
var newGame = function(){
  var allRows = document.getElementsByClassName('row');
  for (var key in allRows) {
      allRows[key].innerText = "-";
  }
  play = newBoardCreator();
};

//checks if there are any rowConflicts
var checkRows = function (board, player) {
    if ((board[0] === player) && (board[1] === player) && (board[2] === player)) {
      return true;
    } else if ((board[3] === player) && (board[4] === player) && (board[5] === player)) {
      return true
    } else if ((board[6] === player) && (board[7] === player) && (board[8] === player)) {
      return true;
    } else {
      return false;
    }
}

//checks if there are any column conflicts
var checkColumns = function (board, player) {
    if ((board[0] === player) && (board[3] === player) && (board[6] === player)) {
      return true;
    } else if ((board[1] === player) && (board[4] === player) && (board[7] === player)) {
      return true
    } else if ((board[2] === player) && (board[5] === player) && (board[8] === player)) {
      return true;
    } else {
      return false;
    }
}

//checks if there are any diagoinal conflicts
var checkDiagonals = function (board, player) {
  if ((board[0] === player) && (board[4] === player) && (board[8] === player)) {
      return true;
    } else if ((board[6] === player) && (board[4] === player) && (board[2] === player)) {
      return true;
    } else {
      return false;
    }
}

//checks to see if either player won after each move
var checkIfPlayerWon = function(board, player) {
  if (checkRows(board, player) || checkDiagonals(board, player) || checkColumns(board, player)) {
    return true;
  } else {
    return false;
  }
}

//all purpose event listener
var handleThisEvent = function(event){
  if (event.target.value === 'restart') {
    newGame();
  }

  if(event.target.innerText === '-') {
    if (play.counter % 2 === 0) {
      event.target.innerText = "X";
      play.board[parseInt(event.target.value)] = 0;

      if (checkIfPlayerWon(play.board, 0)) {
        gameSession.playerXwins++;
        console.log(gameSession.playerXwins);
        var scoreNode = document.getElementById('playerXScore');
        console.log(scoreNode.innerText);
        scoreNode.innerText = gameSession.playerXwins;
        alert ('Player X won!!!');
        newGame();
      }

      play.counter++;
    } else {
      event.target.innerText = "O";
      play.board[parseInt(event.target.value)] = 1;
       
      if (checkIfPlayerWon(play.board, 1)) {
        gameSession.playerOwins++;
        var scoreNode = document.getElementById('playerOScore');
        console.log("O node", scoreNode.innerText);
        scoreNode.innerText = gameSession.playerOwins;
        alert ('Player O won!!!');
        newGame();
      }

      play.counter++;
    }
  } 

  if (!play.board.includes(null)) {
    alert("that was a tie");

  }
};

//instantiates a new game
var gameSession = new GameSession();
newGame();