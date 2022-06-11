import React from 'react';
import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';

const MovieSearchBox = ({ categoryList, searchBtn }) => {
  return (
    <SearchDiv onSubmit={searchBtn}>
      <SearchForm>
        <SearchInput type="text" name="search" placeholder="영화명 검색" />
        <button>
          <BiSearch className="searchBtn" />
        </button>
      </SearchForm>
    </SearchDiv>
  );
};

const SearchDiv = styled.div`
  width: 230px;
  height: 37px;
  border: 1px solid #d8d9db;
  border-radius: 3px;
  display: flex;
  align-items: flex-start;

  /* form {
    .searchInput {
      width: 197px;
      height: 33px;
      padding: 0 10px;
      color: #888888;
      border: 0px;
      font-size: 15px;

      &:focus {
        outline: none;
      }
    }

    button {
      width: 30px;
      height: 34px;
      border: 0px;
      background-color: transparent;
      cursor: pointer;

      .searchBtn {
        font-size: 16px;
        color: #939393;
      }
    }
  } */
`;

const SearchForm = styled.form`
  button {
    width: 30px;
    height: 34px;
    border: 0px;
    background-color: transparent;
    cursor: pointer;

    .searchBtn {
      font-size: 16px;
      color: #939393;
    }
  }
`;

const SearchInput = styled.input`
  width: 197px;
  height: 33px;
  padding: 0 10px;
  color: #888888;
  border: 0px;
  font-size: 15px;

  &:focus {
    outline: none;
  }
`;

export default MovieSearchBox;
