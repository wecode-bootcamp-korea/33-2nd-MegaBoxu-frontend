import styled from 'styled-components';
import BookingBox from './components/BookingBox';

export default function Booking() {
  return (
    <StyledBooking>
      <H2>빠른예매</H2>
      <BookingBox />
    </StyledBooking>
  );
}

const StyledBooking = styled.main`
  width: 80rem;
  margin: auto;
`;

const H2 = styled.h2`
  margin: 3rem 0;
  font-size: 2rem;
  color: #222222;
`;
