import React from 'react';
import styled from 'styled-components';

const GraphCard = ({ listName, nameBottom, children }) => {
  return (
    <GraphCardContainer>
      <GraphText>
        <ListName>{listName}</ListName>
        <NameBottom>{nameBottom}</NameBottom>
      </GraphText>
      <GraphCanvas>{children}</GraphCanvas>
    </GraphCardContainer>
  );
};

const GraphCardContainer = styled.div`
  height: auto;
  border: 1px solid rgb(234, 234, 234);
`;

const GraphText = styled.div`
  ${props => props.theme.flex.flexBox('column', 'center', '_')}
  width: 100%;
  height: 30%;
`;

const ListName = styled.p`
  margin-top: 1rem;
  font-size: ${props => props.theme.fontSizes.base};
  color: rgb(85, 85, 85);
`;

const NameBottom = styled.p`
  margin-top: 0.5rem;
  font-size: ${props => props.theme.fontSizes.titleSize};
  color: #503396;
`;

const GraphCanvas = styled.div`
  ${props => props.theme.flex.flexBox('_', '_', 'center')}
  width: 100%;
  height: 70%;
`;

export default GraphCard;
