import React from 'react';

import { IoDiamondOutline } from 'react-icons/io5';
import { AiOutlineUser, AiOutlineCreditCard } from 'react-icons/ai';
import { GoGift } from 'react-icons/go';
import { GiPopcorn } from 'react-icons/gi';

import styled from 'styled-components';

const Membership = () => {
  return (
    <MembershipWrapper>
      <CustomerQuestion>
        <CustomerQuestionList>
          <IoDiamondOutline size={iconSize} color={iconColor} />
          <br /> VIP LOUNGE
        </CustomerQuestionList>
        <CustomerQuestionList>
          <AiOutlineUser size={iconSize} color={iconColor} />
          <br />
          멤버십
        </CustomerQuestionList>
        <CustomerQuestionList>
          <AiOutlineCreditCard size={iconSize} color={iconColor} />
          <br />
          할인카드안내
        </CustomerQuestionList>
        <CustomerQuestionList>
          <GoGift size={iconSize} color={iconColor} />
          <br />
          이벤트
        </CustomerQuestionList>
        <CustomerQuestionList>
          <GiPopcorn size={iconSize} color={iconColor} />
          <br />
          스토어
        </CustomerQuestionList>
      </CustomerQuestion>
    </MembershipWrapper>
  );
};

const iconSize = '60';
const iconColor = 'white';

const MembershipWrapper = styled.div`
  width: 68.75rem;
  margin: 0 auto;
  padding: 3.125rem 0;
  color: ${props => props.theme.colors.white};
  border-bottom: ${props => props.theme.borders.gray};
`;

const CustomerQuestion = styled.ul`
  ${props => props.theme.flex.flexBox()}
`;

const CustomerQuestionList = styled.li`
  ${props => props.theme.flex.flexBox('column')}
  flex-grow: 0.2;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default Membership;
