import { React, useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Modal from './Modal';
import Comment from './Comment';
import { SiMega } from 'react-icons/si';
import { TbPencil } from 'react-icons/tb';
import { BASE_URL } from '../../../config';

const CommentList = ({ movieInfo, params }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [clickedStar, setClickedStar] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const [image, setImage] = useState({
    image_file: '',
    preview_URL: '/images/default.png',
  });

  const [isLoading, setIsLoading] = useState(false);

  const DEFAULLT_COMMENT_VALUE = {
    content: '',
    image_url: image.preview_URL,
    rating: 0,
  };

  console.log(image.preview_URL);

  const [commentValue, setCommentValue] = useState(DEFAULLT_COMMENT_VALUE);
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    getCommentList();
  }, []);

  const getCommentList = () => {
    fetch(`${BASE_URL}review/${params.id}`)
      .then(res => res.json())
      .then(data => setCommentList(data.review.reverse()));
  };

  const fileReader = new FileReader();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setImage({ image_file: '', preview_URL: 'images/default.png' });
    setClickedStar([false, false, false, false, false]);
  };

  const starRating = index => {
    let clickStates = [...clickedStar];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index;
    }
    setClickedStar(clickStates);
  };
  const rating = clickedStar.filter(Boolean).length * 2;

  const saveImage = e => {
    e.preventDefault();
    if (e.target.files[0]) {
      setIsLoading(true);
      fileReader.readAsDataURL(e.target.files[0]);
    }
    fileReader.onload = () => {
      setImage({
        image_file: e.target.files[0],
        preview_URL: fileReader.result,
      });
      setCommentValue(prev => {
        return { ...prev, image_url: e.target.files[0] };
      });
      setIsLoading(true);
    };
  };

  const deleteImage = () => {
    setImage({
      image_file: '',
      preview_URL: 'images/default.png',
    });
    setIsLoading(false);
  };

  const sendCommentToServer = async () => {
    const formData = new FormData();
    formData.append('movie_id', movieInfo.movie_id);
    formData.append('content', commentValue.content);
    formData.append('rating', commentValue.rating);
    formData.append('image_url', image.image_file);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    await axios
      .post(`${BASE_URL}review/${params.id}`, formData, config)
      .then(res => {
        if (res.status === 201) {
          setCommentValue(DEFAULLT_COMMENT_VALUE);
          getCommentList();
        }
      })
      .catch(error => {
        alert(`에러가 발생했습니다. (${error})`);
      });
    setIsLoading(false);
  };

  const deleteComment = id => {
    fetch(`${BASE_URL}/review/${params.id}/`, {
      method: 'DELETE',
    }).then(res => {
      if (res.status === 204) {
        alert('삭제가 완료되었습니다.');
        getCommentList();
      }
    });
  };
  useEffect(() => {
    setCommentValue(prev => {
      return { ...prev, rating: clickedStar.filter(Boolean).length * 2 };
    });
  }, [rating]);

  return (
    <CommentListContainer>
      <CommnetListPage>
        <CommentHeader id="review">
          <Header>
            {movieInfo.title}에 대한
            <HeaderNum>{movieInfo.review_cnt}</HeaderNum>개의 이야기가 있어요!
          </Header>
        </CommentHeader>
        <CommentExam>
          <SiMega className="MIcon" />
          <ExamBox>
            <ExamText className="examText">
              <MovieTitle className="movieTitle">{movieInfo.title}</MovieTitle>
              재미있게 보셨나요? 영화의 어떤 점이 좋았는지 이야기해주세요.
            </ExamText>
            <CommentBtn
              onClick={openModal}
              // onClick={
              //   localStorage.getItem('token')
              //     ? openModal
              //     : () => alert('로그인 후 관람평을 남기실 수 있습니다.')
              // }
            >
              <TbPencil className="commentIcon" />
              관람평 쓰기
            </CommentBtn>
            {isModalOpen && (
              <Modal
                closeModal={closeModal}
                movieInfo={movieInfo}
                STAR_ARRAY={STAR_ARRAY}
                clickedStar={clickedStar}
                starRating={starRating}
                rating={rating}
                saveImage={saveImage}
                deleteImage={deleteImage}
                isLoading={isLoading}
                image={image}
                setCommentValue={setCommentValue}
                sendCommentToServer={sendCommentToServer}
              />
            )}
          </ExamBox>
        </CommentExam>
        <UploadCommentContainer>
          {commentList.map(commentValue => {
            return (
              <Comment
                key={commentValue.id}
                commentValue={commentValue}
                deleteComment={() => deleteComment(commentValue.id)}
                fileReader={fileReader}
                image={image}
              />
            );
          })}
        </UploadCommentContainer>
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
`;
const Header = styled.p``;

const HeaderNum = styled.span`
  color: ${props => props.theme.colors.mint};
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
`;

const ExamText = styled.p`
  width: 80%;
  color: #b1b1b1;
`;

const MovieTitle = styled.span`
  margin-left: 3%;
  font-size: ${props => props.theme.fontSizes.base};
  color: ${props => props.theme.colors.mint};
`;

const CommentBtn = styled.button`
  margin-right: 3%;
  background-color: transparent;
  border-style: none;
  font-size: ${props => props.theme.fontSizes.base};
  color: rgb(102, 102, 102);
  cursor: pointer;

  .commentIcon {
    font-size: ${props => props.theme.fontSizes.base};
    color: rgb(102, 102, 102);
  }
`;

const UploadCommentContainer = styled.ul`
  ${props => props.theme.flex.flexBox('column', '_', '_')}
  margin-top: 2rem;
  width: 100%;
  height: auto;
`;

const STAR_ARRAY = [0, 1, 2, 3, 4];

export default CommentList;
