import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import MainInfo from './components/MainInfo';
import InfoPage from './components/InfoPage';
import CommentList from './components/CommentList';
import Trailer from './components/Trailer';

const MovieDetail = () => {
  const [movieInfo, setMovieInfo] = useState('');

  useEffect(() => {
    fetch(`/data/data.json`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setMovieInfo(data.result);
      });
  }, []);

  console.log(movieInfo);
  return (
    <MovieDetailContainer>
      {movieInfo && (
        <>
          <MainInfo movieInfo={movieInfo} />
          <InfoPage movieInfo={movieInfo} />
        </>
      )}
      <CommentList />
      <Trailer />
    </MovieDetailContainer>
  );
};

const MovieDetailContainer = styled.div`
  width: 100%;
  height: auto;
`;

export default MovieDetail;
