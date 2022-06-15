import React from 'react';
import styled, { css } from 'styled-components';

const TheaterLists = ({ theater, handleSelectTheater, selectedTheater }) => {
  const { theaters } = theater;

  return (
    <>
      {theaters.map(theater => {
        const { id, name } = theater;
        return (
          <TheaterContents
            theaterSel={selectedTheater.includes(id)}
            onClick={() => {
              handleSelectTheater(id);
            }}
            key={id}
          >
            {name}
          </TheaterContents>
        );
      })}
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
