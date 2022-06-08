import React from 'react';
import styled from 'styled-components';

function BookingTheater() {
  return (
    <BookingContainer>
      <BookingFlexBox>
        <H2>극장</H2>
        <MovieTeater>전체</MovieTeater>
        <TeaterList>
          <RegionLists>
            <p>서울(17)</p>
          </RegionLists>
          <TeaterLists>
            <p>강남</p>
            <p>강남대로</p>
            <p>강동</p>
            <p>군자</p>
          </TeaterLists>
        </TeaterList>
        <TeaterPost>
          <span>
            전체극장
            <br /> 목록에서 극장을 선택하세요.
          </span>
        </TeaterPost>
        <TeaterPosts>
          <Posts>강남</Posts>
          <Posts>강남대로</Posts>
          <Posts>강동</Posts>
        </TeaterPosts>
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

const TeaterList = styled.div`
  height: 20rem;
  margin-top: 1rem;
  display: flex;
`;
const RegionLists = styled.div`
  width: 9.5rem;
  border-right: 1px solid #d8d9db;
  margin-bottom: 0.5rem;
  text-align: center;

  p {
    padding: 0.5rem;
    cursor: pointer;
  }
`;
const TeaterLists = styled.div`
  width: 9.5rem;
  margin: 0 0.5rem 0.5rem 0;

  p {
    padding: 0.5rem;
    cursor: pointer;
  }
`;

const TeaterPost = styled.div`
  border: ${props => props.theme.borders.gray};
  margin: auto;
  padding: 3rem 1rem 1rem 1rem;
  text-align: center;
  height: 8rem;
`;

const TeaterPosts = styled.div`
  border: ${props => props.theme.borders.gray};
  ${props => props.theme.flex.flexBox('row', 'center', 'space-between')}
  margin: auto;
  padding: 0.5rem;
  text-align: center;
  height: 8rem;
`;

const Posts = styled.div`
  background: ${props => props.theme.colors.lightGray};
  border-radius: 10rem;
  width: 5rem;
  margin: 0.5rem 0.5rem 0.5rem 0;
  height: 5rem;
  ${props => props.theme.flex.flexBox('row', 'center', 'center')}
  cursor : pointer;
`;
