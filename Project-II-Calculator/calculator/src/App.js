import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      total: 0,
      current_number: 0,
      number: 0,
      operator: null,
      second_number: 0,
    }
    this.press = this.press.bind(this);
  }

  press(current_number) {
    this.setState({ current_number });
    this.setNumber(current_number)
  }
  
  setNumber(number){
    number = number + number
    this.setState({number})
  }

  

  render() {
    return (
      <div>
        <div className="app">
          <CalculatorDisplay total={this.state.total} />
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