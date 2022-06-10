import React from 'react';

import { AiOutlineClose } from 'react-icons/ai';

import styled from 'styled-components';

const LoginHeader = ({ setIsModalOpen }) => {
  return (
    <LoginHeaderWrapper>
      <LoginTop>로그인</LoginTop>
      <ExitButton onClick={() => setIsModalOpen(false)}>
        <AiOutlineClose color="white" size="16" />
      </ExitButton>
    </LoginHeaderWrapper>
  );
};

const LoginHeaderWrapper = styled.div`
  position: relative;
  width: 26.25rem;
  height: 2.813rem;
  background-color: ${props => props.theme.colors.purple};
`;

const LoginTop = styled.h3`
  padding: 0.938rem 1.25rem 0 1.25rem;
  color: ${props => props.theme.colors.white};
  font-size: 1.2rem;
`;

const ExitButton = styled.div`
  position: absolute;
  top: 0.938rem;
  right: 1.25rem;
  color: white;
  cursor: pointer;
`;

export default LoginHeader;
