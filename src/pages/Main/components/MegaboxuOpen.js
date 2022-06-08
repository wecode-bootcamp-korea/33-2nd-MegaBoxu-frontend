import React from 'react';
import styled from 'styled-components';

const MegaboxuOpen = () => {
  return (
    <MegaboxuOpenWrapper>
      <OpenPhraseWrapper>
        <OpenPhrase>MegaboxuOpen</OpenPhrase>
        <OpenPhrase>
          GRAND
          <br /> OPENING
        </OpenPhrase>
      </OpenPhraseWrapper>
      <TheaterOpen>
        <TheaterPhoto src="/images/Main/theater.jpg" alt="theater" />
        <NewOpen>신규오픈</NewOpen>
        <Location>선릉위코드</Location>
        <OpenDate>2022.06.17</OpenDate>
      </TheaterOpen>
    </MegaboxuOpenWrapper>
  );
};

const MegaboxuOpenWrapper = styled.div`
  ${props => props.theme.flex.flexBox()}
  padding: 3.125rem 0 0 0;
  color: ${props => props.theme.colors.white};
`;

const OpenPhraseWrapper = styled.div``;

const OpenPhrase = styled.p`
  color: ${props => props.theme.colors.white};
  font-size: 0.938rem;

  :last-child {
    padding: 0.938rem 0 0 0;
    font-size: 1.6rem;
    font-weight: ${props => props.theme.fontWeights.extraBold};
  }
`;

const TheaterOpen = styled.div`
  position: relative;
  margin: 0 0 0 15rem;
`;

const TheaterPhoto = styled.img`
  width: 12.75rem;
  height: 12.75rem;
  border-radius: 50%;
  z-index: -1;
`;

const NewOpen = styled.div`
  position: absolute;
  ${props => props.theme.flex.flexBox()};
  width: 4.75rem;
  height: 1.563rem;
  top: 15%;
  left: 30%;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.mint};
`;

const Location = styled.div`
  position: absolute;
  top: 40%;
  left: 22.5%;
  color: ${props => props.theme.colors.white};
  font-size: 1.6rem;
`;

const OpenDate = styled(Location)`
  top: 60%;
  left: 30%;
  font-size: 0.938rem;
`;

export default MegaboxuOpen;
