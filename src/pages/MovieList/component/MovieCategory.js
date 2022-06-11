import React from 'react';
import styled from 'styled-components';

const MovieCategory = ({ categoryList, filterBtn }) => {
  return (
    <CategoryBox>
      <CategoryDiv onClick={() => filterBtn(categoryList.value)}>
        <p>{categoryList.name}</p>
      </CategoryDiv>
    </CategoryBox>
  );
};

const CategoryBox = styled.div`
  width: 100%;
  display: flex;
`;

const CategoryDiv = styled.button`
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;

  &:hover {
    border: 1px solid #503396;
    color: #503396;
  }

  &:on {
  }
`;

export default MovieCategory;
