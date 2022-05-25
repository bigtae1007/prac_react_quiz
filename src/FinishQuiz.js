import React from "react";
import styled from "styled-components";

const FinishQuiz = ()=>{




  return (
    <>
     <TopText>점수 보기</TopText>
     <FlexDiv>
       <p><span>이범규</span> 퀴즈에 대한 내 점수는</p>
       <p><span>60</span> 점</p>
       <p>우와! 우린 참 친해요!</p>
     </FlexDiv>
     <BtnDiv>
    <button>정답 보기</button>
    <button>이범규에게 한 마디</button>
     </BtnDiv>
    </>
  );
};
const TopText = styled.h3`
  background-color: #ddd;
  width: 100%;
  color: #888;
`;

const FlexDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 500px;
& > p {
  font-weight: 600;
}
& > p:last-child{
  color: #aaa;
  font-size: 0.8em;
  margin-top: 40px;
}
& > p >span {
  font-weight: bolder;
  font-size: 1.5em;
  background-color: orange;
  padding: 3px 15px;
  border-radius: 25px;
}
`
const BtnDiv = styled.div`
display: flex;
flex-direction: column;
& > button{
  color: #fff;
  border: none;
  cursor: pointer;
  background-color: skyblue;
  margin: 5px 5%;
  height: 30px;
  border-radius: 20px;
  
}
& > button:last-child{
  color: skyblue;
  background-color: #fff;
  border: 1px solid #eee;
}
`
export default FinishQuiz