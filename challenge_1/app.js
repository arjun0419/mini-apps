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

//creates a new game
var newGame = function(){
  var allRows = document.getElementsByClassName('row');
  for (var key in allRows) {
      allRows[key].innerText = "-";
  }
  play = new Board();
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
      play.counter++;

      if (checkIfPlayerWon(play.board, 0)) {
        gameSession.playerXwins++;
        var scoreNode = document.getElementById('playerXScore');
        scoreNode.innerText = gameSession.playerXwins;
        alert ('Player X won!!!');
        newGame();
        console.log("counter:", play.counter);
         console.log("play:", play)
      }

    } else {
      event.target.innerText = "O";
      play.board[parseInt(event.target.value)] = 1;
      play.counter++;
       
      if (checkIfPlayerWon(play.board, 1)) {
        gameSession.playerOwins++;
        var scoreNode = document.getElementById('playerOScore');
        scoreNode.innerText = gameSession.playerOwins;
        alert ('Player O won!!!');
        newGame();
        console.log("counter:", play.counter);
        console.log("play:", play)
      }
    }
  } 

  if (!play.board.includes(null)) {
    alert("that was a tie");
    newGame();
  }
};

//instantiates a new game
var play = new Board();
var gameSession = new GameSession();