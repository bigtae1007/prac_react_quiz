import React from "react";
import styled from "styled-components";
import QuizMain from "./QuizMain";
import ActQuiz from "./ActQuiz";
import SaveComent from './SaveComent'
import FinishQuiz from "./FinishQuiz";
import { BrowserRouter, Route, Switch, Link, Routes } from "react-router-dom";

function App(props) {

  return (
        <ContainDiv>
          <Routes>
            <Route path="/" element={<QuizMain />} />
            <Route path="/:name/:num"  element={<ActQuiz />} />
            <Route path="/:name/end" element={<FinishQuiz />} />
            <Route path="/:name/comment" element={<SaveComent/>} />
          </Routes>
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
