import React from "react";
import Square from "./Square";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const board = this.state.board;
    board[i] = "X";
    this.setState({ board });
  }

  renderSquare(i) {
    // Square 컴포넌트에 클릭 이벤트가 발생하면 onClick prop인 handleClick 함수를 전달한다.
    return (
      <Square
        value={this.state.board[i]}
        onClick={() => {
          //   console.log(this);
          // Square 컴포넌트 내부의 button이 클릭되면 prop으로 넘겨받은 onClick 함수(handleClick)가 실행된다.
          // 이때, handleClick 내부의 this를 콘솔에 찍어보면 Board 클래스에 바인딩되어있는 것을 확인할 수 있다.
          this.handleClick(i);
        }}
      />
    );
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
