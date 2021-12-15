import React from 'react'

export default class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: true
        };
    }

    render() {
        let clickState = this.state.clicked;
      return (
        <button className="square" onClick={() => this.setState({clicked: !clickState})}>
          {clickState ? this.props.value : 'X'}
        </button>
      );
    }
  }