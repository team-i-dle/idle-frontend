import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import defaultInputStyle from 'components/Input/Input.style';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { inputNumberFormat } from 'utils/index';

type InputProps = JSX.IntrinsicElements['input'];

type CustomInputProps = InputProps & {
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
};

const Text = React.forwardRef<HTMLInputElement, CustomInputProps>(
  (props, ref) => {
    const endAdornmentRef = useRef<HTMLSpanElement>(null);
    const [endWidth, setEndWidth] = useState(0);

    const isNumber = props.type === 'numberType';

    const onAddComma = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isNumber) return;
        e.target.value = inputNumberFormat(e.target);
      },
      [isNumber]
    );

    useEffect(() => {
      if (props.endAdornment && endAdornmentRef.current) {
        setEndWidth(endAdornmentRef.current.clientWidth);
      }
    }, [props.endAdornment]);

    if (props.startAdornment) {
      return (
        <InputWrap isStart endWidth={0}>
          <Start>{props.startAdornment}</Start>
          <Input {...props} ref={ref} />
        </InputWrap>
      );
    } else if (props.endAdornment) {
      return (
        <InputWrap isStart={false} endWidth={endWidth}>
          <Input {...props} onChange={onAddComma} ref={ref} />
          <End ref={endAdornmentRef}>{props.endAdornment}</End>
        </InputWrap>
      );
    }
    return <Input {...props} ref={ref} />;
  }
);

Text.displayName = 'Text';

export default Text;

const Input = styled.input`
  ${defaultInputStyle};
`;

const InputWrap = styled.div<{ isStart: boolean; endWidth: number }>`
  position: relative;
  ${({ isStart }) =>
    isStart &&
    css`
      & > input {
        padding-left: 40px;
      }
    `};
  ${({ isStart, endWidth }) =>
    !isStart &&
    css`
      & > input {
        padding-right: ${endWidth + 20}px;
      }
    `};
`;

const Start = styled.span`
  position: absolute;
  height: 100%;
  top: 0;
  display: flex;
  align-items: center;
  /* top: 50%;
  transform: translateY(-50%); */
  left: 12px;
`;

const End = styled.span`
  position: absolute;
  height: 100%;
  top: 0;
  display: flex;
  align-items: center;
  /* top: 50%;
  transform: translateY(-50%); */
  right: 12px;
`;
