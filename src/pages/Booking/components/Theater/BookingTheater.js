import React, { useEffect, useState } from 'react';
import RegionLists from './components/RegionLists';
import TheaterLists from './components/TheaterLists';
import TheaterPosts from './components/TheaterPosts';
import styled from 'styled-components';

function BookingTheater({
  selectedRegion,
  handleSelectRegion,
  handleSelectTheater,
  selectedTheater,
}) {
  const [theaterData, setTheaterData] = useState([]);

  useEffect(() => {
    fetch('http://10.58.1.169:8000/reservation/region-theater')
      .then(res => res.json())
      .then(data => {
        setTheaterData(data.region_theaters);
      });
  }, []);

  return (
    <BookingContainer>
      <BookingFlexBox>
        <H2>극장</H2>
        <MovieTeater>전체</MovieTeater>
        <RegionTheaterList>
          <RegionList>
            {theaterData?.map(region => {
              const { region_id, region_name } = region;
              return (
                <RegionLists
                  key={region_id}
                  handleSelectRegion={handleSelectRegion}
                  regionSelect={selectedRegion === region_name}
                  region={region}
                />
              );
            })}
          </RegionList>
          <TheaterList>
            {theaterData.map(theater => {
              const { region_id, region_name } = theater;
              return (
                selectedRegion === region_name && (
                  <TheaterLists
                    key={region_id}
                    theater={theater}
                    handleSelectTheater={handleSelectTheater}
                    selectedTheater={selectedTheater}
                  />
                )
              );
            })}
          </TheaterList>
        </RegionTheaterList>
        <TheaterPosts theater={theaterData} selectedTheater={selectedTheater} />
      </BookingFlexBox>
    </BookingContainer>
  );
}

export default BookingTheater;

const BookingContainer = styled.main`
  width: 20rem;
  margin-left: 1rem;
  border-right: ${props => props.theme.borders.gray};
`;

const BookingFlexBox = styled.div`
  width: 19rem;
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  color: #222222;
`;

const MovieTeater = styled.div`
  text-align: center;
  margin-top: 1rem;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  padding: 1rem;
  font-size: 1.2rem;
`;

const RegionTheaterList = styled.div`
  height: 20rem;
  margin-top: 1rem;
  display: flex;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    height: 20%;
    background: ${({ theme }) => theme.colors.gray};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.lightGray};
  }
`;

const RegionList = styled.div`
  width: 9.5rem;
  border-right: 1px solid #d8d9db;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const TheaterList = styled.div`
  width: 9.5rem;
  margin: 0 0.5rem 0.5rem 0;
`;
