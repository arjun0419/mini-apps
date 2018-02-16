import React from 'react';
import ReactDOM from 'react-dom';

function Board(props) {
  const devStyle = {
    display:'block',
    border: 'solid',
    width: '350px',  
    padding: '5px 5px 5px 5px'
  }

  let scoreArray = props.round;

  let scoreBoard = scoreArray.map((round, index)=> 
    <div style = {devStyle} >
      Round {index+1} toal score: {round[0] + round[1]} (Frame 1: {round[0]} & Frame 2: {round[1]})
    </div>);

  return <div>
    {scoreBoard}
    </div>;
}

export default Board;