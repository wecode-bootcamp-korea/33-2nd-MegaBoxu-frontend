import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FaRegCalendarAlt, FaFilm, FaTicketAlt } from 'react-icons/fa';

import styled from 'styled-components';

const TimetableBooking = () => {
  const navigate = useNavigate();

  const goToTimetable = () => {
    navigate('/');
  };

  const goToBoxOffice = () => {
    navigate('/movielist');
  };

  const goToBooking = () => {
    navigate('/booking');
  };

  return (
    <TimetableWrapper>
      <TimetableList onClick={goToTimetable}>
        <FaRegCalendarAlt />
        &nbsp; 상영시간표
      </TimetableList>
      <TimetableList onClick={goToBoxOffice}>
        <FaFilm />
        &nbsp; 박스오피스
      </TimetableList>
      <TimetableList onClick={goToBooking}>
        <FaTicketAlt />
        &nbsp; 빠른예매
      </TimetableList>
    </TimetableWrapper>
  );
};

const TimetableWrapper = styled.ul`
  display: flex;
  height: 4.688rem;
  margin: 3.125rem 0 0 0;
  padding: 1.438rem 0 0 0;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
`;

const TimetableList = styled.li`
  ${props => props.theme.flex.flexBox()}
  flex-grow: 0.3;
  height: 1.875rem;
  border-left: ${props => props.theme.borders.lightGray};
  cursor: pointer;

  :first-child {
    border: none;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export default TimetableBooking;
