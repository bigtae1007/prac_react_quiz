import React, { useRef } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

const QuizMain = (props) => {
  const inputName = useRef()
  const navigate = useNavigate();

  return (
      <ContentsDiv>
        <QuizImg
          src="https://i.pinimg.com/236x/56/d5/85/56d58517bcd05f91f7f81f8ffeff69da.jpg"
          alt="사진"
        />
        <p>
          나는 <span>이볌규</span>에 대해서 <br /> 얼마나 알고 있을 까?
        </p>
        <InputName type="text" placeholder="내 이름" ref={inputName} />
        <StartBtn onClick={()=>{
          if(inputName.current.value !== ""){
            navigate(`/${inputName.current.value}/0`)
          }else{
            alert("이름을 입력해주세요 ! ")
          }
        }}>시작하기</StartBtn>
      </ContentsDiv>
  );
};


const ContentsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const QuizImg = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 30px;
`;
const InputName = styled.input`
  width: 200px;
  height: 40px;
  border-radius: 10px;
  background-color: #ddd;
  border: none;
  outline: none;
  padding: 0 10px;
  &:focus {
    border: 2px solid #2ca;
  }
`;
const StartBtn = styled.button`
  background-color: #2ca;
  border: none;
  width: 130px;
  height: 50px;
  border-radius: 30px;
  margin-top: 40px;
  color: #fff;
  cursor: pointer;
  &:hover {
    transition: 1s;
    font-size: 20px;
    width: 150px;
    height: 60px;
  }
`;

export default QuizMain;
