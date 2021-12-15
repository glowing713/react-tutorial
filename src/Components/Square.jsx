import React from "react";

export default class Square extends React.Component {
  render() {
    const { value, onClick } = this.props;
    return (
      // 클릭 이벤트가 발생할 때, props로 넘겨받은 onClick 함수를 호출한다.
      <button className="square" onClick={() => onClick()}>
        {value}
      </button>
    );
  }
}
