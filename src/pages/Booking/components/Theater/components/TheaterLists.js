import React from 'react';
import styled, { css } from 'styled-components';

const TheaterLists = ({ group, handleSelectTheater, selectedTheater }) => {
  const { theater } = group;
  return (
    <>
      {theater.map((theater, i) => (
        <TheaterContents
          theaterSel={selectedTheater.includes(theater)}
          onClick={() => {
            handleSelectTheater(theater);
          }}
          key={i}
        >
          {theater}
        </TheaterContents>
      ))}
    </>
  );
};

export default TheaterLists;

const TheaterTitle = css`
  ${({ theaterSel }) => {
    if (theaterSel) {
      return css`
        background-color: ${({ theme }) => theme.colors.gray};
        color: white;
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

const TheaterContents = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  ${TheaterTitle}
`;
