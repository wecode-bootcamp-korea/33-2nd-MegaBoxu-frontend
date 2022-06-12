import React from 'react';
import RegionLists from './components/RegionLists';
import TheaterLists from './components/TheaterLists';
import TheaterPosts from './components/TheaterPosts';
import styled from 'styled-components';

function BookingTheater({
  bookingData,
  selectedRegion,
  handleSelectRegion,
  handleSelectTheater,
  selectedTheater,
  handleObjectTheater,
}) {
  // 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
  const groupValues =
    bookingData &&
    bookingData.reduce((acc, current) => {
      acc[current.region] = acc[current.region] || [];
      acc[current.region].push(current.theater);
      return acc;
    }, {});
  // 위에서 만든 객체를 key로 돌려서 새로운 객체 return
  const groups =
    groupValues &&
    Object.keys(groupValues).map(key => {
      return { region: key, theater: groupValues[key] };
    });

  return (
    <BookingContainer>
      <BookingFlexBox>
        <H2>극장</H2>
        <MovieTeater>전체</MovieTeater>
        <RegionTheaterList>
          <RegionList>
            {groups.map((group, i) => (
              <RegionLists
                key={i}
                handleSelectRegion={handleSelectRegion}
                regionSelect={selectedRegion === group.region}
                group={group}
              />
            ))}
          </RegionList>
          <TheaterList>
            {groups.map(
              (group, i) =>
                selectedRegion === group.region && (
                  <TheaterLists
                    key={i}
                    group={group}
                    handleSelectTheater={handleSelectTheater}
                    selectedTheater={selectedTheater}
                    // handleObjectTheater={handleObjectTheater}
                  />
                )
            )}
          </TheaterList>
        </RegionTheaterList>
        <TheaterPosts
          bookingData={bookingData}
          selectedTheater={selectedTheater}
        />
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
    width: 0.5rem; /* 스크롤바의 너비 */
  }

  &::-webkit-scrollbar-thumb {
    height: 20%; //스크롤바의 길이
    background: ${({ theme }) => theme.colors.gray}; /* 스크롤바의 색상 */
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) =>
      theme.colors.lightGray}; /*스크롤바 뒷 배경 색상*/
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
