import React from 'react';
import styled from 'styled-components';

const FooterInfo = () => {
  return (
    <InfoTextWrapper>
      <InfoText>
        서울특별시 강남구 테헤란로 427, 위워크타워 10층 (여기가 어디게) ARS
        1234-1234
      </InfoText>
      <InfoText>
        대표자명 노해리 ・ 개인정보보호책임자 김형석 ・ 사업자등록번호
        211-33-12345 ・ 통신판매업신고번호 제 2022-서울강남-3333 호
      </InfoText>
      <InfoText>
        COPYRIGHT © MegaboxuJoongAng, Inc. All rights reserved
      </InfoText>
    </InfoTextWrapper>
  );
};

const InfoTextWrapper = styled.div``;

const InfoText = styled.span`
  display: block;
  color: #444444;
  font-size: ${props => props.theme.fontSizes.small};
  line-height: 1.5;
`;

export default FooterInfo;
