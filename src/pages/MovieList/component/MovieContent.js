import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';

const MovieContent = ({ movielist }) => {
  const {
    title,
    poster_url,
    age_limit,
    reservation_rate,
    release_date,
    description,
    average_rating,
  } = movielist;

  const [likeColor, setLikeColor] = useState(false);

  return (
    <MovieListBox>
      <MovieInfo>
        <MoviePoster>
          <img src={poster_url} alt="" />
          <MovieSummary>
            <MovieDesc>
              <p>{description}</p>
            </MovieDesc>
            <MovieRate>
              <RateName>관람평</RateName>
              <RatePoint>
                {average_rating === null ? 0 : parseFloat(average_rating)}
              </RatePoint>
            </MovieRate>
          </MovieSummary>
        </MoviePoster>
        <MovieTitle>
          <MovieAge bgColor={AGE_COLOR[age_limit]}>{age_limit}</MovieAge>
          <MovieName>{title}</MovieName>
        </MovieTitle>
        <RateDate>
          <ReservationRate>예매율 {reservation_rate}%</ReservationRate>
          <ColBar />
          <ReleaseDate>개봉일 {release_date}</ReleaseDate>
        </RateDate>
        <ButtonDiv>
          <LikeBtn
            onClick={() => {
              setLikeColor(!likeColor);
            }}
          >
            <AiOutlineHeart color={likeColor === false ? 'black' : 'red'} />
          </LikeBtn>
          <TicketBtn>예매</TicketBtn>
        </ButtonDiv>
      </MovieInfo>
    </MovieListBox>
  );
};
const MovieListBox = styled.div`
  width: 230px;
  margin-bottom: 60px;
`;

const MovieInfo = styled.div`
  width: 100%;
  height: 450px;
`;

const MoviePoster = styled.div`
  width: 230px;
  height: 331px;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 331px;
    background-size: cover;
  }
`;

const MovieSummary = styled.div`
  &:not(hover) {
    width: 100%;
    height: 331px;
    background-color: rgba(0, 0, 0, 0.8);
    position: relative;
    bottom: 335px;
    padding: 20px;
    color: white;
    line-height: 1.4;
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    animation: 0.3s ease-in ani;
    @keyframes ani {
      from {
        opacity: 0.5;
      }
    }
    to {
      opacity: 1;
    }

    &:hover {
      opacity: 1;

      animation: 0.3s ease-in ani2;
      @keyframes ani2 {
        from {
          opacity: 0.5;
        }
      }
      to {
        opacity: 1;
      }
    }
  }
`;

const MovieDesc = styled.div`
  width: 100%;
  height: 175px;
  overflow: hidden;
`;

const MovieRate = styled.div`
  width: 100%;
  height: 35px;
  border-top: 1px solid gray;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 20px;
`;

const RateName = styled.span`
  font-size: 15px;
`;

const RatePoint = styled.span`
  font-size: 25px;
  color: #59b2c9;
`;

const MovieTitle = styled.div`
  width: 100%;
  height: 27px;
  margin: 10px 0 0 0;
  display: flex;
`;

const MovieName = styled.span`
  width: 200px;
  margin: 7px;
  font-size: 20px;
  display: flex;
  align-items: center;
`;

const RateDate = styled.div`
  width: 100%;
  height: 32.5px;
  padding: 10px 0 0 0;
  display: flex;
  justify-content: space-between;

  span {
    font-size: 16px;
  }
`;

const ReservationRate = styled.span`
  font-size: 16px;
`;

const ReleaseDate = styled(ReservationRate)``;

const ColBar = styled.div`
  height: 13px;
  border-right: 1px solid lightgray;
`;

const ButtonDiv = styled.div`
  width: 100%;
  height: 36px;
  margin-top: 7px;
  display: flex;
  justify-content: space-between;
`;

const TicketBtn = styled.button`
  width: 153px;
  height: 36px;
  background-color: #503396;
  border: 0;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: #351f67;
  }
`;

const LikeBtn = styled.button`
  width: 72px;
  height: 36px;
  background-color: transparent;
  border: 1px solid lightgray;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #f1f4f8;
    color: red;
  }
`;

const MovieAge = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  color: white;
  font-size: 14px;
  border-radius: 50px;
`;

const AGE_COLOR = {
  All: '#3fa900',
  12: '#198ef6',
  15: '#e49c0c',
  18: '#e81002',
};

export default MovieContent;
