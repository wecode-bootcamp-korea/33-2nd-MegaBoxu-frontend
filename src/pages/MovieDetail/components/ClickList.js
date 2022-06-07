import React from 'react';
import styled from 'styled-components';

const ClickList = ({ listName, scrollId }) => {
  return (
    <ClickListContainer>
      <ClickListName href={'#' + scrollId}>{listName}</ClickListName>
    </ClickListContainer>
  );
};

const ClickListContainer = styled.li`
  ${props => props.theme.flex.flexBox('_', 'center', 'center')};
  width: 100%;
  height: 50%;
  border: 0.5px solid rgba(234, 234, 234);
  .listName {
  }
`;

const ClickListName = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.black};
  cursor: pointer;
`;
export default ClickList;
