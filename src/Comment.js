import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { creatQuiz, removQuiz, deleteName } from "./redux/modules/quiz";

const Comment = ()=>{
  const textComment = useRef();
  const dispatch = useDispatch();

  const comment = useSelector((state)=>state.quiz.comment)
  const newData = useSelector((state)=>state.quiz.quizTom.QA)
  console.log(newData)

  const saveText = ()=>{ 
    dispatch(creatQuiz(textComment.current.value))
    textComment.current.value = ""
  }

  const deleteText = (e)=>{
    dispatch(removQuiz(e));
  }

  const abbc = ()=>{
    dispatch(deleteName('quizTom'))
  }
  
  return (
  <>
  <input type="text" placeholder="한 마디 남기기" ref={textComment} />    
  <button type="submit" onClick={()=>{saveText()}}>저장하기</button>
  <SampleDiv>
  {
    comment.map((item, i)=>{
      return ( <div key={i}>
      <p>닉네임</p>
      <p>{item}</p>
      <button onClick={()=>{deleteText(i)}}>X</button>
    </div>)
    })
  }
  </SampleDiv>
  {
  newData.map((arr, i)=>{
    return <p key={i} onClick={()=>{abbc()}}>{arr}</p>
  })

  }
  </>
  );
};


const SampleDiv = styled.div`
border: 1px solid #000;
height: 500px;
overflow-y: auto;
`
export default Comment