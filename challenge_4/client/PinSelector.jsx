import React from 'react';
import ReactDOM from 'react-dom';

function PinSelector(props) {
  const divStyle = {
    height: '40px', 
    width: '40px'
  }

  const pins = [1,2,3,4,5,6,7,8,9,10];
  let keyPad = pins.map((pin)=> <button 
      style = {divStyle} 
      onClick={()=>props.handleClick(pin) }> {pin}
    </button> );

  return <div> {keyPad} </div>;
}

export default PinSelector;