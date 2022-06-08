import React, { useState } from 'react';
import NavRightDropLi from './NavRightDropLi';
import styled from 'styled-components';

const NavRightMenu = ({ navRightTitle, navId, hoverOn, logoChange }) => {
  const { link, id, name, menu } = navRightTitle;
  const [navActive, setNavActive] = useState(false);

  const activeDropBox = () => {
    setNavActive(true);
  };

  const hideDropBox = () => {
    setNavActive(false);
  };

  return (
    <NavRightLi
      onMouseEnter={() => {
        hoverOn(id);
      }}
      onMouseOver={activeDropBox}
      onMouseOut={hideDropBox}
      logoChange={logoChange}
    >
      <p href="">{name}</p>
      {navActive && (
        <div className="navBar">
          <ul>
            {navId === id &&
              menu.map((menu, i) => (
                <NavRightDropLi menu={menu} key={i} logoChange={logoChange} />
              ))}
          </ul>
        </div>
      )}
    </NavRightLi>
  );
};

const NavRightLi = styled.li`
  font-size: 18px;

  p {
    width: 90px;
    height: 80px;
    color: ${({ logoChange }) => (logoChange ? 'white' : 'black')};
    text-decoration: none;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }

  .navBar {
    width: 100%;
    height: 44px;
    background-color: ${({ logoChange }) =>
      logoChange ? 'rgb(0,0,0,0.3)' : '#339eb1'};

    position: absolute;
    right: 0px;
    top: 91px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;

    ul {
      width: 500px;
    }
  }
`;

export default NavRightMenu;
