import { React, useRef } from 'react';
import styled from 'styled-components';
import { AiOutlineClose, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';

const Modal = ({
  closeModal,
  movieInfo,
  STAR_ARRAY,
  clickedStar,
  starRating,
  rating,
  saveImage,
  deleteImage,
  isLoading,
  image,
  setCommentValue,
  sendCommentToServer,
}) => {
  console.log(image.preview_URL);
  const imgInput = useRef();
  const onClickImgUpload = e => {
    e.preventDefault();
    imgInput.current.click();
  };

  return (
    <ModalBackground onClick={closeModal}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <HeaderTxt>관람평 작성하기</HeaderTxt>
          <DeleteIconButton onClick={closeModal}>
            <AiOutlineClose />
          </DeleteIconButton>
        </ModalHeader>
        <ModalTitle>
          "{movieInfo.title}" <p>영화 어떠셨나요?</p>
        </ModalTitle>
        <WriteCommentContainer>
          <RatingContainer>
            <RatingStar>
              {STAR_ARRAY.map((el, idx) => {
                return (
                  <FaStar
                    key={idx}
                    size="40"
                    onClick={() => {
                      starRating(el);
                    }}
                    className={clickedStar[el] && 'fillStar'}
                  />
                );
              })}
            </RatingStar>
            <RatingNum>{rating}</RatingNum>
          </RatingContainer>
          <WritingContainer>
            <Writing
              placeholder="실관람평을 남겨주세요."
              cols="50"
              rows="4"
              onChange={e =>
                setCommentValue(prev => {
                  return { ...prev, content: e.target.value };
                })
              }
            />
            <UploadImgContainer>
              <ImageContainer>
                {isLoading === false || isLoading === true ? (
                  <img
                    className="imageBox"
                    alt="preview"
                    src={image.preview_URL}
                  />
                ) : (
                  <AiOutlineLoading3Quarters className="loadingImage" />
                )}
              </ImageContainer>
              <ImgUploader
                type="file"
                accept="image/*"
                ref={imgInput}
                onChange={saveImage}
              />
              <ButtonTag onClick={onClickImgUpload}>사진 등록</ButtonTag>
              <ButtonTag onClick={deleteImage}>삭제</ButtonTag>
            </UploadImgContainer>
          </WritingContainer>
        </WriteCommentContainer>
        <BtnContainer>
          <CancelBtn onClick={closeModal}>취소</CancelBtn>
          <SubmitBtn
            onClick={() => {
              sendCommentToServer();
              // postComment();
              closeModal();
            }}
          >
            등록
          </SubmitBtn>
        </BtnContainer>
      </ModalContainer>
    </ModalBackground>
  );
};

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(68, 68, 68, 0.9);
  z-index: 5;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 35rem;
  height: 80%;
  max-height: 80%;
  background-color: #fff;
`;

const ModalHeader = styled.div`
  ${props => props.theme.flex.flexBox('_', 'center', 'space-between')};
  width: 100%;
  height: 3rem;
  background-color: #6542b1;
  border: 2px solid #6542b1;
`;

const HeaderTxt = styled.p`
  margin-left: 1rem;
  color: ${props => props.theme.colors.white};
`;

const DeleteIconButton = styled.button`
  margin-right: 1rem;
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.white};
  border-style: none;
  background: transparent;
  cursor: pointer;
`;

const ModalTitle = styled.div`
  margin-top: 1.5rem;
  font-size: ${props => props.theme.fontSizes.xxl};
  text-align: center;
`;

const WriteCommentContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  height: 55%;
  background-color: rgb(234, 234, 234);
  border-radius: 10px;
`;

const RatingContainer = styled.div`
  ${props => props.theme.flex.flexBox('_', 'center', 'center')};
  padding-top: 2rem;
`;

const RatingStar = styled.div`
  font-size: ${props => props.theme.colors.xxl};
  border-style: none;
  & svg {
    cursor: pointer;
  }

  :hover svg {
    color: ${props => props.theme.colors.mint};
  }

  & svg:hover ~ svg {
    color: black;
  }

  .fillStar {
    color: ${props => props.theme.colors.mint};
  }
`;

const RatingNum = styled.p`
  margin-left: 1rem;
  padding-left: 1rem;
  border-left: 1px solid gray;
  font-size: ${props => props.theme.fontSizes.xxl};
  color: ${props => props.theme.colors.purple};
`;

const WritingContainer = styled.div`
  ${props => props.theme.flex.flexBox('_', 'center', 'space-around')};
  width: 100%;
  height: 80%;
`;

const Writing = styled.textarea`
  width: 70%;
  height: 50%;
  resize: none;
`;

const UploadImgContainer = styled.form`
  ${props => props.theme.flex.flexBox('column', 'center', 'center')}
`;

const ImgUploader = styled.input`
  display: none;
  width: 10rem;
  height: 5rem;
`;

const ImageContainer = styled.div`
  width: 5rem;
  height: 5rem;
  .imageBox {
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }
`;

const ButtonTag = styled.button`
  margin-top: 0.1rem;
  width: 5rem;
  font-size: ${props => props.theme.fontSizes.xs};
  cursor: pointer;
`;

const BtnContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 30%;
`;

const CancelBtn = styled.button`
  margin-right: 0.5rem;
  width: 4rem;
  height: 2rem;
  border-radius: 3px;
  border: 1px solid #6542b1;
  background-color: transparent;
  font-size: ${props => props.theme.fontSizes.base};
  color: #6542b1;
  cursor: pointer;
`;

const SubmitBtn = styled.button`
  width: 4rem;
  height: 2rem;
  border-radius: 3px;
  border: 1px solid #6542b1;
  background-color: ${props => props.theme.colors.purple};
  font-size: ${props => props.theme.fontSizes.base};
  color: ${props => props.theme.colors.white};
  cursor: pointer;
`;

export default Modal;
