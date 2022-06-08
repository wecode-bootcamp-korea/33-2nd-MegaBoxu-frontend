import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import DateBox from './components/DateBox';
import YearMonth from './components/YearMonth';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const DateSlider = ({ handleObjectDate, getDateList }) => {
  const [curDate, setCurDate] = useState(0);
  const dateBtnWrapperRef = useRef();

  const handleArrowBtn = direction => {
    if (direction === 'left' && curDate !== 0) {
      dateBtnWrapperRef.current.style.transform = `translateX(${
        -DATEBOX_WIDTH * (curDate - 1)
      }px)`;
      setCurDate(prev => prev - 1);
      handleObjectDate(getDateList(curDate - 1));
    } else if (direction === 'right' && curDate !== MAX_DATE - MAKE_LAST_DATE) {
      dateBtnWrapperRef.current.style.transform = `translateX(${
        -DATEBOX_WIDTH * (curDate + 1)
      }px)`;
      setCurDate(prev => prev + 1);
      handleObjectDate(getDateList(curDate + 1));
    }
  };
  return (
    <StyledDateSlider>
      <ArrowBtn>
        <MdChevronLeft
          className="arrowIcons"
          onClick={() => {
            handleArrowBtn('left');
          }}
        />
      </ArrowBtn>
      <DateSliderWrapper>
        <DateSliderContainer ref={dateBtnWrapperRef}>
          {[...Array(MAX_DATE)].map((_, idx) => {
            const dateInfo = getDateList(idx);
            return (
              <React.Fragment key={idx}>
                {(idx === curDate || dateInfo.date === 1) && (
                  <YearMonth
                    idx={idx}
                    dateInfo={dateInfo}
                    gap={DATEBOX_WIDTH}
                  />
                )}
                <DateBox
                  width={DATEBOX_WIDTH}
                  dateInfo={dateInfo}
                  disabled={idx > DATE_VISIBLE}
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
          onClick={() => {
            handleArrowBtn('right');
          }}
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
const MAKE_LAST_DATE = 20;
const DATE_VISIBLE = 6;
