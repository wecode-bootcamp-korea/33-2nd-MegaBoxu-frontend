import React, { useState } from 'react';

import LoginModal from './components/LoginModal';

import styled from 'styled-components';

// To Do: 추후 Nav와 merge되면 return 안의 button 삭제 및 Nav로 코드 modal 관련 코드 이동 예정입니다.

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalOpen = () => {
    setIsModalOpen(true);
  };

  const modalClose = e => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <LoginWrapper onClick={modalClose}>
      <button onClick={modalOpen}>로그인하기</button>
      {isModalOpen && <LoginModal setIsModalOpen={setIsModalOpen} />}
    </LoginWrapper>
  );
};

const LoginWrapper = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
`;

export default Login;
