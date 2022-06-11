import React from 'react';
import styled from 'styled-components';

const MovieFilterBox = ({ listValue }) => {
  return (
    <FilterDiv>
      <FilterTextBold>{listValue.length}개</FilterTextBold>
      <FilterText>의 영화가 검색되었습니다.</FilterText>
    </FilterDiv>
  );
};

const FilterDiv = styled.div`
  display: flex;
  align-items: center;
`;

const FilterText = styled.p`
  font-size: 15px;
`;

const FilterTextBold = styled(FilterText)`
  font-weight: bold;
`;

export default MovieFilterBox;
