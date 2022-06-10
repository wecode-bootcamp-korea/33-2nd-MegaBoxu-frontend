import React, { useState } from 'react';

import { KAKAO_AUTH_URL } from './KakaoLoginAuth';

import styled from 'styled-components';

const LoginBody = () => {
  const [userInputs, setUserInputs] = useState({
    id: '',
    pw: '',
  });

  const { id, pw } = userInputs;

  const handleInput = e => {
    const { name, value } = e.target;
    setUserInputs({
      ...userInputs,
      [name]: value,
    });
  };

  const isInputValid = id.length >= 2 && pw.length >= 2;

  return (
    <LoginBodyWrapper>
      <InputId onChange={handleInput} />
      <InputPw onChange={handleInput} />
      <SaveIdWrapper>
        <SaveId />
        아이디 저장
      </SaveIdWrapper>

      <LoginButton disabled={isInputValid} isInputValid={isInputValid}>
        로그인
      </LoginButton>
      <CustomerInfoWrapper>
        <CustomerInfo>ID/PW 찾기</CustomerInfo>
        <CustomerInfo>회원가입</CustomerInfo>
        <CustomerInfo>비회원 예매확인</CustomerInfo>
      </CustomerInfoWrapper>
      <SocialLogin>
        <FBLogin
          src="https://www.megabox.co.kr/static/pc/images/member/ico-facebook.png"
          alt="facebook login"
        />
        <NaverLogin
          src="https://www.megabox.co.kr/static/pc/images/member/ico-naver.png"
          alt="naver login"
        />
        <GoKakaoLogin as="a" href={KAKAO_AUTH_URL}>
          <KakaoLogin
            src="https://www.megabox.co.kr/static/pc/images/member/ico-kakao.png"
            alt="kakao login"
          />
        </GoKakaoLogin>
        <PaycoLogin
          src="https://www.megabox.co.kr/static/pc/images/member/ico-payco.png"
          alt="payco login"
        />
      </SocialLogin>
    </LoginBodyWrapper>
  );
};

const LoginBodyWrapper = styled.div`
  padding: 1.25rem 1.25rem 0 1.25rem;
`;

const InputId = styled.input.attrs(props => ({
  type: 'text',
  name: 'id',
  placeholder: '아이디',
}))`
  width: 23.75rem;
  height: 2.75rem;
  margin: 0 0 0.938rem 0;
  padding: 0 0.625rem;
`;

const InputPw = styled(InputId).attrs(props => ({
  type: 'password',
  name: 'pw',
  placeholder: '비밀번호',
}))``;

const SaveIdWrapper = styled.div`
  width: 100%;
  padding: 0 0 2.188rem 0;
`;

const SaveId = styled.input.attrs(props => ({
  type: 'checkbox',
}))``;

const LoginButton = styled.button`
  width: 100%;
  color: ${({ isInputValid, theme }) =>
    isInputValid ? theme.colors.white : theme.colors.gray};
  background-color: ${({ isInputValid, theme }) =>
    isInputValid ? theme.colors.purple : theme.colors.lightGray};
  border: 0;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 2.875rem;
  cursor: ${({ isInputValid }) => (isInputValid ? 'pointer' : 'default')};
`;

const CustomerInfoWrapper = styled.ul`
  ${props => props.theme.flex.flexBox()}
  padding: 1.25rem 0 1.875rem 0;
  width: 100%;
  text-align: center;
`;

const CustomerInfo = styled.li`
  padding: 0 0.875rem;
  color: ${props => props.theme.colors.gray};
  border-left: ${props => props.theme.borders.gray};
  cursor: pointer;

  :first-child {
    border: none;
  }
`;

const SocialLogin = styled.div`
  ${props => props.theme.flex.flexBox('_', '_', 'space-evenly')};
  width: 100%;
  margin: 0 0 4rem 0;
`;

const GoKakaoLogin = styled.a``;

const FBLogin = styled.img`
  cursor: pointer;
`;

const NaverLogin = styled(FBLogin)``;
const KakaoLogin = styled(FBLogin)``;
const PaycoLogin = styled(FBLogin)``;

export default LoginBody;
