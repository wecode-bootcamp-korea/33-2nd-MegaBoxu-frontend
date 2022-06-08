import React from 'react';
import styled from 'styled-components';

const NavRightDropLi = ({ menu, logoChange }) => {
  return (
    <DropMenu>
      <p href="">{menu}</p>
    </DropMenu>
  );
};

const DropMenu = styled.li`
  p {
    font-size: 16px;
    text-decoration: none;
    color: ${({ logoChange }) => (logoChange ? 'white' : 'white')};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
  }
`;

export default NavRightDropLi;
