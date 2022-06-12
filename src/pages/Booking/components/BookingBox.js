import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BookingDate from './Date/BookingDate.js';
import BookingMovie from './Movie/BookingMovie.js';
import BookingTheater from './Theater/BookingTheater.js';
import BookingTime from './Time/BookingTime.js';

const BookingBox = () => {
  const [bookingData, setBookingData] = useState([]);
  const [selectMovie, setSelectMovie] = useState([]);
  const [selectedTheater, setSelectedTheater] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [dataValues, setDataValues] = useState({});

  const navigator = useNavigate();

  // const payloadString = Object.entries(dataValues);
  // console.log(Object.keys(dataValues));
  // console.log(bookingData);
  console.log(Object.values(dataValues));
  // console.log(dataValues);

  useEffect(() => {
    setDataValues({
      ...dataValues,
      movie: selectMovie,
      theater: selectedTheater,
      date: 0,
    });
  }, [selectMovie, selectedTheater]);

  useEffect(() => {
    const payloadString = Object.entries(dataValues)
      .map(e => e.join('=').replace(/,/g, '&' + e[0] + '='))
      .join('&');
    navigator(`?${payloadString}`);
  }, [dataValues.movie, dataValues.theater, dataValues.date]);

  useEffect(() => {
    fetch('data/bookingData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setBookingData(data.results);
      });
  }, []);

  const handleObjectDate = date => {
    setDataValues({
      ...dataValues,
      date: date,
    });
  };

  // const handleObjectMovie = movie => {
  //   // if (dataValues.movie === movie) {
  //   //   setDataValues((dataValues.movie = ''));
  //   //   return;
  //   // }
  //   if (dataValues.movie === movie) {
  //     // return delete dataValues.movie;
  //     setDataValues(Object.values(dataValues).filter(value => value !== movie));
  //   } else {
  //     setDataValues({
  //       ...dataValues,
  //       movie: movie,
  //     });
  //   }
  // };

  // const handleObjectTheater = theater => {
  //   if (dataValues.theater === theater) {
  //     // return delete dataValues.theater;
  //     setDataValues(
  //       Object.values(dataValues).filter(value => value !== theater)
  //     );
  //   }
  //   // if (dataValues.theater === theater) {
  //   //   setDataValues((dataValues.theater = ''));
  //   //   return;
  //   // }
  //   else {
  //     setDataValues({
  //       ...dataValues,
  //       theater: theater,
  //     });
  //   }
  // };

  const handleSelectMovie = movies => {
    if (selectMovie.includes(movies)) {
      setSelectMovie([...selectMovie.filter(movie => movie !== movies)]);
      return;
    }
    if (selectMovie.length >= 3) {
      alert('영화는 최대 3개까지 선택이 가능합니다.');
    } else {
      setSelectMovie(prev => [...prev, movies]);
    }
  };

  const handleSelectTheater = Theater => {
    if (selectedTheater.includes(Theater)) {
      setSelectedTheater([...selectedTheater.filter(id => id !== Theater)]);
      return;
    }
    if (selectedTheater.length >= 3) {
      alert('극장은 최대 3개까지 선택이 가능합니다.');
    } else {
      setSelectedTheater(prev => [...prev, Theater]);
    }
  };

  const handleSelectRegion = Region => {
    setSelectedRegion(Region);
  };

  return (
    <>
      <BookingDate handleObjectDate={handleObjectDate} />
      <BookingContainer>
        <BookingMovie
          bookingData={bookingData}
          handleSelectMovie={handleSelectMovie}
          selectMovie={selectMovie}
        />
        <BookingTheater
          bookingData={bookingData}
          handleSelectTheater={handleSelectTheater}
          handleSelectRegion={handleSelectRegion}
          selectedTheater={selectedTheater}
          selectedRegion={selectedRegion}
        />
        <BookingTime bookingData={bookingData} />
      </BookingContainer>
    </>
  );
};

export default BookingBox;

const BookingContainer = styled.div`
  display: flex;
  height: 40rem;
  padding: 1rem;
  margin-top: 1rem;
  border-top: ${({ theme }) => theme.borders.gray};
`;
