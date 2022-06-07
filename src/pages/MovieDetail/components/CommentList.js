import React from 'react';
import styled from 'styled-components';
import { SiMega } from 'react-icons/si';
import { TbPencil } from 'react-icons/tb';

const CommentList = () => {
  return (
    <CommentListContainer>
      <CommnetListPage>
        <CommentHeader>
          <p className="header">
            범죄도시 2에 대한 <span className="headerNum">25,552</span>개의
            이야기가 있어요!
          </p>
        </CommentHeader>
        <CommentExam>
          <SiMega className="MIcon" />
          <ExamBox>
            <p className="examText">
              <span className="movieTitle">범죄도시 2</span> 재미있게 보셨나요?
              영화의 어떤 점이 좋았는지 이야기해주세요.
            </p>
            <button className="commentBtn">
              <TbPencil className="commentIcon" />
              관람평 쓰기
            </button>
          </ExamBox>
        </CommentExam>
        <UploadCommentContainer>댓글 들어올 자리</UploadCommentContainer>
      </CommnetListPage>
    </CommentListContainer>
  );
};

const CommentListContainer = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto;
`;

const CommnetListPage = styled.div`
  width: 100%;
`;

const CommentHeader = styled.div`
  width: 100%;
  height: 4rem;
  padding-top: 1.5rem;
  font-size: ${props => props.theme.fontSizes.xxl};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.purple};
  .headerNum {
    color: ${props => props.theme.colors.mint};
  }
`;

const CommentExam = styled.div`
  display: flex;
  .MIcon {
    color: rgb(82, 52, 153);
    font-size: 3rem;
  }
`;

const ExamBox = styled.div`
  ${props => props.theme.flex.flexBox('_', 'center', 'space-between')}
  width: 100%;
  height: 3rem;
  margin-left: 1rem;
  border: 1px solid rgb(234, 234, 234);
  .examText {
    width: 80%;
    color: #b1b1b1;
  }
  .movieTitle {
    margin-left: 3%;
    font-size: ${props => props.theme.fontSizes.base};
    color: ${props => props.theme.colors.mint};
  }
  .commentIcon {
    font-size: ${props => props.theme.fontSizes.base};
  }
  .commentBtn {
    margin-right: 3%;
    background-color: transparent;
    border-style: none;
    cursor: pointer;
  }
`;
const UploadCommentContainer = styled.ul`
  ${props => props.theme.flex.flexBox('column', '_', '_')}
  margin-top: 2rem;
  width: 100%;
  height: 30rem;
  border: 1px solid black;
`;

export default CommentList;
