import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BookingDate from './Date/BookingDate.js';
import BookingMovie from './Movie/BookingMovie.js';
import BookingTheater from './Theater/BookingTheater.js';
import BookingTime from './Time/BookingTime.js';

const BookingBox = () => {
  const getDateList = idx => {
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    const today = new Date();
    const newDate = new Date(today.setDate(today.getDate() + idx));
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const date = newDate.getDate();
    const day = week[newDate.getDay()];
    return { year, month, date, day };
  };

  const [bookingData, setBookingData] = useState([]);
  const [selectMovie, setSelectMovie] = useState([]);
  const [selectedTheater, setSelectedTheater] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const navigator = useNavigate();

  useEffect(() => {
    setSelectedDate(getDateList(0));
  }, []);

  useEffect(() => {
    const dateString = `${selectedDate.year}-${selectedDate.month}-${selectedDate.date}`;
    const movieString = selectMovie.map(e => `&movie=${e}`).join('&');
    const theaterString = selectedTheater.map(e => `&theater=${e}`).join('&');
    const regionString = selectedRegion && `&region=${selectedRegion}`;
    navigator(`?${dateString}${movieString}${regionString}${theaterString}`);
  }, [selectMovie, selectedTheater, selectedRegion, selectedDate]);

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
    setSelectedDate(date);
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

  const handleSelectRegion = region => {
    if (selectedRegion.includes(region)) {
      setSelectedRegion('');
      return;
    }
    setSelectedRegion(region);
  };
  return (
    <>
      <BookingDate
        handleObjectDate={handleObjectDate}
        getDateList={getDateList}
      />
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
        <BookingTime
          bookingData={bookingData}
          selectedTheater={selectedTheater}
        />
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
