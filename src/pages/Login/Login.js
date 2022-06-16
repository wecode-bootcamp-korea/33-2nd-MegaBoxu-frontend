import React from 'react';

import LoginModal from './components/LoginModal';

import styled from 'styled-components';

const Login = ({ setIsModalOpen }) => {
  const modalClose = e => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <LoginWrapper onClick={modalClose}>
      <LoginModal setIsModalOpen={setIsModalOpen} />
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
