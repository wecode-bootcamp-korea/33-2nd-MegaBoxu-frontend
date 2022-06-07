import { React, useState } from 'react';
import styled from 'styled-components';
import ClickList from './ClickList';
import MoreButton from './MoreButton';
import GraphCard from './GraphCard';
import GraphView from './GraphView';
import ChartBar from './ChartBar';
import RatingCircle from './RatingCircle';

const InfoPage = ({ movieInfo }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <InfoPageContainer>
      <InfoDetailPage id="mainInfo">
        <ClickListContainer>
          {CLICK_LIST_DATA.map(info => {
            return (
              <ClickList
                key={info.id}
                listName={info.listName}
                scrollId={info.scrollId}
              />
            );
          })}
        </ClickListContainer>
        <MovieSummary>
          <SummaryText>
            <SummaryTitle>{movieInfo.description_title}</SummaryTitle>
            <SummaryContent>
              {showMore
                ? movieInfo.description
                : `${movieInfo.description.substring(0, 50)}...`}
            </SummaryContent>
          </SummaryText>
          <MoreBtn onClick={() => setShowMore(!showMore)}>
            <MoreButton movieInfo={movieInfo} showMore={showMore} />
          </MoreBtn>
        </MovieSummary>
        <MovieGraphContainer>
          <GraphCard
            listName="실관람 평점"
            nameBottom={Math.round(movieInfo.average_rating * 100) / 100}
          >
            <RatingCircle
              rating={Math.round(movieInfo.average_rating * 100) / 100}
            />
          </GraphCard>
          <GraphCard listName="예매율" nameBottom={movieInfo.reservation_rate}>
            <ChartBar data={CHART_BAR_DATA} />
          </GraphCard>
          <GraphCard
            listName="누적관객수"
            nameBottom={movieInfo.total_viewer
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          >
            <GraphView data={movieInfo.daily_viewers.reverse()} />
          </GraphCard>
        </MovieGraphContainer>
      </InfoDetailPage>
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
  height: auto;
`;

const SummaryTitle = styled.p`
  font-size: ${props => props.theme.fontSizes.titleSize};
`;

const SummaryContent = styled.p`
  margin-top: 0.9rem;
  margin-bottom: 0.9rem;
  font-size: ${props => props.theme.fontSizes.lg};
  color: rgba(68, 68, 68);
`;

const MoreBtn = styled.div`
  margin-top: 0.9rem;
  margin-bottom: 0.45rem;
  border-bottom: 2px solid rgb(234, 234, 234);
  opacity: 0.7;
  text-align: center;

  &:hover {
    border-bottom: 1px solid black;
  }
`;

const MovieGraphContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  height: 20rem;
  border: 1px solid rgb(234, 234, 234);
`;

const CLICK_LIST_DATA = [
  { id: 1, listName: '주요정보', scrollId: 'mainInfo' },
  { id: 2, listName: '실관람평', scrollId: 'review' },
  { id: 3, listName: '예고편/스틸컷', scrollId: 'trailer' },
];

const CHART_BAR_DATA = [
  { name: '10대', preference: 10 },
  { name: '20대', preference: 70 },
  { name: '30대', preference: 90 },
  { name: '40대', preference: 40 },
  { name: '50대', preference: 10 },
];

export default InfoPage;
