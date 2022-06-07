import React, { useState } from 'react';
import NavLeftDropLi from './NavLeftDropLi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLeftMenu = ({ navLeftTitle, navId, hoverOn, logoChange }) => {
  const { id, name, menu, link } = navLeftTitle;
  const [navActive, setNavActive] = useState(false);

  const activeDropBox = () => {
    setNavActive(true);
  };

  const hideDropBox = () => {
    setNavActive(false);
  };

  return (
    <NavLeftLi
      onMouseEnter={() => {
        hoverOn(id);
      }}
      onMouseOver={activeDropBox}
      onMouseOut={hideDropBox}
      logoChange={logoChange}
    >
      <NavLink to={link}>{name}</NavLink>
      {navActive && (
        <div className="navBar">
          <ul>
            {navId === id &&
              menu.map((menu, i) => (
                <NavLeftDropLi menu={menu} link={link} key={i} />
              ))}
          </ul>
        </div>
      )}
    </NavLeftLi>
  );
};

const NavLeftLi = styled.li`
  font-size: 18px;

  .navBar {
    width: 100%;
    height: 44px;
    background-color: ${({ logoChange }) =>
      logoChange ? 'rgb(0,0,0,0.3)' : '#339eb1'};
    position: absolute;
    left: 0px;
    top: 91px;
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
      width: 500px;
      display: flex;
    }
  }
`;

const NavLink = styled(Link)`
  width: 90px;
  height: 80px;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export default NavLeftMenu;
