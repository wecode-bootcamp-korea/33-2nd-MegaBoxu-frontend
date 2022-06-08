import React from 'react';
import styled from 'styled-components';

const LoginBox = () => {
  return (
    <LoginBoxWrapper>
      <LoginBoxContainer>
        <div className="loginBoxText">
          <p>로그인 하시면 나의 메가박스를 만날 수 있어요.</p>
          <p>영화를 사랑하는 당신을 위한 꼭 맞는 혜택까지 확인해 보세요!</p>
        </div>
        <button className="loginBtn">로그인</button>
        <div className="signUpPage">
          <p>혹시 아직 회원이 아니신가요?</p>
        </div>
      </LoginBoxContainer>
    </LoginBoxWrapper>
  );
};

const LoginBoxWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 295px;
  top: 91px;
  background-color: #037b94;
  display: flex;
  justify-content: center;
  z-index: 10;
`;

const LoginBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1100px;
  .loginBoxText {
    padding: 65px 0 20px 0;
    color: white;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .loginBtn {
    width: 120px;
    height: 36px;
    color: white;
    font-size: 16px;
    font-weight: bold;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 4px;
    margin-bottom: 50px;
    cursor: pointer;
  }
  .signUpPage {
    color: white;
    border-bottom: 1px solid white;
  }
`;

export default LoginBox;
