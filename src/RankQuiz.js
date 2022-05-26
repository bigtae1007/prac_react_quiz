import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const RankQuiz = () => {
  const score = useSelector((state) => state.quiz.rank);
  console.log(score)
  score.sort((a,b)=>{
    return b.score - a.score
  });
  console.log(score)

  return (
    <>
      <p>
        <span>{score.length}</span>명의 사람 중에서 당신은?
      </p>
      {score.map((item, i) => {
        return (
          <WrapDiv>
            <p>{i + 1}등</p>
            <WrapDiv1>
              <h4>{item.name}</h4>
              <p>
                너무 보기 좋습니다.너무 보기 좋습니다.너무 보기 좋습니다.너무
                보기
              </p>
            </WrapDiv1>
          </WrapDiv>
        );
      })}
    </>
  );
};

const WrapDiv = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  display: flex;
  text-align: center;
  justify-content: center;
  & > p {
    width: 100px;
    display: inline-block;
    line-height: 50px;
    font-size: 30px;
    font-weight: bolder;
  }
`;
const WrapDiv1 = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

export default RankQuiz;
