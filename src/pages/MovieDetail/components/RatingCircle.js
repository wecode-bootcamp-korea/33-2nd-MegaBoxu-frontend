import React from 'react';
import styled from 'styled-components';
const RatingCircle = ({ rating }) => {
  return (
    <CircleContainer>
      <Circle>
        <Rating>{rating}</Rating>
      </Circle>
      <AfterWatching>관람 후</AfterWatching>
    </CircleContainer>
  );
};

const CircleContainer = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', 'center')};
  width: 100%;
  height: 100%;
`;

const Circle = styled.div`
  ${props => props.theme.flex.flexBox('_', 'center', 'center')};
  width: 10rem;
  height: 10rem;
  border: 1px solid #6542b1;
  border-radius: 50%;
  background-color: #6542b1;
`;

const Rating = styled.p`
  font-size: ${props => props.theme.fontSizes.titleSize};
  color: ${props => props.theme.colors.white};
`;

const AfterWatching = styled.p`
  margin-top: 0.5rem;
  color: rgb(111, 111, 111);
`;
export default RatingCircle;
