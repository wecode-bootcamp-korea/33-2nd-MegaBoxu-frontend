import styled, { css } from 'styled-components';

const DateBox = ({ id, width, dateInfo, disabled, isSelected }) => {
  const { date, day } = dateInfo;

  return (
    <StyledDateBtn
      id={id}
      day={day}
      width={width}
      disabled={disabled}
      isSelected={isSelected}
    >
      {`${date}﹒${day}`}
    </StyledDateBtn>
  );
};

export default DateBox;

const selectColor = css`
  color: ${({ day }) => {
    if (day === '토') return 'blue';
    else if (day === '일') return 'red';
    else return 'black';
  }};
`;

const setDisabledStyle = css`
  ${({ disabled }) => {
    if (disabled) {
      return css`
        opacity: 0.4;
      `;
    } else {
      return css`
        cursor: pointer;
        opacity: 1;

        &:hover {
          border-bottom: 2px solid ${({ theme }) => theme.colors.purple};
        }
      `;
    }
  }}
`;

const StyledDateBtn = styled.button`
  position: relative;
  min-width: 4.375rem;
  height: 2.5rem;
  padding: 0.1rem 0.5rem;
  border: none;
  font-size: 1rem;
  background-color: ${({ isSelected }) =>
    isSelected ? '#f4f4f4' : 'transparent'};
  ${selectColor};
  ${setDisabledStyle};
`;
