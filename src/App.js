import React from "react";
import styled from "styled-components";
import QuizMain from "./QuizMain";
import ActQuiz from "./ActQuiz";
import FinishQuiz from "./FinishQuiz";
import { BrowserRouter, Route, Switch, Link, Routes } from "react-router-dom";

function App(props) {
const quizData = [
  {
    name: "btae",
    QA : ["나는 1번","나는 2번","나는 3번","나는 4번","나는 5번"],
    answer : ["O","O","X","O","X"]
  }


]


  return (
      <BrowserRouter>
        <ContainDiv>
          <Routes>
            <Route path="/" element={<QuizMain />} />
            <Route path="/:name/:num"  element={<ActQuiz data={quizData}/>} />
            <Route path="/:name/end" element={<FinishQuiz />} />
          </Routes>
        </ContainDiv>
      </BrowserRouter>
  );
}
const ContainDiv = styled.div`
  border: 1px solid #000;
  width: 400px;
  margin: 0 auto;
  height: 700px;
`;

export default App;
