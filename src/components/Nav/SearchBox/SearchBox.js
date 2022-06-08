import React, { useState, useEffect, Fragment } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MovieChart from '../MovieChart/MovieChart.js';
import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';

const SearchBox = ({ setSearchActive }) => {
  const [listValue, setListValue] = useState([]);
  const [posterValue, setPosterValue] = useState(1);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch(`http://10.58.1.169:8000/movie`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        setListValue(result.result);
      });
    //result.result <- 객체 안의 배열로 들어가는 어쩌구
  }, [location.search]);

  const searchBtn = e => {
    e.preventDefault();
    const string = `/movie?search=${e.target.search.value}`;
    navigate(string);
    e.target.search.value = '';
    setSearchActive(false);
  };

  const hoverPoster = movie_id => {
    setPosterValue(movie_id);
  };

  return (
    <SearchBoxWrapper>
      <SearchContainer>
        <SearchMovieDiv>
          <SearchMoviePoster>
            {listValue.map(
              id =>
                id.movie_id === posterValue && (
                  <img src={id.poster_url} key={id.id} alt="포스터" />
                )
            )}
          </SearchMoviePoster>
          <SearchMovieTitle>
            {listValue.slice(0, 5).map((movieTitle, index) => (
              <Fragment key={index}>
                <MovieChart
                  movieTitle={movieTitle}
                  rank={index}
                  hoverPoster={hoverPoster}
                />
              </Fragment>
            ))}
          </SearchMovieTitle>
        </SearchMovieDiv>
        <SearchDiv>
          <SearchInput>
            <SearchBoxDiv>
              <Form onSubmit={searchBtn}>
                <MovieSearch
                  type="text"
                  placeholder="영화를 검색하세요"
                  name="search"
                />
                <SearchButton>
                  <SearchBtn>
                    <BiSearch />
                  </SearchBtn>
                </SearchButton>
              </Form>
            </SearchBoxDiv>
          </SearchInput>
        </SearchDiv>
      </SearchContainer>
    </SearchBoxWrapper>
  );
};

const SearchBoxWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 380px;
  top: 91px;
  background-color: #351f67;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const SearchContainer = styled.div`
  width: 1100px;
  height: 215px;
  display: flex;
`;

const SearchMovieDiv = styled.div`
  display: flex;
`;

const SearchMoviePoster = styled.div`
  img {
    width: 150px;
    height: 214px;
  }
`;

const Form = styled.form``;

const SearchMovieTitle = styled.div`
  width: 450px;
  height: 214px;
`;

const SearchDiv = styled.div`
  width: 510px;
  height: 214px;
`;

const SearchInput = styled.div`
  height: 214px;
  display: flex;
  align-items: center;
  padding: 20px;
`;

const MovieSearch = styled.input`
  width: 360px;
  height: 59px;
  background-color: transparent;
  color: white;
  font-size: 20px;
  border: 0;
  padding-left: 20px;
`;

const SearchBoxDiv = styled.div`
  width: 420px;
  height: 60px;
  border-bottom: 1px solid white;
  display: flex;
`;

const SearchButton = styled.button`
  width: 59px;
  height: 59px;
  background-color: transparent;
  border: 0;
`;

const SearchBtn = styled(BiSearch)`
  color: white;
  font-size: 30px;
  cursor: pointer;
`;

export default SearchBox;

const MOVIE_CHART = [
  {
    movie_id: 0,
    title: '마녀(魔女) Part2. The Other One',
    url: '../../../public/images/IMG_5902.JPG',
  },
  {
    movie_id: 1,
    title: '범죄도시2',
    url: '../../../public/images/IMG_5902.JPG',
  },
  {
    movie_id: 2,
    title: '탑건:매버릭',
    url: '../../../public/images/IMG_5902.JPG',
  },
  {
    movie_id: 3,
    title: '버즈라이트이어',
    url: '../../../public/images/IMG_5902.JPG',
  },
  {
    movie_id: 4,
    title: '브로커',
    url: '../../../public/images/IMG_5902.JPG',
  },
];
