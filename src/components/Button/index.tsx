import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors, fonts } from 'constants/theme';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  themeColor?: string;
  isFill?: boolean;
  outline?: boolean;
  underLine?: boolean;
  full?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Wrap disabled={props.isLoading} {...props}>
      {!props.isLoading && children}
      {/* {!!props.isLoading && <ProgressBar size="5em" theme="disabled" />} */}
    </Wrap>
  );
};

export default Button;

Button.defaultProps = {
  isLoading: false,
  themeColor: 'primary',
  isFill: true,
  outline: false,
  underLine: false,
  full: false,
};

const Wrap = styled.button<ButtonProps>`
  position: relative;
  border-radius: 4px;
  font-weight: 600;
  padding: 14.5px 16px calc(env(safe-area-inset-bottom) + 14.5px);
  border-radius: 2px;
  transition: all 0.3s;
  ${fonts.s16};
  ${({ isFill, themeColor }) =>
    isFill &&
    css`
      ${themeColor === 'primary' &&
      css`
        color: ${colors.secondary};
        background-color: ${colors.primary};
      `}
      ${themeColor === 'gray' &&
      css`
        color: ${colors.gray05};
        background-color: ${colors.secondary04};
      `}
    `};
  ${({ isFill }) => !isFill && css``};
  ${({ outline }) =>
    outline &&
    css`
      background: none;
      border: 1px solid ${colors.primary};
      color: ${colors.primary};
      &:active {
        background-color: ${colors.primary10};
      }
    `};
  ${({ full }) =>
    full &&
    css`
      width: 100%;
    `}
`;
