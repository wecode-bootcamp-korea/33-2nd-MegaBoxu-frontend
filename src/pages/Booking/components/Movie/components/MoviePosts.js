import React from 'react';
import styled, { css } from 'styled-components';

function MoviePosts({ selectMovie, movieListData }) {
  return (
    <>
      <MoviePostNone disabled={selectMovie.length === 0}>
        <span>
          모든영화
          <br /> 목록에서 영화를 선택하세요.
        </span>
      </MoviePostNone>
      <MoviePostsPlus disabled={selectMovie.length > 0}>
        {movieListData?.map(post => {
          return (
            selectMovie.includes(post.movie_id) && (
              <Posts key={post.movie_id}>
                <img src={post.poster_url} alt="MoviePost" />
              </Posts>
            )
          );
        })}
      </MoviePostsPlus>
    </>
  );
}

export default MoviePosts;

const MoviePostNone = styled.div`
  ${({ disabled }) => {
    if (disabled) {
      return css`
        border: ${props => props.theme.borders.gray};
        margin: auto;
        padding: 3rem 1rem 1rem 1rem;
        text-align: center;
        height: 8rem;
      `;
    } else {
      return css`
        display: none;
      `;
    }
  }};
`;

const MoviePostsPlus = styled.div`
  ${({ disabled }) => {
    if (disabled) {
      return css`
        border: ${props => props.theme.borders.gray};
        ${props => props.theme.flex.flexBox('row', 'center', '_')}
        margin: auto;
        padding: 0.5rem;
        text-align: center;
        height: 8rem;
      `;
    } else {
      return css`
        display: none;
      `;
    }
  }};
`;

const Posts = styled.div`
  border: ${props => props.theme.borders.gray};
  width: 5rem;
  margin: 0 0.5rem;
  height: 6rem;
  ${props => props.theme.flex.flexBox('row', 'center', 'center')}
  cursor : pointer;

  img {
    width: 100%;
    height: 6rem;
  }
`;
