import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors } from 'constants/theme';
// import './style.ts';

interface HeaderProps {
  children: React.ReactNode;
  leftButton?: React.ReactNode;
  rightButton?: React.ReactNode;
  style?: React.CSSProperties;
}

const Header = ({ children, leftButton, rightButton, style }: HeaderProps) => {
  return (
    <Wrap style={style} isButton={!!leftButton || !!rightButton}>
      {leftButton}
      <ChildrenWrap isButton={!!leftButton || !!rightButton}>
        {children}
      </ChildrenWrap>
      {rightButton}
    </Wrap>
  );
};

export default Header;

const Wrap = styled.div<{ isButton: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  color: ${colors.gray06};
  padding: ${({ isButton }) => (isButton ? '14px 20px' : '16px 20px')};
  ${({ isButton }) => !isButton && `justify-content: center;`}
`;

const ChildrenWrap = styled.div<{ isButton: boolean }>`
  ${({ isButton }) =>
    !!isButton &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}
`;
