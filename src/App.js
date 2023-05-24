import styled from "styled-components";
const SimpleButton = styled.button`
  color: white;
  background-color: green;
`;
const LargeButton = styled(SimpleButton)`
  font-size: 50px;
`;
// 일반적인 방법
const ReactButton = (props) => {
  return <button>{props.children}</button>;
};
const ReactLargeButton = styled(ReactButton)`
  font-size: 50px;
`;
const App = () => {
  return (
    <div>
      <SimpleButton>Simple</SimpleButton>
      {/* 렌더링이 될 경우에 클래스 이름을 자동적으로 붙여준다 */}
      <LargeButton>Large</LargeButton>
      <ReactButton>React</ReactButton>
      <ReactLargeButton>React Large</ReactLargeButton>
    </div>
  );
};
export default App;
