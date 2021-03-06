import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import BookingDate from './Date/BookingDate.js';
import BookingMovie from './Movie/BookingMovie.js';
import BookingTheater from './Theater/BookingTheater.js';
import BookingTime from './Time/BookingTime.js';
import { API } from '../../../config';

const BookingBox = () => {
  const location = useLocation();
  const [bookingData, setBookingData] = useState([]);
  const [movieListData, setMovieListData] = useState([]);
  const [selectMovie, setSelectMovie] = useState(
    location.state ? [location.state] : []
  );
  const [selectedTheater, setSelectedTheater] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

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

  useEffect(() => {
    setSelectedDate(getDateList(0));
  }, []);

  useEffect(() => {
    const dateString =
      selectedDate &&
      `?date=${selectedDate.year}-${selectedDate.month}-${selectedDate.date}`;
    const movieString = selectMovie.map(e => `&movie_id=${e}`).join('');
    const theaterString = selectedTheater.map(e => `&theater_id=${e}`).join('');
    selectedTheater.length !== 0 &&
      fetch(`${API.BOOKING}${dateString}${movieString}${theaterString}`, {
        method: 'GET',
      })
        .then(res => res.json())
        .then(data => {
          setBookingData(data.time_table);
        });
  }, [selectMovie, selectedTheater, selectedDate]);

  useEffect(() => {
    const dateString =
      selectedDate &&
      `?date=${selectedDate.year}-${selectedDate.month}-${selectedDate.date}`;
    fetch(`${API.MOVIE}${dateString}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        const initialMovieIdx = data.result.findIndex(
          movie => movie.movie_id === location.state
        );
        setMovieListData(data.result);

        if (!data.result[initialMovieIdx]?.is_available) {
          setSelectMovie([]);
        }
      });
  }, [selectedDate]);

  const handleSelectMovie = moviesId => {
    if (selectMovie.includes(moviesId)) {
      setSelectMovie([...selectMovie.filter(movie => movie !== moviesId)]);
      return;
    }
    if (selectMovie.length >= 3) {
      alert('영화는 최대 3개까지 선택이 가능합니다.');
    } else {
      setSelectMovie(prev => [...prev, moviesId]);
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

  const handleObjectDate = date => {
    setSelectedDate(date);
  };

  return (
    <>
      <BookingDate
        handleObjectDate={handleObjectDate}
        getDateList={getDateList}
      />
      <BookingContainer>
        <BookingMovie
          movieListData={movieListData}
          handleSelectMovie={handleSelectMovie}
          selectMovie={selectMovie}
        />
        <BookingTheater
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
