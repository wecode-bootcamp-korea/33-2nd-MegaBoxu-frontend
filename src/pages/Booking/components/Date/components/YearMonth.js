import styled from 'styled-components/macro';

const YearMonth = ({ dateInfo, idx, gap }) => {
  const { year, month } = dateInfo;
  return (
    <StyledYearArea idx={idx} gap={gap}>
      {year}. {month}
    </StyledYearArea>
  );
};

const StyledYearArea = styled.div`
  position: absolute;
  text-align: center;
  top: -0.6rem;
  left: ${({ idx, gap }) => (idx * gap) / 16}rem;
  background-color: white;
  border-radius: 1rem;
  border: ${({ theme }) => theme.borders.gray};
  width: 4.5rem;
  padding: 0.15rem 0;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.gray};
  z-index: 1;
`;
export default YearMonth;
