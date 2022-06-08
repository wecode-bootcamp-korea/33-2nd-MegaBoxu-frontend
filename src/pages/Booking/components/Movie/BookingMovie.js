import React from 'react';
import styled from 'styled-components';
import { FaRegHeart } from 'react-icons/fa';

function BookingMovie() {
  return (
    <BookingContainer>
      <BookingFlexBox>
        <H2>영화</H2>
        <MovieAll>전체</MovieAll>
        <MovieList>
          <MovieLists>
            <MovieAge>12</MovieAge>
            <span>마녀(魔女) Part2. The Other One</span>
            <FaRegHeart className="icons" />
          </MovieLists>
          <MovieLists>
            <MovieAge>12</MovieAge>
            <span>쥬라기 월드:도미니언</span>
            <FaRegHeart className="icons" />
          </MovieLists>
          <MovieLists>
            <MovieAge>12</MovieAge>
            <span>닥터 스트레인지:대혼돈의 멀티버스</span>
            <FaRegHeart className="icons" />
          </MovieLists>
        </MovieList>
        <MoviePost>
          <span>
            모든영화
            <br /> 목록에서 영화를 선택하세요.
          </span>
        </MoviePost>
        <MoviePosts>
          <Posts>
            <img src="images/IMG_5902.JPG" alt="MoviePost" />
          </Posts>
          <Posts>
            <img src="images/IMG_5902.JPG" alt="MoviePost" />
          </Posts>
          <Posts>+</Posts>
        </MoviePosts>
      </BookingFlexBox>
    </BookingContainer>
  );
}

export default BookingMovie;

const BookingContainer = styled.main`
  width: 20rem;
  border-right: 1px solid #d8d9db;
`;

const BookingFlexBox = styled.div`
  width: 19rem;
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  color: #222222;
`;

const MovieAll = styled.div`
  text-align: center;
  margin-top: 1rem;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  padding: 1rem;
  font-size: 1.2rem;
`;

const MovieList = styled.div`
  height: 20rem;
  margin-top: 1rem;
`;

const MovieLists = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-items: center;
  cursor: pointer;
  margin: 0 0.5rem;
  padding: 0.5rem;

  .icons {
    position: absolute;
    color: #d8d9db;
    right: 0;
    cursor: pointer;
  }
`;

const MovieAge = styled.div`
  padding: 0.3rem;
  border-radius: 5rem;
  margin-right: 0.5rem;
  background-color: #198ef7;
`;

const MoviePost = styled.div`
  border: ${props => props.theme.borders.gray};
  margin: auto;
  padding: 3rem 1rem 1rem 1rem;
  text-align: center;
  height: 8rem;
`;

const MoviePosts = styled.div`
  border: ${props => props.theme.borders.gray};
  ${props => props.theme.flex.flexBox('row', 'center', 'space-between')}
  margin: auto;
  padding: 0.5rem;
  text-align: center;
  height: 8rem;
`;

const Posts = styled.div`
  border: ${props => props.theme.borders.gray};
  width: 5rem;
  margin: 0 0.5rem;
  height: 6rem;
  ${props => props.theme.flex.flexBox('row', 'center', 'center')}
  cursor : pointer;

  img {
    width: 100%;
    height: 6rem;
  }
`;
