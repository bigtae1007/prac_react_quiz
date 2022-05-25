import React from "react";
import styled from "styled-components";
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';

const ActQuiz = (props) => {
  const abc = [];
  const navigate = useNavigate()
  const url = useParams();
  const name = url.name
  const num = Number(url.num);
  const question = props.data[0].QA;
  const ans = props.data[0].answer;
  console.log(question);

  const nextQ = (a)=>{
    if(num === question.length){
      navigate(`/${name}/end`)

    }else{
      navigate(`/${name}/${num+1}`)
    }
    console.log(abc)
    abc.push(a)
  };

  return (
    <>
      <TopText>문제풀기</TopText>

      <ContentsDiv>
        <Divbar>
          <div style={{width: `${(num/ans.length)*100}%`}}></div>
        </Divbar>
        <img
          src="https://i.pinimg.com/236x/56/d5/85/56d58517bcd05f91f7f81f8ffeff69da.jpg"
          alt="문제 사진"
        />
        <TextDiv>
          <h2>{num + 1}번 문제</h2>
          <p>{question[num]}</p>
        </TextDiv>
      </ContentsDiv>
      <BtnDiv>
        <button onClick={()=>{nextQ("O")}}>O</button>
        <button onClick={()=>{nextQ("X")}}>X</button>
      </BtnDiv>
    </>
  );
};
const ContentsDiv = styled.div`
  width: 90%;
  height: 80%;
  margin: 0 auto;
  text-align: center;
  & > img {
    width: 100%;
    height: 300px;
    margin-top: 40px;
  }
  & > div > p {
    width: 240px;
    margin: 0 auto;
  }
`;
const TextDiv = styled.div`
  border: 2px solid #ddd;
  margin-top: -7px;
  padding-bottom: 40px;
`;
const TopText = styled.h3`
  background-color: #ddd;
  width: 100%;
  color: #888;
`;

const Divbar = styled.div`
  height: 20px;
  border-radius: 15px;
  width: 100%;
  margin: 0 auto;
  background-color: #ddd;
  & > div {
    width: 0;
    background-color: skyblue;
    height: 20px;
    border-radius: 15px;
  }
`;

const BtnDiv = styled.div`
display: flex;
justify-content: space-around;
& > button{
  width: 80px;
  height: 50px;
  border-radius: 20px;
  border: 5px solid #000;
  font-weight: 600;
  font-size: 1.5em;
  cursor: pointer;
}
`;
export default ActQuiz;
