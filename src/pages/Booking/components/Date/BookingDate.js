import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import DateBox from './components/DateBox';
import YearMonth from './components/YearMonth';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const DateSlider = () => {
  const [curDate, setCurDate] = useState(0);
  const dateBtnWrapperRef = useRef();

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

  const setYearArea = (idx, dateInfo) => {
    if (idx === curDate || dateInfo.date === 1) {
      return (
        <YearMonth
          idx={idx}
          key={idx}
          dateInfo={dateInfo}
          gap={DATEBOX_WIDTH}
        />
      );
    }
  };

  const handleArrowBtn = direction => {
    if (direction === 'left' && curDate !== 0) {
      dateBtnWrapperRef.current.style.transform = `translateX(${
        -DATEBOX_WIDTH * (curDate - 1)
      }px)`;
      setCurDate(prev => prev - 1);
    } else if (direction === 'right' && curDate !== MAX_DATE - 20) {
      dateBtnWrapperRef.current.style.transform = `translateX(${
        -DATEBOX_WIDTH * (curDate + 1)
      }px)`;
      setCurDate(prev => prev + 1);
    }
  };

  return (
    <StyledDateSlider>
      <ArrowBtn>
        <MdChevronLeft
          className="arrowIcons"
          onClick={() => handleArrowBtn('left')}
        />
      </ArrowBtn>
      <DateSliderWrapper>
        <DateSliderContainer ref={dateBtnWrapperRef}>
          {[...Array(MAX_DATE)].map((_, idx) => {
            const dateInfo = getDateList(idx);
            return (
              <React.Fragment key={idx}>
                {setYearArea(idx, dateInfo)}
                <DateBox
                  id={idx}
                  key={`DateBox${idx}`}
                  width={DATEBOX_WIDTH}
                  dateInfo={dateInfo}
                  disabled={idx > 6 ? true : false}
                  isSelected={idx === curDate}
                />
              </React.Fragment>
            );
          })}
        </DateSliderContainer>
      </DateSliderWrapper>
      <ArrowBtn>
        <MdChevronRight
          className="arrowIcons"
          onClick={() => handleArrowBtn('right')}
        />
      </ArrowBtn>
    </StyledDateSlider>
  );
};

export default DateSlider;

const StyledDateSlider = styled.div`
  display: flex;
`;

const ArrowBtn = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  background-color: transparent;
  border: none;

  .arrowIcons {
    font-size: 1.5rem;
  }
`;

const DateSliderWrapper = styled.div`
  position: relative;
  width: 75rem;
  overflow-x: clip;
`;

const DateSliderContainer = styled.div`
  display: flex;
  transition: transform 0.5s;
`;

const MAX_DATE = 30;
const DATEBOX_WIDTH = 70;
