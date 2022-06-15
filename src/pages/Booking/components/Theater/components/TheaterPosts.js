import React from 'react';
import styled, { css } from 'styled-components';

function TheaterPosts({ selectedTheater, theater }) {
  return (
    <>
      <TheaterPostNone disabled={selectedTheater.length === 0}>
        <span>
          전체극장
          <br /> 목록에서 극장을 선택하세요.
        </span>
      </TheaterPostNone>
      <TheaterPostsPlus disabled={selectedTheater.length !== 0}>
        {theater &&
          theater.map(post => {
            return post.theaters.map(
              posts =>
                selectedTheater.includes(posts.id) && (
                  <Posts key={posts.id}>{posts.name}</Posts>
                )
            );
          })}
      </TheaterPostsPlus>
    </>
  );
}

export default TheaterPosts;

const TheaterPostNone = styled.div`
  ${({ disabled }) => {
    if (disabled) {
      return css`
        border: ${props => props.theme.borders.gray};
        margin: auto;
        padding: 3rem 1rem 1rem 1rem;
        text-align: center;
        height: 8rem;
      `;
    } else {
      return css`
        display: none;
      `;
    }
  }};
`;

const TheaterPostsPlus = styled.div`
  ${({ disabled }) => {
    if (disabled) {
      return css`
        border: ${props => props.theme.borders.gray};
        ${props => props.theme.flex.flexBox('row', 'center', '_')}
        margin: auto;
        padding: 0.5rem;
        text-align: center;
        height: 8rem;
      `;
    } else {
      return css`
        display: none;
      `;
    }
  }};
`;

const Posts = styled.div`
  background: ${props => props.theme.colors.lightGray};
  border-radius: 10rem;
  margin: 0 0.5rem;
  width: 5rem;
  height: 5rem;
  ${props => props.theme.flex.flexBox('row', 'center', 'center')}
  cursor : pointer;
`;
