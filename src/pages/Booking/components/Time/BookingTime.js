import React from 'react';
import styled from 'styled-components';
import { FiSun, FiCoffee, FiMoon } from 'react-icons/fi';
import { MdMoreTime } from 'react-icons/md';

function BookingTime() {
  return (
    <BookingContainer>
      <BookingFlexBox>
        <TitleIcon>
          <H2>시간</H2>
          <IconBox>
            <div>
              <FiSun />
            </div>
            <div>
              <FiCoffee />
            </div>
            <div>
              <FiMoon />
            </div>
          </IconBox>
        </TitleIcon>
        <MovieTimeBox>
          <MovieTime>
            <TimeBox>
              <p>14:00</p>
              <span>~15:37</span>
            </TimeBox>
            <TitleBox>
              <p>닥터 스트레인지:대혼돈의 멀티버스</p>
              <span>강남</span>
            </TitleBox>
          </MovieTime>
          <MovieTime>
            <TimeBox>
              <p>14:00</p>
              <span>~15:37</span>
            </TimeBox>
            <TitleBox>
              <p>범죄도시2</p>
              <span>강남</span>
            </TitleBox>
          </MovieTime>
          <NoneBox>
            <span>
              <MdMoreTime />
            </span>
            <p>
              영화와 극장을 선택하시면
              <br />
              상영시간표를 비교하여 볼 수 있습니다.
            </p>
          </NoneBox>
        </MovieTimeBox>
      </BookingFlexBox>
    </BookingContainer>
  );
}

export default BookingTime;

const BookingContainer = styled.main`
  width: 35rem;
  margin-left: 1rem;
`;

const BookingFlexBox = styled.div`
  width: 33rem;
`;

const TitleIcon = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'space-between')}
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  color: #222222;
`;

const IconBox = styled.div`
  ${props => props.theme.flex.flexBox('row', 'center', 'space-between')}

  div {
    margin: 0 0.5rem;
    cursor: pointer;
    ${props => props.theme.flex.flexBox('row', 'center', 'center')}
  }
`;

const MovieTimeBox = styled.div`
  margin-top: 1rem;
  font-size: 1.2rem;
  height: 32rem;
  padding-bottom: 2rem;
  border-top: ${props => props.theme.borders.gray};
`;

const NoneBox = styled.div`
  margin: auto;
  text-align: center;
  padding-top: 13rem;

  span {
    font-size: 3rem;
    color: ${props => props.theme.colors.gray};
  }
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
