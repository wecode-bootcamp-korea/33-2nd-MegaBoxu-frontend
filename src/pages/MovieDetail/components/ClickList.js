import React from 'react';
import styled from 'styled-components';

const ClickList = ({ listName }) => {
  return (
    <ClickListContainer>
      <a className="listName" href="#">
        {listName}
      </a>
    </ClickListContainer>
  );
};

const ClickListContainer = styled.li`
  ${props => props.theme.flex.flexBox('_', 'center', 'center')};
  width: 100%;
  height: 50%;
  border: 1px solid rgb(80, 51, 150);
  .listName {
    text-decoration: none;
    color: ${props => props.theme.colors.black};
  }
`;
export default ClickList;
