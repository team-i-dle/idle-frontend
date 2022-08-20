import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Selected, SelectNormal } from 'components/Icon';
import { colors } from 'constants/theme';
import React from 'react';

type InputProps = JSX.IntrinsicElements['input'];

type CustomInputProps = InputProps & {
  label: string;
  customStyle?: object;
  align: string;
};

const Radio = React.forwardRef<HTMLInputElement, CustomInputProps>(
  (props, ref) => {
    return (
      <RadioWrap style={props.customStyle}>
        <RadioInput
          type="radio"
          value={props.value || props.id}
          {...props}
          ref={ref}
        />
        <RadioLabel htmlFor={props.id} align={props.align}>
          <div className="radio-icon">
            <div className="normal">
              <SelectNormal width={48} />
            </div>
            <div className="selected">
              <Selected width={48} />
            </div>
          </div>
          {!!props.label && <span className="label">{props.label}</span>}
        </RadioLabel>
      </RadioWrap>
    );
  }
);

export default Radio;

const RadioWrap = styled.div`
  display: inline-block;
`;

const RadioInput = styled.input`
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;

  &:checked + label .selected {
    display: block;
    opacity: 1;
  }

  &:checked + label .normal {
    display: none;
    opacity: 0;
  }

  &:checked + label .label {
    color: ${colors.primary};
  }
`;

const RadioLabel = styled.label<{ align: string }>`
  display: inline-flex;
  flex-direction: ${({ align }) => align};
  align-items: center;
  cursor: pointer;
  position: relative;
  & .selected {
    display: none;
    opacity: 0;
  }

  & .radio-icon {
    position: relative;
    width: 48px;
    height: 48px;
    & > div {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  & > span {
    margin-top: 12px;
    ${({ align }) =>
      align === 'row' &&
      css`
        margin-left: 4px;
      `}
  }
`;
