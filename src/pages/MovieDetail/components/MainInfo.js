import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BsShare, BsSuitHeart, BsPeople } from 'react-icons/bs';
import { ImSortNumbericDesc, ImTicket } from 'react-icons/im';

const MainInfo = ({ movieInfo }) => {
  const navigate = useNavigate();
  return (
    <MainInfoContainer
      style={{ backgroundImage: `url(${movieInfo.poster_url})` }}
    >
      <BackgroundFilter>
        <MainInfoPage>
          <MainInfoLeft>
            <TopContainer>
              <MainInfoTitle>{movieInfo.title}</MainInfoTitle>
              <ButtonContainer>
                <LikeBtn>
                  <BsSuitHeart className="likeIcon" />
                  {movieInfo.movie_like_cnt}K
                </LikeBtn>
                <ShareBtn>
                  <BsShare className="shareIcon" />
                  공유하기
                </ShareBtn>
              </ButtonContainer>
            </TopContainer>
            <BottomContainer>
              <BottomListRating>
                <p className="listTxt">실관람 평점</p>
                <p className="listRating">
                  <ImSortNumbericDesc className="ratingIcon" />
                  {Math.round(movieInfo.average_rating * 100) / 100}
                </p>
              </BottomListRating>
              <BottomListReserve>
                <p className="listTxt">예매율</p>
                <p className="listReserve">
                  <ImTicket className="reserveIcon" />
                  {movieInfo.reservation_rank}
                  <span className="listSpan">
                    위({movieInfo.reservation_rate}%)
                  </span>
                </p>
              </BottomListReserve>
              <BottomListAudience>
                <p className="listTxt">누적관람객 수</p>
                <p className="listView">
                  <BsPeople className="peopleIcon" />
                  {movieInfo.total_viewer
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </p>
              </BottomListAudience>
            </BottomContainer>
          </MainInfoLeft>
          <MainInfoRight>
            <PosterBtnContainer>
              <Poster src={movieInfo.poster_url} alt="poster" />
              <BookingBtn
                onClick={() =>
                  navigate('/booking', { state: movieInfo.movie_id })
                }
              >
                예매
              </BookingBtn>
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
  background-repeat: no-repeat;
  background-position: center 0;
`;

const BackgroundFilter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    rgba(255, 255, 255, 0.3) 10%,
    black,
    black,
    black,
    black
  );
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
  ${props => props.theme.flex.flexBox('_', '_', '_')};
`;

const LikeBtn = styled.button`
  width: 6.25rem;
  height: 3.125rem;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 3rem;
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.white};
  text-align: center;
  .likeIcon {
    margin-right: 0.3rem;
    font-size: ${props => props.theme.fontSizes.xs};
  }
`;

const ShareBtn = styled.button`
  width: 6.25rem;
  height: 3.125rem;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 5rem;
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.white};
  text-align: center;
  .shareIcon {
    margin-right: 0.3rem;
    font-size: ${props => props.theme.fontSizes.xs};
  }
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
    margin-top: 0.5rem;
    font-size: ${props => props.theme.fontSizes.titleSize};
    color: rgb(50, 158, 177);
    .ratingIcon {
      margin-right: 0.3rem;
      font-size: ${props => props.theme.fontSizes.xxl};
      color: gray;
      opacity: 0.8;
    }
  }
`;

const BottomListReserve = styled.div`
  width: 8rem;
  height: 3.125rem;
  .listTxt {
    font-size: ${props => props.theme.fontSizes.base};
    color: ${props => props.theme.colors.white};
  }

  .listReserve {
    margin-top: 0.5rem;
    font-size: ${props => props.theme.fontSizes.titleSize};
    color: ${props => props.theme.colors.white};
    letter-spacing: 0.1rem;
    .reserveIcon {
      font-size: ${props => props.theme.fontSizes.xxl};
      color: gray;
    }
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
    margin-top: 0.5rem;
    width: 13rem;
    font-size: ${props => props.theme.fontSizes.titleSize};
    color: ${props => props.theme.colors.white};
    letter-spacing: 0.1rem;
    .peopleIcon {
      font-size: ${props => props.theme.fontSizes.xxl};
      color: gray;
    }
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
  width: 16rem;
  height: 21rem;
  border-radius: 10px;
`;

const BookingBtn = styled.button`
  width: 16rem;
  height: 3rem;
  color: white;
  background-color: rgb(50, 158, 177);
  appearance: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
export default MainInfo;
