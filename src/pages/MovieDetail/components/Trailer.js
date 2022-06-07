import React from 'react';
import styled from 'styled-components';

const Trailer = () => {
  return (
    <TrailerContainer>
      <TrailerHeader>론칭 예고편</TrailerHeader>
      <VideoPage>
        <Video src="images/07d98d2932a31dee8345f5eaec4c8eb5_W.mp4" controls />
      </VideoPage>
    </TrailerContainer>
  );
};

const TrailerContainer = styled.div`
  margin: 1rem auto;
  width: 80%;
  height: auto;
`;

const TrailerHeader = styled.div`
  ${props => props.theme.flex.flexBox('_', 'center', '_')}
  width: 100%;
  height: 3rem;
  border-bottom: 1px solid rgb(234, 234, 234);
  font-size: ${props => props.theme.fontSizes.xxl};
`;

const VideoPage = styled.div`
  ${props => props.theme.flex.flexBox('_', 'center', 'center')}
  width: 100%;
  height: 30rem;
`;

const Video = styled.video`
  width: 80%;
  height: 80%;
`;

export default Trailer;
