import React from 'react';
import styled from 'styled-components';

const RegionLists = ({ handleSelectRegion, region, regionSelect }) => {
  const { region_name, theaters } = region;
  return (
    <RegionContents
      regionSelect={regionSelect}
      onClick={() => {
        handleSelectRegion(region_name);
      }}
    >
      {region_name}({theaters.length})
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
