import React from 'react';
import styled from 'styled-components';

const MoreButton = ({ showMore }) => {
  return <ShowMore>{showMore ? '닫기' : '더보기'}</ShowMore>;
};

const ShowMore = styled.button`
  width: 100%;
  height: 2rem;
  font-size: ${props => props.theme.fontSizes.lg};
  color: rgba(68, 68, 68);
  background-color: transparent;
  border-style: none;
  cursor: pointer;
`;

export default MoreButton;
