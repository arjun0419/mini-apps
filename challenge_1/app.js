function Board() {
  return {
    board: [null, null, null, null, null, null, null, null, null],
    counter: 0
  }
};

var newBoardCreator = function() {
  var newBoard = new Board();
  return newBoard;
};

var newGame = function(){
  var allRows = document.getElementsByClassName('row');
  for (var key in allRows) {
      allRows[key].innerText = "-";
  }
  play = newBoardCreator();
};

var play = newBoardCreator();


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

var checkDiagonals = function (board, player) {
  if ((board[0] === player) && (board[4] === player) && (board[8] === player)) {
      return true;
    } else if ((board[6] === player) && (board[4] === player) && (board[2] === player)) {
      return true;
    } else {
      return false;
    }
}


var checkIfPlayerWon = function(board, player) {
  if (checkRows(board, player) || checkDiagonals(board, player) || checkColumns(board, player)) {
    return true;
  } else {
    return false;
  }
}

var handleThisEvent = function(event){

  if (event.target.value === 'restart') {
    newGame();
  }

  if(event.target.innerText === '-') {
    if (play.counter % 2 === 0) {
      event.target.innerText = "X";
      play.board[parseInt(event.target.value)] = 0;

      if (checkIfPlayerWon(play.board, 0)) {
        window.location.reload(true);
        alert ('Player X won!!!');
      }

      play.counter++;
    } else {
      event.target.innerText = "O";
      play.board[parseInt(event.target.value)] = 1;
       
      if (checkIfPlayerWon(play.board, 1)) {
        alert ('Player O won!!!');
        window.location.reload(true);
      }

      play.counter++;
    }
  } 

  if (!play.board.includes(null)) {
    alert("that was a tie");
    window.location.reload(true);
  }
};