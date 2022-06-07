import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import MainInfo from './components/MainInfo';
import InfoPage from './components/InfoPage';
import CommentList from './components/CommentList';
import Trailer from './components/Trailer';
import { API } from '../../config';

const MovieDetail = () => {
  const params = useParams();
  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(`${API.MOVIE_DETAIL}?MovieNo=${params.id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setMovieInfo(data.result);
      });
  }, []);

  const isDataEmpty = Object.keys(movieInfo).length === 0;

  if (isDataEmpty)
    return (
      <LoadingContainer>
        <Loading>loading...</Loading>
      </LoadingContainer>
    );

  return (
    <MovieDetailContainer>
      <MainInfo movieInfo={movieInfo} />
      <InfoPage movieInfo={movieInfo} />
      <CommentList movieInfo={movieInfo} params={params} />
      <Trailer />
    </MovieDetailContainer>
  );
};

const MovieDetailContainer = styled.div`
  margin-top: 91px;
  width: 100%;
  height: auto;
`;
const LoadingContainer = styled.div`
  ${props => props.theme.flex.flexBox('_', 'center', 'center')};
  width: 100vw;
  height: 100vh;
`;
const Loading = styled.div`
  width: 5rem;
  height: 5rem;
  color: gray;
`;

export default MovieDetail;
