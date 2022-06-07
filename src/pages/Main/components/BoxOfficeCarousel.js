import React from 'react';

import MovieCarousel from './MovieCarousel';
import useFetch from '../../../hooks/useFetch';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { API } from '../../../config';

const BoxOfficeCarousel = () => {
  const sources = useFetch(API.MOVIE);

  // To Do:  http://10.58.5.139:8001/movie 추후 통신시 사용할 fetch 주소.

  return (
    <div>
      <Slider {...settings}>
        {sources &&
          sources.slice(0, 8).map((source, index) => (
            <div key={index}>
              <MovieCarousel source={source} rank={index} />
            </div>
          ))}
      </Slider>
    </div>
  );
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

export default BoxOfficeCarousel;
