import React from 'react';
import {render} from 'react-dom';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      row1: [null, null, null, null, null, null, null],
      row2: [null, null, null, null, null, null, null],
      row3: [null, null, null, null, null, null, null],
      row4: [null, null, null, null, null, null, null],
      row5: [null, null, null, null, null, null, null],
      row6: [null, null, null, null, null, null, null],
      row6: [null, null, null, null, null, null, null],
    };
  }

  render () {
    return (
      <div>
        <h1> Connect Four!</h1>
        <div>
         <table>
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
        </table>
       </div>
      </div>
    );
  }
}

class Row extends React.Component {
  render() {
    return (
      <tr>
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </tr>
    );
  }
}


class Square extends React.Component {

  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  render() {
    return (
      <button value={this.state.counter} onClick={(e)=>console.log(e.target.value)} style={{width:'80px',height:'80px'}}></button>

    )
  }
}

render(<App/>, document.getElementById('app'));