import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SiteMapContent = ({ siteMapMenu }) => {
  const { link, name, menu } = siteMapMenu;
  return (
    <StieMapContainer>
      <SiteMapMenu>{name}</SiteMapMenu>
      <SiteMapCategory>
        <ul>
          <li className="menuText">
            {menu.map((menu, i) => (
              <LinkP to={link} key={i}>
                {menu}
              </LinkP>
            ))}
          </li>
        </ul>
      </SiteMapCategory>
    </StieMapContainer>
  );
};

const StieMapContainer = styled.div`
  width: 159px;
`;

const SiteMapMenu = styled.div`
  width: 159px;
  height: 48px;
  color: #fff;
  font-size: 1.2em;
  border-top: 1px solid rgba(68, 68, 68, 0.5);
  border-bottom: 1px solid rgba(68, 68, 68, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SiteMapCategory = styled.ul`
  .menuText {
    display: block;
    /* p {
      display: flex;
      justify-content: center;
      padding-top: 18px;
      color: #bbb;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        color: #339eb1;
      }
    } */
  }
`;

const LinkP = styled(Link)`
  display: flex;
  justify-content: center;
  padding-top: 18px;
  color: #bbb;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #339eb1;
  }
`;

export default SiteMapContent;
