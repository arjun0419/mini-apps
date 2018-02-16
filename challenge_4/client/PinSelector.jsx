import React from 'react';
import ReactDOM from 'react-dom';

function PinSelector(props) {
  const divStyle = {
    height: '40px', 
    width: '40px'
  }

  let pins = [];

  for (var i = 1; i < props.pinsToRender + 1; i++) {
    pins.push(i);
  }

  let keyPad = pins.map((pin)=> <button 
      style = {divStyle} 
      onClick={()=>props.handleClick(pin) }> {pin}
    </button> );

  return <div> {keyPad} </div>;
}

export default PinSelector;