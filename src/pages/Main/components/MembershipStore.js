import React from 'react';

import Membership from './Membership';
import MegaboxuOpen from './MegaboxuOpen';

import styled from 'styled-components';

const MembershipStore = () => {
  return (
    <MembershipStoreWrapper>
      <Membership />
      <MegaboxuOpen />
    </MembershipStoreWrapper>
  );
};

const MembershipStoreWrapper = styled.div`
  height: 39.781rem;
  padding: 0 0 6.25rem 0;
  background-color: ${props => props.theme.colors.purple};
`;

export default MembershipStore;
