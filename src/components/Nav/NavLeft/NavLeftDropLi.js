import React from 'react';
import styled from 'styled-components';

const NavLeftDropLi = ({ menu }) => {
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
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default NavLeftDropLi;
