import React from 'react';
import styled from 'styled-components';
import SiteMapContent from './SiteMapContent';

const SiteMap = () => {
  return (
    <SiteMapWrapper>
      <SiteMapDiv>
        <SiteMapHeader>SITEMAP</SiteMapHeader>
        <SiteMapBody>
          {SITEMAP_MENU.map(siteMapMenu => (
            <SiteMapContent siteMapMenu={siteMapMenu} key={siteMapMenu.id} />
          ))}
        </SiteMapBody>
      </SiteMapDiv>
    </SiteMapWrapper>
  );
};

const SiteMapWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 350px;
  top: 91px;
  background-color: #333333;
  display: flex;
  justify-content: center;
  z-index: 10;
`;

const SiteMapDiv = styled.div`
  width: 1100px;
`;

const SiteMapHeader = styled.div`
  padding: 50px 0 25px 0;
  color: white;
  font-size: 1.4666em;
`;

const SiteMapBody = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default SiteMap;

const SITEMAP_MENU = [
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
  {
    id: 3,
    name: '이벤트',
    link: '',
    menu: ['진행중 이벤트', '지난 이벤트', '당첨자발표'],
  },
  {
    id: 4,
    name: '스토어',
    link: '',
    menu: [''],
  },
  {
    id: 5,
    name: '혜택',
    link: '',
    menu: ['메가박스 멤버십', '제휴/할인'],
  },
];
