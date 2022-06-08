import React from 'react';
import styled from 'styled-components';

const MovieChart = ({ movieTitle, rank, hoverPoster }) => {
  const { title, movie_id } = movieTitle;

  return (
    <MovieRank>
      <div className="MovieBox">
        <Ranking>{rank + 1}</Ranking>
        <MovieName onMouseOver={() => hoverPoster(movie_id)}>{title}</MovieName>
      </div>
    </MovieRank>
  );
};

const MovieRank = styled.div`
  .MovieBox {
    display: flex;
    padding-top: 10px;
    padding-left: 50px;
  }
`;

const Ranking = styled.span`
  font-size: 30px;
  color: white;
  font-style: italic;
`;

const MovieName = styled.span`
  padding-left: 15px;
  font-size: 17px;
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default MovieChart;
