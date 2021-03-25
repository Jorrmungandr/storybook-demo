import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ backgroundColor, color }) => css`
    border: 0;
    background-color: ${backgroundColor};
    margin: 0;
    padding: 10px 20px;
    outline: none;
    color: ${color};
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;

    ${({ outline }) => outline && css`
      background-color: transparent;
      color: ${backgroundColor};
      border: 2px solid ${backgroundColor};
    `}
  `}
`;