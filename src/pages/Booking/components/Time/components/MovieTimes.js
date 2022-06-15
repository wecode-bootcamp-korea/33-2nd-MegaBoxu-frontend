import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdMoreTime } from 'react-icons/md';

const MovieTimes = ({ bookingData, selectedTheater }) => {
  const [selectMovieTime, setSelectMovieTime] = useState();

  const handleSelect = id => {
    if (selectMovieTime === id) {
      setSelectMovieTime('');
      return;
    } else {
      setSelectMovieTime(id);
    }
  };

  const alertBooking = () => {
    alert('예약이 완료 되었습니다.');
  };

  return (
    <>
      <NoneBox disabled={selectedTheater.length === 0}>
        <TimeIcon />
        <TimeNotice>
          영화와 극장을 선택하시면
          <br />
          상영시간표를 비교하여 볼 수 있습니다.
        </TimeNotice>
      </NoneBox>
      <MovieTimeBox disabled={selectedTheater.length !== 0}>
        {bookingData?.map(timeList => {
          const {
            movie_theater_id,
            movie_title,
            theater_name,
            start_time,
            end_time,
          } = timeList;
          return (
            <MovieTime
              key={movie_theater_id}
              onClick={() => {
                handleSelect(timeList.movie_theater_id);
              }}
              isSelect={selectMovieTime === timeList.movie_theater_id}
            >
              <TimeBox>
                <p>{start_time}</p>
                <span>~{end_time}</span>
              </TimeBox>
              <TitleBox>
                <p>{movie_title}</p>
                <span>{theater_name}</span>
              </TitleBox>
            </MovieTime>
          );
        })}
      </MovieTimeBox>
      <TimeBtn isBtnSelect={selectMovieTime} onClick={alertBooking}>
        예매하기
      </TimeBtn>
    </>
  );
};

export default MovieTimes;

const MovieTimeBox = styled.div`
  ${({ disabled }) => {
    if (disabled) {
      return css`
        margin-top: 1rem;
        font-size: 1.2rem;
        height: 32rem;
        padding-bottom: 2rem;
        border-top: ${props => props.theme.borders.gray};
      `;
    } else {
      return css`
        display: none;
      `;
    }
  }};

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

const NoneBox = styled.div`
  ${({ disabled }) => {
    if (disabled) {
      return css`
        margin: auto;
        text-align: center;
        padding-top: 13rem;
        border-top: ${props => props.theme.borders.gray};
        margin-top: 1rem;
      `;
    } else {
      return css`
        display: none;
      `;
    }
  }};
`;

const MovieTimeTitle = css`
  ${({ isSelect }) => {
    if (isSelect) {
      return css`
        background-color: ${({ theme }) => theme.colors.gray};
        color: white;
      `;
    } else {
      return css`
        background-color: transparent;
        color: black;

        &:hover {
          background-color: ${({ theme }) => theme.colors.lightGray};
        }
      `;
    }
  }}
`;

const TimeIcon = styled(MdMoreTime)`
  font-size: 3rem;
  color: ${props => props.theme.colors.gray};
`;

const TimeNotice = styled.div`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.gray};
`;

const MovieTime = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', '_')}
  padding: 1rem;
  border-bottom: ${props => props.theme.borders.gray};
  cursor: pointer;

  ${MovieTimeTitle}
`;

const TimeBox = styled.div`
  ${props => props.theme.flex.flexBox('column', '_', '_')}

  p {
    font-weight: bold;
    margin-bottom: 0.2rem;
  }

  span {
    font-size: 0.9rem;
    color: ${props => props.theme.colors.gray};
  }
`;

const TitleBox = styled.div`
  flex: 1;
  margin: 0 2rem;
  ${props => props.theme.flex.flexBox('row', 'center', 'space-between')}

  span {
    font-size: 0.9rem;
  }
`;

const TimeBtn = styled.button`
  width: 8rem;
  height: 3rem;
  margin-left: 24rem;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  border: none;
  cursor: ${({ isBtnSelect }) => (isBtnSelect ? 'pointer' : 'default')};
  display: ${({ isBtnSelect }) => (isBtnSelect ? 'block' : 'none')};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
    color: white;
  }
`;
