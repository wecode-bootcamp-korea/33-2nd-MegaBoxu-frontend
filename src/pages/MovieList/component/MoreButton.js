import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import styled from 'styled-components';

const MoreButton = ({ seeMore }) => {
  return (
    <MoreBtnWrapper>
      <MoreBtn
        onClick={() => {
          seeMore();
        }}
      >
        더보기 <IoIosArrowDown className="arrow" />
      </MoreBtn>
    </MoreBtnWrapper>
  );
};

const MoreBtnWrapper = styled.div`
  width: 100%;
  height: 80px;
`;

const MoreBtn = styled.button`
  width: 100%;
  height: 40px;
  border: 1px solid #eaeaea;
  background-color: transparent;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    border: 1px solid black;
  }

  .arrow {
    font-size: 13px;
  }
`;

export default MoreButton;
