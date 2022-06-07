import styled from 'styled-components';
import BookingBox from './components/BookingBox';

const Booking = () => {
  return (
    <Container>
      <Title>빠른예매</Title>
      <BookingBox />
    </Container>
  );
};

export default Booking;

const Container = styled.main`
  width: 80rem;
  margin: auto;
  margin-top: 10rem;
`;

const Title = styled.h2`
  margin: 3rem 0;
  font-size: 2rem;
  color: #222222;
`;
