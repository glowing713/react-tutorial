import React from "react";

const Square = (props) => {
  const { value, onClick } = props;
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;

// export default class Square extends React.Component {
//   render() {
//     console.log(this.props);
//     const { value, onClick } = this.props;
//     return (
//       // 클릭 이벤트가 발생할 때, props로 넘겨받은 onClick 함수를 호출한다.
//       <button className="square" onClick={onClick}>
//         {value}
//       </button>
//     );
//   }
// }
