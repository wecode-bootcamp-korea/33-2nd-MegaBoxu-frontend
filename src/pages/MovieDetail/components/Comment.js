import React from 'react';
import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';
import { FiDelete } from 'react-icons/fi';

const Comment = ({ commentValue, deleteComment }) => {
  return (
    <CommentContainer>
      <ProfileImg>
        <CgProfile className="profileImg" />
      </ProfileImg>
      <ContentsBox>
        <Review>관람평</Review>
        <RatingNum>{Math.floor(commentValue.rating)}</RatingNum>
        <CommentText>{commentValue.content}</CommentText>
        <ReviewImg src={commentValue.image_url} alt="img" />
        <DeleteIcon onClick={deleteComment}>
          <FiDelete />
        </DeleteIcon>
      </ContentsBox>
    </CommentContainer>
  );
};

const CommentContainer = styled.div`
  ${props => props.theme.flex.flexBox('_', '_', '_')};
  margin-bottom: 1rem;
  width: 100%;
  height: 6rem;
`;
const ProfileImg = styled.div`
  ${props => props.theme.flex.flexBox('_', 'center', 'center')};
  width: 10%;
  height: 100%;
  border-radius: 50%;
  .profileImg {
    width: 70%;
    height: 70%;
    border-radius: 50%;
    color: rgb(177, 177, 177);
  }
`;
const ContentsBox = styled.div`
  ${props => props.theme.flex.flexBox('_', 'center', 'space-around')};
  width: 90%;
  height: 100%;
  background-color: rgb(234, 234, 234);
  border-radius: 3px;
`;
const Review = styled.p`
  color: #503296;
`;
const RatingNum = styled.div`
  font-size: ${props => props.theme.fontSizes.titleSize};
  color: #503296;
`;
const CommentText = styled.p`
  width: 60%;
  height: 50%;
  border-left: 1px solid rgb(177, 177, 177);
  padding-top: 1rem;
  padding-left: 1rem;
  color: rgb(102, 102, 102);
`;
const ReviewImg = styled.img`
  width: 10%;
  height: 70%;
  border-radius: 3px;
`;
const DeleteIcon = styled.button`
  font-size: ${props => props.theme.fontSizes.xl};
  color: gray;
  border-style: none;
  background: transparent;
  cursor: pointer;
`;
export default Comment;
