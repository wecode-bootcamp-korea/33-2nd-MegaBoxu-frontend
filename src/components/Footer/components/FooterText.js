import React from 'react';
import styled from 'styled-components';

const FooterText = () => {
  return (
    <InfoWrapper>
      <Info>회사소개</Info>
      <Info>인재채용</Info>
      <Info>사회공헌</Info>
      <Info>제휴/광고/부대사업문의</Info>
      <Info>이용약관</Info>
      <Info>위치기반서비스 이용약관</Info>
      <InfoBold>개인정보처리방침</InfoBold>
      <Info>윤리경영</Info>
    </InfoWrapper>
  );
};

const InfoWrapper = styled.div`
  ${props => props.theme.flex.flexBox('_', 'center', '_')}
`;

const Info = styled.span`
  display: inline-block;
  margin-right: 0.875rem;
  font-size: ${props => props.theme.fontSizes.small};
  color: #717171;
`;

const InfoBold = styled(Info)`
  font-weight: bold;
`;

export default FooterText;
