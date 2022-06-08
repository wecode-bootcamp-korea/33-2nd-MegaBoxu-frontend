import React from 'react';
import FooterText from './components/FooterText';
import FooterInfo from './components/FooterInfo';
import styled from 'styled-components';
import {
  FaSearch,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterBox>
        <FooterTop>
          <FooterText />
          <FooterButton>
            <FooterSearch />
            극장찾기
          </FooterButton>
        </FooterTop>
        <FooterBottom>
          <FooterRight>
            <FooterLogo />
            <FooterInfo />
          </FooterRight>
          <FooterIcon>
            <FooterSns>
              <FooterYoutube>
                <FaYoutube />
              </FooterYoutube>
            </FooterSns>
            <FooterSns>
              <FooterInsta>
                <FaInstagram />
              </FooterInsta>
            </FooterSns>
            <FooterSns>
              <FooterFacebook>
                <FaFacebookF />
              </FooterFacebook>
            </FooterSns>
            <FooterSns>
              <FooterTwitter>
                <FaTwitter />
              </FooterTwitter>
            </FooterSns>
          </FooterIcon>
        </FooterBottom>
      </FooterBox>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  width: 100%;
  height: 12.5rem;
  background-color: ${props => props.theme.colors.lightGray};
`;

const FooterBox = styled.div`
  width: 68.75rem;
  margin: 0 auto;
`;

const FooterTop = styled.div`
  ${props => props.theme.flex.flexBox('_', '_', 'space-between')}
  padding: 3% 0;
`;

const FooterButton = styled.button`
  width: 6.625rem;
  height: 1.875rem;
  border: 0.063rem solid #d8d9db;
  border-radius: 3.125rem;
  background-color: transparent;
  color: #666;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  cursor: pointer;
  display: inline-block;
`;

const FooterSearch = styled(FaSearch)`
  font-size: 0.813rem;
  margin-right: 0.4%;
`;

const FooterBottom = styled.div`
  height: 100%;
  ${props => props.theme.flex.flexBox('_', '_', 'space-between')}
`;

const FooterRight = styled.div`
  display: flex;
`;

const FooterLogo = styled.div`
  width: 9.375rem;
  height: 3.125rem;
  background-image: url(../../images/megaboxu3.png);
  background-size: 100% 100%;
  margin: 0 20px 0 0;
`;

const FooterIcon = styled.div`
  display: flex;
`;

const FooterSns = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  ${props => props.theme.flex.flexBox('_', 'center', 'center')}
  background-color: #adadaf;
  margin-left: 5px;
`;

const FooterYoutube = styled(FaYoutube)`
  width: 1.25rem;
  height: 1.25rem;
  color: ${props => props.theme.colors.white};
`;

const FooterInsta = styled(FaInstagram)`
  width: 1.25rem;
  height: 1.25rem;
  color: ${props => props.theme.colors.white};
`;

const FooterFacebook = styled(FaFacebookF)`
  width: 1.25rem;
  height: 1.25rem;
  color: ${props => props.theme.colors.white};
`;

const FooterTwitter = styled(FaYoutube)`
  width: 1.25rem;
  height: 1.25rem;
  color: ${props => props.theme.colors.white};
`;

export default Footer;
