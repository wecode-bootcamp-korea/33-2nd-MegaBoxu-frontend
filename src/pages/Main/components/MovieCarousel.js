import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FaRegHeart, FaHeart } from 'react-icons/fa';

import styled from 'styled-components';

const MovieCarousel = ({ source, rank }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeNumber, setLikeNumber] = useState(0);

  const { title, movie_id, poster_url, description, average_rating } = source;

  const navigate = useNavigate();

  const toggleLikeNumber = () => {
    !isLiked ? setLikeNumber(likeNumber + 1) : setLikeNumber(likeNumber - 1);
  };

  return (
    <MovieCarouselWrapper>
      <ImgWrapper>
        <Img src={poster_url} alt={title} />
        <Ranking>{rank + 1}</Ranking>
        <ViewMore onClick={() => navigate(`/movie/detail/${movie_id}`)}>
          <Description>{description}</Description>
          <RatingWrapper>
            <Rating>관람평</Rating>
            <Rating>
              {average_rating === null
                ? 0
                : Math.round(average_rating * 100) / 100}
            </Rating>
          </RatingWrapper>
        </ViewMore>
      </ImgWrapper>
      <ButtonWrapper>
        <Like
          onClick={() => {
            setIsLiked(!isLiked);
            toggleLikeNumber();
          }}
        >
          {isLiked ? <FaHeart color="#027b94" /> : <FaRegHeart color="#fff" />}
          &nbsp; {likeNumber}
        </Like>
        <Booking onClick={() => navigate('/booking', { state: movie_id })}>
          예매
        </Booking>
      </ButtonWrapper>
    </MovieCarouselWrapper>
  );
};

const MovieCarouselWrapper = styled.div`
  position: relative;
  width: 15.313rem;
  height: 24.875rem;
  margin: 0 auto;
`;

const ImgWrapper = styled(MovieCarouselWrapper)`
  height: 22rem;
  overflow: hidden;
  cursor: pointer;
`;

const Img = styled.img`
  width: 15.313rem;
  height: 22rem;
`;

const Ranking = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.625rem 0 0 0.938rem;
  color: ${props => props.theme.colors.white};
  font-size: 2rem;
  font-weight: 300;
  font-style: italic;
  text-shadow: 2px 2px 2px rgb(0 0 0 / 80%);
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 15.313rem;
  height: 2.25rem;
  margin: 0.625rem 0 0 0;
`;

const Like = styled.button`
  ${props => props.theme.flex.flexBox()}
  width: 5rem;
  height: 2.125rem;
  padding: 0 0.313rem;
  color: ${props => props.theme.colors.white};
  background-color: rgba(0, 0, 0, 4);
  font-size: 0.8667rem;
  border: 1px solid ${props => props.theme.colors.darkGray};
  border-radius: 0.25rem;
  line-height: 2.125rem;
  cursor: pointer;
`;

const Booking = styled.div`
  ${props => props.theme.flex.flexBox()}
  width: 10rem;
  margin: 0 0 0 0.313rem;
  padding: 0 0.313rem;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.mint};
  border: 0;
  border-radius: 0.25rem;
  cursor: pointer;
`;

const ViewMore = styled.div`
  position: relative;
  width: 15.313rem;
  height: 22rem;
  padding: 1.563rem;
  background-color: rgba(0, 0, 0, 0.8);

  ${ImgWrapper}:hover & {
    position: absolute;
    top: 0;
    z-index: 1;
  }
`;

const Description = styled.div`
  display: block;
  height: 9.5rem;
  padding: 2.625rem 0 0 0;
  color: ${props => props.theme.colors.white};
  overflow: hidden;
`;

const RatingWrapper = styled.div`
  position: absolute;
  ${props => props.theme.flex.flexBox('columns', 'center', 'space-evenly')}
  padding: 0.625rem 0 0 0;
  right: 1.25rem;
  bottom: 1.25rem;
  left: 1.25rem;
  border-top: 1px solid ${props => props.theme.colors.mint};
`;

const Rating = styled.span`
  color: ${props => props.theme.colors.white};
  font-size: 0.8667rem;

  :last-child {
    color: ${props => props.theme.colors.mint};
    font-size: 1.6rem;
  }
`;

export default MovieCarousel;
