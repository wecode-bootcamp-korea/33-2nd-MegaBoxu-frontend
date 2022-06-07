import React from 'react';
import styled from 'styled-components';

const MoreButton = () => {
  return <ShowMore>더보기</ShowMore>;
};

const ShowMore = styled.button`
  font-size: 0.9rem;
  color: rgba(68, 68, 68);
  background-color: transparent;
  border-style: none;
  cursor: pointer;
`;

export default MoreButton;
