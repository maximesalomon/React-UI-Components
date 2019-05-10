import React from 'react';

class RetweetCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 6
      };
    }
  
    render() {
      return (
        <div className="retweet">
        <div onClick={() => this.setState({ count: this.state.count + 1})}>♻️</div>
        <div>{this.state.count}</div>
      </div>
      )
    }
  };

  export default RetweetCounter;