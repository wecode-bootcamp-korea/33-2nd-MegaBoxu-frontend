import React from 'react';
import styled from 'styled-components';
import BookingDate from './Date/BookingDate.js';
import BookingMovie from './Movie/BookingMovie.js';
import BookingTheater from './Theater/BookingTheater.js';
import BookingTime from './Time/BookingTime.js';

const BookingBox = () => {
  return (
    <>
      <BookingDate />
      <BookingContainer>
        <BookingMovie />
        <BookingTheater />
        <BookingTime />
      </BookingContainer>
    </>
  );
};

export default BookingBox;

const BookingContainer = styled.div`
  display: flex;
  height: 40rem;
  padding: 1rem;
  margin-top: 1rem;
  border-top: ${props => props.theme.borders.gray};
`;
