import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MovieFilterBox from './component/MovieFilterBox';
import MovieSearchBox from './component/MovieSearchBox';
import MovieContent from './component/MovieContent';
import MoreButton from './component/MoreButton';
import MovieCategory from './component/MovieCategory';
import { useLocation, useNavigate } from 'react-router-dom';
import { API } from '../../config';

const MovieList = () => {
  const location = useLocation();

  const [listValue, setListValue] = useState([]);
  const [stateValue, setStateValue] = useState({
    filterValue: '',
    searchValue: location.state ? location.state : '',
    offValue: '&offset=0&limit=8',
  });
  const [query, setQuery] = useState(12);
  const navigate = useNavigate();

  console.log(stateValue);

  //데이터 받아오기
  useEffect(() => {
    fetch(`${API.MOVIE}${location.search}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        setListValue(result.result);
      });
  }, [location.search]);

  useEffect(() => {
    const queryString = `?${
      stateValue.filterValue ? `&released=${stateValue.filterValue}` : ''
    }${stateValue.searchValue ? `&search=${stateValue.searchValue}` : ''}${
      stateValue.offValue ? `${stateValue.offValue}` : ''
    }`;
    navigate(queryString);
  }, [stateValue, navigate]);

  //필터 버튼
  const filterBtn = value => {
    setStateValue(prev => {
      return { ...prev, filterValue: value };
    });
    setStateValue(prev => {
      return { ...prev, searchValue: '' };
    });
  };

  //검색
  const searchBtn = e => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    setStateValue(prev => {
      return { ...prev, searchValue: searchValue };
    });
    e.target.search.value = '';
  };

  //더보기
  const seeMore = () => {
    setQuery(query => query + 4);
    const limit = query;
    const queryString = `&offset=0&limit=${limit}`;
    setStateValue(prev => {
      return { ...prev, offValue: queryString };
    });
    setStateValue(prev => {
      return { ...prev, searchValue: '' };
    });
  };

  return (
    <MovieListWrapper>
      {listValue && (
        <Container>
          <MovieListHeader>
            <H2>전체영화</H2>
          </MovieListHeader>
          <CategoryWrapper>
            {MENU_TITLE.map(categoryList => (
              <MovieCategory
                categoryList={categoryList}
                key={categoryList.id}
                filterBtn={filterBtn}
              />
            ))}
          </CategoryWrapper>
          <MovieFilterBoxWrapper>
            <MovieFilterBox listValue={listValue} />
            <MovieSearchBox searchBtn={searchBtn} />
          </MovieFilterBoxWrapper>
          <DisplayDiv>
            {listValue.map(movielist => (
              <MovieContent movielist={movielist} key={movielist.movie_id} />
            ))}
          </DisplayDiv>
          <MoreButton seeMore={seeMore} />
        </Container>
      )}
    </MovieListWrapper>
  );
};

const MovieListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 130px;
`;

const Container = styled.div`
  width: 1100px;
  padding: 40px 0 0 0;

  .btnDiv {
    width: 100%;
    height: 80px;

    .moreBtn {
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
    }
  }
`;

const DisplayDiv = styled.div`
  display: grid;
  /* row-gap: 0rem; */
  column-gap: 3.7rem;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 1100px) {
    .displayDiv {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

const MovieListHeader = styled.div`
  padding: 0 0 26px 0;
`;

const H2 = styled.h2`
  font-size: 30px;
`;

const CategoryWrapper = styled.div`
  width: 100%;
  height: 41px;
  background-color: transparent;
  display: flex;
`;

const MovieFilterBoxWrapper = styled.div`
  width: 100%;
  height: 36px;
  margin-top: 40px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;

  .filterDiv {
    display: flex;

    .filterTextBox {
      margin: 0 0 0 20px;
      line-height: 34px;
      font-size: 15px;

      span {
        font-weight: bold;
      }
    }
  }
`;

export default MovieList;

const MENU_TITLE = [
  { id: 0, name: '박스오피스', value: 'False' },
  { id: 1, name: '개봉작만', value: 'True' },
];
