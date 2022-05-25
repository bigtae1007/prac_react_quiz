import React from "react";
import styled from "styled-components";
import QuizMain from "./QuizMain";
import ActQuiz from "./ActQuiz"
import FinishQuiz from "./FinishQuiz";


function App() {
  return (
    <ContainDiv>
      {/* <QuizMain/> */}
      {/* <ActQuiz/> */}
      <FinishQuiz/>
    </ContainDiv>
  );
}
const ContainDiv = styled.div`
  border: 1px solid #000;
  width: 400px;
  margin: 0 auto;
  height: 700px;
`;

export default App;
