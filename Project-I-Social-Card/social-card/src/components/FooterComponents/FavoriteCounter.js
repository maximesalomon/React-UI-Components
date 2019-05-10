import React from 'react';

class FavoriteCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 4
      };
    }
  
    render() {
      return (
        <div className="favorite">
          <div onClick={() => this.setState({ count: this.state.count + 1})}>❤️</div>
          <div>{this.state.count}</div>
        </div>
      )
    }
  };

export  default FavoriteCounter;

  