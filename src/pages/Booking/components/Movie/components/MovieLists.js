import React from 'react';
import styled, { css } from 'styled-components';
import { FaRegHeart } from 'react-icons/fa';

function MovieLists({
  id,
  age,
  title,
  handleSelectMovie,
  titleSelect,
  isAvailable,
}) {
  return (
    <MovieTitles
      onClick={() => {
        isAvailable
          ? handleSelectMovie(id)
          : alert('해당 일자의 상영 시간표가 없습니다.');
      }}
      titleSelect={titleSelect}
      isAvailable={isAvailable}
    >
      <MovieAge bgColor={AGE_COLOR[age]}>{age}</MovieAge>
      <span>{title}</span>
      <HeartIcon />
    </MovieTitles>
  );
}

export default MovieLists;

const MovieTitle = css`
  ${({ titleSelect, isAvailable }) => {
    if (titleSelect && isAvailable) {
      return css`
        background-color: ${({ theme }) => theme.colors.gray};
        color: white;
      `;
    } else if (!isAvailable) {
      return css`
        color: ${({ theme }) => theme.colors.gray};
        cursor: default;
      `;
    } else {
      return css`
        background-color: transparent;
        color: black;

        &:hover {
          background-color: ${({ theme }) => theme.colors.lightGray};
        }
      `;
    }
  }}
`;

const MovieTitles = styled.div`
  display: flex;
  position: relative;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  margin: 0 0.5rem;
  padding: 0.5rem;
  background-color: ${({ isAvailable }) =>
    isAvailable ? 'gray' : 'transparent'};
  ${MovieTitle}
`;

const HeartIcon = styled(FaRegHeart)`
  position: absolute;
  color: #d8d9db;
  right: 0;
  cursor: pointer;
`;

const MovieAge = styled.div`
  padding: 0.3rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  background-color: ${({ bgColor }) => bgColor};
`;

const AGE_COLOR = {
  All: '#3fa900',
  12: '#198ef6',
  15: '#e49c0c',
  18: '#e81002',
};
