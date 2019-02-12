import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      number: 0,
    }
    this.press = this.press.bind(this);
  }

  setNumber(number) {
    this.setState({ number });
  }

  press(keynum) {
    this.setNumber(keynum);
  }

  render() {
    return (
      <div>
        <div className="app">
          <CalculatorDisplay total={this.state.number} />
          <div className="calckeys">
            <NumberButton press={this.press} />
            <ActionButton />
          </div>
        </div>
      </div>
    );
  }
};

export default App;