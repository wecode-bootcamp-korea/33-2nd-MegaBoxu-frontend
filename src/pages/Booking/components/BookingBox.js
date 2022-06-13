import React, { useEffect, useState } from 'react';
import { FaAlgolia } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
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
  const location = useLocation();
  // return delete dataValues.movie;

  useEffect(() => {
    setDataValues({
      ...dataValues,
      date: 0,
      movie: selectMovie.length === 0 ? 'all' : selectMovie,
      theater: selectedTheater.length === 0 ? 'all' : selectedTheater,
    });
  }, [selectMovie, selectedTheater]);

  useEffect(() => {
    const payloadString = Object.entries(dataValues)
      .map(e => e.join('=').replace(/,/g, '&' + e[0] + '='))
      .join('&');
    navigator(`?${payloadString}`);
  }, [
    dataValues.movie,
    dataValues.theater,
    dataValues.date,
    dataValues.region,
  ]);

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

  const handleSelectRegion = region => {
    setSelectedRegion(region);
    setDataValues({
      ...dataValues,
      region: region,
    });
  };

  const handleSelectTheater = theaters => {
    if (selectedTheater.includes(theaters)) {
      setSelectedTheater([
        ...selectedTheater.filter(theater => theater !== theaters),
      ]);
      return;
    }
    if (selectedTheater.length >= 3) {
      alert('극장은 최대 3개까지 선택이 가능합니다.');
    } else {
      setSelectedTheater(prev => [...prev, theaters]);
    }
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
