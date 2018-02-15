import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board.jsx';
import PinSelector from './PinSelector.jsx';


//simplified Game Mechanics
  //each Game is 10 Rounds
  //each round has "ONE" play
  //in each round, player can select the number of pins player would like to hit for that play
  //this continues for 10 rounds and the game is over

//User interface
 //keypad: select the number of pins to hit
 //``

//Game component
  //State: TotalScore, Scores for each Round in an array


class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      round: 0,
      totalScore: 0,
      roundScore: [0,0,0,0,0,0,0,0,0,0],
      currentRound: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {

    //update current round score
    var currentRoundsArr = this.state.roundScore.slice();
    currentRoundsArr[this.state.round] = value;
    this.setState({roundScore: currentRoundsArr})

    //update running total
    var oldScore = this.state.totalScore;
    var newScore = oldScore + value;
    this.setState({totalScore: newScore})

    //increment round after each play
    this.setState({round: this.state.round + 1});
  }

  render() {
    // Because `this.handleClick` is bound, we can use it as an event handler.
    return (
      <div>
        <h1>Let's Bowl!</h1>
        <div> 
          <h2>Alright, round {this.state.round}. Pick number of pins you want to hit:</h2>
          <PinSelector handleClick = {this.handleClick} />
        </div>
        <div>
          <Board style = {{margin: "200px"}}round = {this.state.roundScore}/> 
          <h3> Your total Score after {this.state.round} rounds is {this.state.totalScore} </h3>
        </div>
      </div>
    );
  }
}



ReactDOM.render(
  <Game />,
  document.getElementById('root')
);