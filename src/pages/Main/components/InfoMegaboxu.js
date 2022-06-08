import React from 'react';

import { GiTheater } from 'react-icons/gi';
import { FaBoxOpen } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import { RiQuestionnaireLine } from 'react-icons/ri';
import { BiUserPin } from 'react-icons/bi';
import { BsHeadset } from 'react-icons/bs';

import styled from 'styled-components';

const InfoMegaboxu = () => {
  return (
    <InfoMegaboxuWrapper>
      <InfoPhrase>메가박수 안내</InfoPhrase>
      <ForCustomer>
        <ForCustomerListWrapper>
          <ForCustomerList>
            <BsHeadset size="46" color="#027b94" />
            <ListPhrase>고객센터</ListPhrase>
          </ForCustomerList>
          <ForCustomerList>
            <RiQuestionnaireLine size="46" color="#027b94" />
            <ListPhrase>자주 묻는 질문</ListPhrase>
          </ForCustomerList>
          <ForCustomerList>
            <BiUserPin size="46" color="#027b94" />
            <ListPhrase>1:1 문의</ListPhrase>
          </ForCustomerList>
          <ForCustomerList>
            <IoIosPeople size="46" color="#027b94" />
            <ListPhrase>단체/대관문의</ListPhrase>
          </ForCustomerList>
          <ForCustomerList>
            <FaBoxOpen size="46" color="#027b94" />
            <ListPhrase>분실물 문의/접수</ListPhrase>
          </ForCustomerList>
          <ForCustomerList>
            <GiTheater size="46" color="#027b94" />
            <ListPhrase>더 부티크 프라이빗 대관예매</ListPhrase>
          </ForCustomerList>
        </ForCustomerListWrapper>
      </ForCustomer>
    </InfoMegaboxuWrapper>
  );
};

const InfoMegaboxuWrapper = styled.div`
  width: 68.75rem;
  padding: 0 0 3.125rem 0;
  margin: 0 auto;
`;

const InfoPhrase = styled.h2`
  padding: 3.125rem 0 2.5rem 0;
  color: ${props => props.theme.colors.purple};
  border-bottom: ${props => props.theme.borders.gray};
  font-size: 1.8666rem;
`;

const ForCustomer = styled.div`
  padding: 3.125rem 0;
`;

const ForCustomerListWrapper = styled.ul`
  ${props => props.theme.flex.flexBox()};
`;

const ForCustomerList = styled.li`
  ${props => props.theme.flex.flexBox('column')};
  width: 11.516rem;
  height: 5.656rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const ListPhrase = styled.span`
  padding: 0.625rem 0 0 0;
`;

export default InfoMegaboxu;
