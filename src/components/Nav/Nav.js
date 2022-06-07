import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavLeftMenu from './NavLeft/NavLeftMenu.js';
import NavRightMenu from './NavRight/NavRightMenu.js';
import SiteMap from './SiteMap/SiteMap.js';
import SearchBox from './SearchBox/SearchBox.js';
import LoginBox from './LoginBox/LoginBox.js';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSearch } from 'react-icons/bi';
import { BsCalendar3, BsPerson } from 'react-icons/bs';
import styled from 'styled-components';
import Login from '../../pages/Login/Login.js';

const Nav = () => {
  const [navId, setNavId] = useState('');
  const [siteMapActive, setSiteMapActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [loginActive, setLoginActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navi = '/';
  const location = useLocation();
  const navigate = useNavigate();

  //네브 호버
  const hoverOn = idNav => {
    setNavId(idNav);
  };

  //각 박스들
  const activeSiteMap = () => {
    setSiteMapActive(prev => !prev);
  };

  const activeSearchBox = () => {
    setSearchActive(prev => !prev);
  };

  const activeLoginBox = () => {
    setLoginActive(prev => !prev);
  };

  const modalOpen = () => {
    setIsModalOpen(true);
  };

  const signOut = () => {
    const isSignIn = localStorage.getItem('token');
    if (isSignIn) {
      localStorage.removeItem();
      navigate('/');
    }
  };

  return (
    <>
      <NavWrapper logoChange={location.pathname === navi}>
        <NavContainer>
          <NavLeft>
            <NavLeftTop logoChange={navi === location.pathname}>
              <NavLeftText>VIP LOUNGE</NavLeftText>
              <NavLeftText>멤버십</NavLeftText>
              <NavLeftText>고객센터</NavLeftText>
            </NavLeftTop>
            <NavLeftBottom>
              <NavLeftIcon>
                <div className="menuIcon">
                  <GiHamburgerMenu
                    className="menu"
                    onClick={() => {
                      activeSiteMap();
                      setSearchActive(false);
                      setLoginActive(false);
                    }}
                  />
                </div>
                <div className="searchIcon">
                  <BiSearch
                    className="search"
                    onClick={() => {
                      activeSearchBox();
                      setSiteMapActive(false);
                      setLoginActive(false);
                    }}
                  />
                </div>
              </NavLeftIcon>
              <NavLeftTitle logoChange={navi === location.pathname}>
                <ul>
                  {NAV_TITLE_LEFT.map(navLeftTitle => (
                    <NavLeftMenu
                      navLeftTitle={navLeftTitle}
                      key={navLeftTitle.id}
                      navId={navId}
                      hoverOn={hoverOn}
                      logoChange={navi === location.pathname}
                    />
                  ))}
                </ul>
              </NavLeftTitle>
            </NavLeftBottom>
          </NavLeft>
          <NavLogo
            logoChange={navi === location.pathname}
            onClick={() => navigate('/')}
          />
          <NavRight>
            <NavRightTop>
              <NavRightText
                onClick={localStorage.getItem('token') ? signOut : modalOpen}
              >
                {localStorage.getItem('token') ? '로그아웃' : '로그인'}
              </NavRightText>
              {isModalOpen && <Login setIsModalOpen={setIsModalOpen} />}
              <NavRightText onClick={() => navigate('/signup')}>
                회원가입
              </NavRightText>
              <NavRightText>빠른예매</NavRightText>
            </NavRightTop>
            <NavRightBottom>
              <NavRightTitle>
                <ul>
                  {NAV_TITLE_RIGHT.map(navRightTitle => (
                    <NavRightMenu
                      navRightTitle={navRightTitle}
                      key={navRightTitle.id}
                      navId={navId}
                      hoverOn={hoverOn}
                      logoChange={navi === location.pathname}
                    />
                  ))}
                </ul>
              </NavRightTitle>
              <NavRightIcon>
                <div className="calendarIcon">
                  <BsCalendar3 className="calendar" />
                </div>
                <div className="myPageIcon">
                  <BsPerson
                    className="myPage"
                    onClick={() => {
                      activeLoginBox();
                      setSiteMapActive(false);
                      setSearchActive(false);
                    }}
                  />
                </div>
              </NavRightIcon>
            </NavRightBottom>
          </NavRight>
        </NavContainer>
      </NavWrapper>
      {siteMapActive && <SiteMap />}
      {searchActive && <SearchBox setSearchActive={setSearchActive} />}
      {loginActive && <LoginBox />}
    </>
  );
};

const NavWrapper = styled.div`
  width: 100%;
  height: 5.688rem;
  background-color: ${({ logoChange }) =>
    logoChange ? 'rgba(0, 0, 0, 0.3)' : 'white'};
  border-bottom: 1px solid
    ${({ logoChange }) => (logoChange ? 'rgba(255, 255, 255, 0.2)' : '#342461')};
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
`;

const NavContainer = styled.div`
  width: 68.75rem;
  display: flex;
  padding-top: 0.938rem;
  z-index: 999999;
`;

const NavLeft = styled.div`
  width: 29.688rem;
`;

const NavLeftTop = styled.div`
  font-size: 0.813rem;
  color: ${({ logoChange }) => (logoChange ? '#888' : 'black')};
  display: flex;
  justify-content: flex-start;
`;

const NavLeftText = styled.p`
  font-size: 0.938rem;
  margin-right: 20px;
  padding-bottom: 0.625rem;
`;

const NavLeftBottom = styled.div`
  display: flex;
`;

const NavLeftIcon = styled.div`
  width: 5rem;
  display: flex;
  justify-content: space-between;
  .menuIcon {
    width: 2.25rem;
    height: 2.25rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .menu {
      font-size: 1.875rem;
    }
  }

  .searchIcon {
    width: 2.25rem;
    height: 2.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .search {
      font-size: 1.563rem;
      color: white;
    }
  }
`;

const NavLeftTitle = styled.div`
  width: 24.688rem;
  ul {
    display: flex;
    justify-content: space-evenly;
    padding-top: 8px;

    li {
      font-size: 1.125rem;

      a {
        color: ${({ logoChange }) => (logoChange ? 'white' : 'black')};
        text-decoration: none;
      }
    }
  }
`;

const NavLogo = styled.div`
  width: 9.375rem;
  height: 3.125rem;
  margin-top: 0.625rem;
  background-image: ${({ logoChange }) =>
    logoChange
      ? `url(../../images/megaboxu2.png)`
      : `url(../../images/megaboxu1.png)`};
  background-size: 100% 100%;
  cursor: pointer;
`;

const NavRight = styled.div`
  width: 29.688rem;
`;

const NavRightTop = styled.div`
  font-size: 0.813rem;
  color: #888;
  display: flex;
  justify-content: flex-end;
`;

const NavRightText = styled.p`
  font-size: 0.938rem;
  margin-left: 20px;
  padding-bottom: 0.625rem;
  cursor: pointer;
`;

const NavRightBottom = styled.div`
  display: flex;
`;

const NavRightIcon = styled.div`
  width: 5rem;
  display: flex;
  justify-content: space-between;

  .calendarIcon {
    width: 2.25rem;
    height: 2.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .calendar {
      font-size: 1.563rem;
      color: white;
    }
  }

  .myPageIcon {
    width: 2.25rem;
    height: 2.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .myPage {
      font-size: 1.875rem;
      color: white;
    }
  }
`;

const NavRightTitle = styled.div`
  width: 24.688rem;
  ul {
    display: flex;
    justify-content: space-evenly;
    padding-top: 9px;

    li {
      font-size: 1.125rem;
      text-decoration: none;
    }
  }
`;

export default Nav;

const NAV_TITLE_LEFT = [
  {
    id: 0,
    name: '영화',
    link: '/movielist',
    menu: ['전체영화', '큐레이션', '무비포스트'],
  },
  {
    id: 1,
    name: '예매',
    link: '/booking',
    menu: ['빠른예매', '상영시간표', '더 부티크 프라이빗 예매'],
  },
  {
    id: 2,
    name: '극장',
    link: '',
    menu: ['전체극장', '특별관'],
  },
];

const NAV_TITLE_RIGHT = [
  {
    id: 0,
    name: '이벤트',
    link: '',
    menu: ['진행중 이벤트', '지난 이벤트', '당첨자발표'],
  },
  {
    id: 1,
    name: '스토어',
    link: '',
    menu: [''],
  },
  {
    id: 2,
    name: '혜택',
    link: '',
    menu: ['메가박스 멤버십', '제휴/할인'],
  },
];
