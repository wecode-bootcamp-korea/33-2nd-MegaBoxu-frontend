import React from 'react';
import MovieTimes from './components/MovieTimes';
import styled from 'styled-components';
import { FiSun, FiCoffee, FiMoon } from 'react-icons/fi';

function BookingTime({ bookingData, selectedTheater }) {
  return (
    <BookingContainer>
      <BookingFlexBox>
        <TitleIcon>
          <H2>시간</H2>
          <IconBox>
            <div>
              <FiSun />
            </div>
            <div>
              <FiCoffee />
            </div>
            <div>
              <FiMoon />
            </div>
          </IconBox>
        </TitleIcon>
        <MovieTimes
          bookingData={bookingData}
          selectedTheater={selectedTheater}
        />
      </BookingFlexBox>
    </BookingContainer>
  );
}

export default BookingTime;

const BookingContainer = styled.main`
  width: 35rem;
  margin-left: 1rem;
`;

const BookingFlexBox = styled.div`
  width: 33rem;
`;

const TitleIcon = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'space-between')}
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  color: #222222;
`;

const IconBox = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'space-between')}

  div {
    margin: 0 0.5rem;
    cursor: pointer;
    ${props => props.theme.flex.flexBox('row', 'center', 'center')}
  }
`;
