import React, { useEffect } from 'react';

import LoginHeader from './LoginHeader';
import LoginBody from './LoginBody';

import styled from 'styled-components';

const LoginModal = ({ setIsModalOpen }) => {
  useEffect(() => {
    const escKeyModalClose = e => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', escKeyModalClose);
    return () => window.removeEventListener('keydown', escKeyModalClose);
  }, [setIsModalOpen]);

  return (
    <LoginModalWrapper>
      <LoginHeader setIsModalOpen={setIsModalOpen} />
      <LoginBody />
    </LoginModalWrapper>
  );
};

const LoginModalWrapper = styled.header`
  position: fixed;
  width: 26.25rem;
  top: 50%;
  left: 50%;
  background-color: white;
  transform: translate(-50%, -50%);
  z-index: 20;
`;

export default LoginModal;
