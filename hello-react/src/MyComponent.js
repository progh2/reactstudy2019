import React from 'react';

const MyComponent = props => {
  return (
    <div>
      나의 새롭고 멋진 컴포넌트! <br> </br>안녕하세요, 제 이름은 {props.name}
      입니다.
    </div>
  );
};

export default MyComponent;
