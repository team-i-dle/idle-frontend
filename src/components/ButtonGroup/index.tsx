import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface ButtonGroupProps {
  children: React.ReactNode;
  align: string;
  direction: string;
  merge: boolean;
  style?: React.CSSProperties;
}

const ButtonGroup = ({ children, ...props }: ButtonGroupProps) => {
  return <Group {...props}>{children}</Group>;
};

export default ButtonGroup;

ButtonGroup.defaultProps = {
  align: 'left',
  direction: 'row',
  merge: false,
};

const Group = styled.div<ButtonGroupProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  & > button {
    ${({ direction }) =>
      direction === 'row' ? 'margin-right: 8px' : 'margin-bottom: 8px'};
  }
  & > button:last-of-type {
    ${({ direction }) =>
      direction === 'row' ? 'margin-right: 0px' : 'margin-bottom: 0px'};
  }
  ${({ align, direction }) =>
    direction === 'row' &&
    `
    align-items: center;
    ${align === 'left' && 'justify-content: flex-start'};
    ${align === 'right' && 'justify-content: flex-end'};
    ${align === 'center' && 'justify-content: center'};
    ${align === 'between' && 'justify-content: space-between'};
  `};

  ${({ align, direction }) =>
    direction === 'column' &&
    `
    justify-content: center;
    ${align === 'left' && 'align-items: flex-start'};
    ${align === 'right' && 'align-items: flex-end'};
    ${align === 'center' && 'align-items: center'};
  `}

  ${({ merge, direction }) =>
    merge &&
    css`
      & > button {
        margin: 0;
        border-radius: 0;
        ${direction === 'column' &&
        `
        &:last-of-type {
          margin-bottom: 0;
        }
      `}
        ${direction === 'row' &&
        `
          &:last-of-type {
            margin-right: 0;
          }
        `}
      }
    `};
`;
