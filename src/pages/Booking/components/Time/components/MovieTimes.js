import React from 'react';
import styled, { css } from 'styled-components';
import { MdMoreTime } from 'react-icons/md';

const MovieTimes = ({ bookingData, selectedTheater }) => {
  return (
    <>
      <NoneBox disabled={selectedTheater.length > 0 ? false : true}>
        <MdMoreTime className="timeIcons" />
        <TimeNotice>
          영화와 극장을 선택하시면
          <br />
          상영시간표를 비교하여 볼 수 있습니다.
        </TimeNotice>
      </NoneBox>
      <MovieTimeBox disabled={selectedTheater.length > 0 ? true : false}>
        {bookingData.map(timeList => {
          const { id, title, theater, start_time, end_time } = timeList;
          return (
            <MovieTime key={id}>
              <TimeBox>
                <p>{start_time}</p>
                <span>~{end_time}</span>
              </TimeBox>
              <TitleBox>
                <p>{title}</p>
                <span>{theater}</span>
              </TitleBox>
            </MovieTime>
          );
        })}
      </MovieTimeBox>
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

        .timeIcons {
          font-size: 3rem;
          color: ${props => props.theme.colors.gray};
        }
      `;
    } else {
      return css`
        display: none;
      `;
    }
  }};
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
  &:hover {
    background: ${props => props.theme.colors.lightGray};
  }
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
