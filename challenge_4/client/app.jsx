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
      round: 1,
      totalScore: 0,
      roundScore: [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],
      frameArray: [],
      pinsToRender: 10,
    };

    this.handleClick = this.handleClick.bind(this);
    this.updateTotalScore = this.updateTotalScore.bind(this);
    this.updateFrameArray = this.updateFrameArray.bind(this);
    this.updateRoundScoreArray = this.updateRoundScoreArray.bind(this);
  }

  updateRoundScoreArray(value) {
      this.updateFrameArray(value);
      var newRoundScoreArray = this.state.roundScore.slice();
      newRoundScoreArray[this.state.round - 1] = this.state.frameArray;
      this.setState({roundScore: newRoundScoreArray});
      this.setState({frameArray: []});
  }

  updateFrameArray(value) {
    var newFrameArray = this.state.frameArray.slice();
    newFrameArray.push(value);
    this.setState({frameArray: newFrameArray});
  }

  updateTotalScore(value) {
    var oldScore = this.state.totalScore;
    var newScore = oldScore + value;
    this.setState({totalScore: newScore})
  };

  handleClick(value) {
    //update total score
    this.updateTotalScore(value);

    //if value clicked is < 10, render 10 - value pins
    if (value < 10) {
      this.setState({pinsToRender: 10 - value});
    }

    //check to see if this click was for the second frame,
    if (this.state.frameArray.length === 1) {
      this.updateRoundScoreArray(value);
      this.setState({pinsToRender: 10});
      //increment round 
      this.setState({round: this.state.round + 1});        
    } else {
      //push value into frameArr
      this.updateFrameArray(value);
    }
  }

  render() {
    // Because `this.handleClick` is bound, we can use it as an event handler.
    return (
      <div>
        <h1>Let's Bowl!</h1>
        <div> 
          <h2>Alright, round {this.state.round}. Pick number of pins you want to hit:</h2>
          <PinSelector pinsToRender = {this.state.pinsToRender} handleClick = {this.handleClick} />
        </div>
        <div>
          <h3> Your total Score after {this.state.round} rounds is {this.state.totalScore} </h3>
          <Board style={{margin: "200px"}} round={this.state.roundScore} totalScore = {this.state.totalScore}/> 

        </div>
      </div>
    );
  }
}



ReactDOM.render(
  <Game />,
  document.getElementById('root')
);