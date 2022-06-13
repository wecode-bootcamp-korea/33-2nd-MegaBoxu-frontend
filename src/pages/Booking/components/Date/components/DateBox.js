/* eslint-disable no-unused-expressions */
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

// const setDisabledStyle = css`
//   ${({ disabled }) => {
//     if (disabled) {
//       return css`
//         opacity: 0.4;
//       `;
//     } else {
//       return css`
//         cursor: pointer;
//         opacity: 1;

//         &:hover {
//           border-bottom: 2px solid ${({ theme }) => theme.colors.purple};
//         }
//       `;
//     }
//   }}
// `;

const StyledDateBtn = styled.button`
  position: relative;
  min-width: 4.375rem;
  height: 2.5rem;
  padding: 0.1rem 0.5rem;
  border: none;
  font-size: 1rem;
  border-bottom: 2px solid transparent;
  background-color: ${({ isSelected }) =>
    isSelected ? '#f4f4f4' : 'transparent'};
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  color: ${({ day }) => {
    if (day === '토') return 'blue';
    else if (day === '일') return 'red';
    else return 'black';
  }};

  &:hover {
    border-bottom: ${({ disabled }) =>
      disabled ? '2px solid transparent' : '2px solid #342461'};
  }
`;
