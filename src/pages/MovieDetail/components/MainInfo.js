import React from 'react';
import styled from 'styled-components';
import { BsShare, BsSuitHeart } from 'react-icons/bs';

const MainInfo = ({ movieInfo }) => {
  return (
    <MainInfoContainer>
      <BackgroundFilter>
        <MainInfoPage>
          <MainInfoLeft>
            <TopContainer>
              <MainInfoTitle>{movieInfo.movie_name}</MainInfoTitle>
              <ButtonContainer>
                <LikeBtn>
                  <BsSuitHeart />
                  {movieInfo.movie_like}K
                </LikeBtn>
                <ShareBtn>
                  <BsShare />
                  공유하기
                </ShareBtn>
              </ButtonContainer>
            </TopContainer>
            <BottomContainer>
              <BottomListRating>
                <p className="listTxt">실관람 평점</p>
                <p className="listRating">{movieInfo.rating}</p>
              </BottomListRating>
              <BottomListReserve>
                <p className="listTxt">예매율</p>
                <p className="listReserve">
                  {movieInfo.reservation_rank}
                  <span className="listSpan">
                    위({movieInfo.reservation_rate}%)
                  </span>
                </p>
              </BottomListReserve>
              <BottomListAudience>
                <p className="listTxt">누적관람객 수</p>
                <p className="listView">
                  {movieInfo.total_viewer
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </p>
              </BottomListAudience>
            </BottomContainer>
          </MainInfoLeft>
          <MainInfoRight>
            <PosterBtnContainer>
              <Poster src="images/123123.jpg" alt="poster" />
              <BookingBtn>예매</BookingBtn>
            </PosterBtnContainer>
          </MainInfoRight>
        </MainInfoPage>
      </BackgroundFilter>
    </MainInfoContainer>
  );
};

const MainInfoContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 30rem;
  background-image: url('images/333.jpg');
  background-repeat: no-repeat;
  background-position: center 0;
`;
const BackgroundFilter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(rgba(255, 255, 255, 0.3) 30%, black, black);
`;

const MainInfoPage = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  margin: 0 auto;
`;
const MainInfoLeft = styled.div`
  ${props => props.theme.flex.flexBox('column', '_', 'space-around')};
  width: 60%;
`;
const TopContainer = styled.div`
  width: 50%;
`;
const MainInfoTitle = styled.h2`
  width: 20rem;
  font-size: 3rem;
  color: white;
`;
const ButtonContainer = styled.div`
  display: flex;
`;
const LikeBtn = styled.button`
  width: 6.25rem;
  height: 3.125rem;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 3rem;
  color: white;
  text-align: center;
`;
const ShareBtn = styled.button`
  width: 6.25rem;
  height: 3.125rem;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 5rem;
  color: white;
  text-align: center;
`;

const BottomContainer = styled.div`
  display: flex;
`;

const BottomListRating = styled.div`
  width: 6.25rem;
  height: 3.125rem;
  .listTxt {
    font-size: ${props => props.theme.fontSizes.base};
    color: ${props => props.theme.colors.white};
  }
  .listRating {
    font-size: ${props => props.theme.fontSizes.titleSize};
    color: rgb(50, 158, 177);
  }
`;

const BottomListReserve = styled.div`
  width: 6.25rem;
  height: 3.125rem;
  .listTxt {
    font-size: ${props => props.theme.fontSizes.base};
    color: ${props => props.theme.colors.white};
  }
  .listReserve {
    font-size: ${props => props.theme.fontSizes.titleSize};
    color: ${props => props.theme.colors.white};
    letter-spacing: 0.1rem;
  }
  .listSpan {
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.colors.white};
  }
`;

const BottomListAudience = styled.div`
  width: 6.25rem;
  height: 3.125rem;
  .listTxt {
    font-size: ${props => props.theme.fontSizes.base};
    color: ${props => props.theme.colors.white};
  }
  .listView {
    width: 10rem;
    font-size: ${props => props.theme.fontSizes.titleSize};
    color: ${props => props.theme.colors.white};
    letter-spacing: 0.1rem;
  }
`;

const MainInfoRight = styled.div`
  width: 40%;
`;

const PosterBtnContainer = styled.div`
  width: 70%;
  height: 70%;
  margin-top: 15%;
  margin-left: 30%;
`;
const Poster = styled.img`
  width: 17rem;
  height: 21rem;
  border-radius: 3px;
`;

const BookingBtn = styled.button`
  width: 17rem;
  height: 3rem;
  color: white;
  background-color: rgb(50, 158, 177);
  appearance: none;
  border: none;
  border-radius: 3px;
`;
export default MainInfo;
