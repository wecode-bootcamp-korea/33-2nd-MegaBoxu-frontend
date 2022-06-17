import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { API } from '../../../config';

const KakaoLogin = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  const getToken = () => {
    fetch(`${API.KAKAO_LOGIN}?code=${code}`, {
      method: 'GET',
    })
      .then(res => {
        if (res.status === 200 || res.status === 201) {
          alert('MEGA BOXU에 오신걸 환영합니다.');
          return res.json();
        } else {
          alert('로그인에 실패했습니다.');
        }
      })
      .then(data => {
        localStorage.setItem('token', data.token);
        navigate('/');
      });
  };

  useEffect(() => {
    getToken();
  });

  return <div>KakaoLogin</div>;
};

export default KakaoLogin;
