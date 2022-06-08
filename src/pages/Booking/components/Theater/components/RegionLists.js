import React from 'react';
import styled from 'styled-components';

const RegionLists = ({ handleSelectRegion, group, regionSelect }) => {
  return (
    <RegionContents
      regionSelect={regionSelect}
      onClick={() => {
        handleSelectRegion(group.region);
      }}
    >
      {group.region}({group.theater.length})
    </RegionContents>
  );
};

export default RegionLists;

const RegionContents = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  background-color: ${({ regionSelect }) =>
    regionSelect ? '#ebebeb' : 'transparent'};
`;
