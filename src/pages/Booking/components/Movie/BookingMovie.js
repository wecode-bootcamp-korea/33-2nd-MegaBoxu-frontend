import React from 'react';
import MovieLists from './components/MovieLists.js';
import MoviePosts from './components/MoviePosts.js';
import styled from 'styled-components';

function BookingMovie({ bookingData, handleSelectMovie, selectMovie }) {
  return (
    <BookingContainer>
      <BookingFlexBox>
        <H2>영화</H2>
        <MovieAll>전체</MovieAll>
        <MovieList>
          {bookingData?.map(movies => (
            <MovieLists
              title={movies.title}
              age={movies.age}
              id={movies.id}
              key={movies.id}
              handleSelectMovie={handleSelectMovie}
              selectMovie={selectMovie}
              titleSelect={selectMovie.includes(movies.title)}
            />
          ))}
        </MovieList>
        <MoviePosts bookingData={bookingData} selectMovie={selectMovie} />
      </BookingFlexBox>
    </BookingContainer>
  );
}

export default BookingMovie;

const BookingContainer = styled.main`
  width: 20rem;
  border-right: 1px solid #d8d9db;
`;

const BookingFlexBox = styled.div`
  width: 19rem;
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  color: #222222;
`;

const MovieAll = styled.div`
  text-align: center;
  margin-top: 1rem;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  padding: 1rem;
  font-size: 1.2rem;
`;

const MovieList = styled.div`
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.5rem; /* 스크롤바의 너비 */
  }

  &::-webkit-scrollbar-thumb {
    height: 20%; //스크롤바의 길이
    background: ${({ theme }) => theme.colors.gray}; /* 스크롤바의 색상 */
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) =>
      theme.colors.lightGray}; /*스크롤바 뒷 배경 색상*/
  }

  height: 20rem;
  margin-top: 1rem;
`;
