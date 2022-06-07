import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ClickList from './ClickList';
import MoreButton from './MoreButton';

const InfoPage = ({ movieInfo }) => {
  const [showMore, setShowMore] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    setText(movieInfo.description);
  });

  return (
    <InfoPageContainer>
      {text && (
        <InfoDetailPage>
          <ClickListContainer>
            {Cilck_List_Data.map(info => {
              return <ClickList key={info.id} listName={info.listName} />;
            })}
          </ClickListContainer>
          <MovieSummary>
            <SummaryText>
              <p className="title">{movieInfo.description_title}</p>
              <p className="content">
                {showMore ? text : `${text.substring(0, 30)}`}
              </p>
            </SummaryText>
            <MoreBtn>
              <MoreButton
                movieInfo={movieInfo}
                onClick={() => setShowMore(!showMore)}
              />
            </MoreBtn>
          </MovieSummary>
          <MovieGraphContainer>그래프 들어올 자리.</MovieGraphContainer>
        </InfoDetailPage>
      )}
    </InfoPageContainer>
  );
};

const InfoPageContainer = styled.div`
  width: 100%;
  height: auto;
`;

const InfoDetailPage = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto;
`;

const ClickListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 6.25rem;
`;

const MovieSummary = styled.div``;

const SummaryText = styled.div`
  width: 100%;
  height: 6.25rem;

  .title {
    font-size: ${props => props.theme.fontSizes.titleSize};
  }
  .content {
    margin-top: 0.9rem;
    margin-bottom: 0.9rem;
    font-size: ${props => props.theme.fontSizes.small};
    color: rgba(68, 68, 68);
  }
`;

const MoreBtn = styled.div`
  margin-top: 0.9rem;
  margin-bottom: 0.45rem;
  border-bottom: 1px solid black;
  opacity: 0.7;
  text-align: center;

  &:hover {
    font-weight: bold;
  }
`;

const MovieGraphContainer = styled.div`
  width: 100%;
  height: 20rem;
  border: 1px solid rgba(68, 68, 68, 0.7);
`;

const Cilck_List_Data = [
  { id: 1, listName: '주요정보' },
  { id: 2, listName: '실관람평' },
  { id: 3, listName: '예고편/스틸컷' },
];

export default InfoPage;
