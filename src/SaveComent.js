import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SaveComent = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        back
      </button>
    <WarpDiv>

      <img
        src="https://img.huffingtonpost.com/asset/5ff99f9b260000414da5026c.jpeg?ops=crop_75_1221_925_549,scalefit_630_noupscale"
        alt="인물 사진"
      />
      <p>
        <span>이범규 </span> 에게 남기는 한 마디
      </p>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button>남기고 랭킹 보러가기</button>
    </WarpDiv>
    </>
  );
};

const WarpDiv = styled.div`
  display: flex;
  height: 600px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  & > p > span{
    background-color: orange;
    padding: 5px 10px;
    border-radius: 20px;
  }
  & > textarea{
    resize: none;
    border: 1px solid #aaa;
    border-radius: 10px;
    padding: 20px;
    height: 100px;
  }
  & > button {
    border: none;
    margin: 20px 0 0 0;
    color: #fff;
    background-color: #aaf;
    padding: 10px 40px;
    border-radius: 20px;
  }
`;

export default SaveComent;
