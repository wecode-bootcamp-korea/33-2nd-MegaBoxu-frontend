import React from 'react';
import { useNavigate } from 'react-router-dom';

import BoxOfficeCarousel from './components/BoxOfficeCarousel';
import TimetableBooking from './components/TimetableBooking';
import MembershipStore from './components/MembershipStore';
import InfoMegaboxu from './components/InfoMegaboxu';

import { FaPlus } from 'react-icons/fa';

import styled from 'styled-components';

const Main = () => {
  const navigate = useNavigate();

  const goToMovieList = () => {
    navigate('/movielist');
  };

  return (
    <MainPage>
      <BoxOffice>
        <MainTop>
          <Button>박스오피스</Button>
          <MoreBox onClick={goToMovieList}>
            더 많은 영화보기&nbsp; <FaPlus />
          </MoreBox>
          <BoxOfficeCarousel />
          <TimetableBooking />
        </MainTop>
      </BoxOffice>
      <MembershipStore />
      <InfoMegaboxu />
    </MainPage>
  );
};

const MainPage = styled.div`
  text-align: center;
`;

const BoxOffice = styled.div`
  height: 52.594rem;
  padding: 0 0 3.125rem 0;
  background: linear-gradient(
    90deg,
    rgba(9, 4, 19, 1) 0%,
    rgba(44, 42, 62, 1) 50%,
    rgba(9, 4, 19, 1) 100%
  );
`;

const MainTop = styled.div`
  position: relative;
  width: 68.75rem;
  height: 49.462rem;
  margin: 0 auto;
`;

const Button = styled.button`
  margin: 10.563rem 0 1.25rem 0;
  color: ${props => props.theme.colors.white};
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${props => props.theme.colors.green};
  font-size: 1.0667rem;
`;

const MoreBox = styled.div`
  position: absolute;
  top: 11.063rem;
  right: 0;
  color: ${props => props.theme.colors.white};
  font-size: 0.938rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default Main;
