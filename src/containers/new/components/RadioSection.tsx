import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from '@emotion/styled';
import Input from 'components/Input';
import { colors, fonts } from 'constants/theme';

interface RadioSectionProps {
  title: string;
  name: string;
}

const RadioSection = ({ title, name }: RadioSectionProps) => {
  const { register } = useFormContext();
  return (
    <Wrap>
      <RadioTitle>{title}</RadioTitle>
      <RadioWrap>
        <Input.Radio
          label="별로예요"
          id={`${name}1`}
          value={1}
          align="column"
          color="primary"
          {...register(name)}
        />
        <Input.Radio
          label="적당해요"
          id={`${name}2`}
          value={2}
          align="column"
          color="primary"
          {...register(name)}
        />
        <Input.Radio
          label="만족해요"
          id={`${name}3`}
          value={3}
          align="column"
          color="primary"
          {...register(name)}
        />
      </RadioWrap>
    </Wrap>
  );
};

export default RadioSection;

const Wrap = styled.div`
  padding: 20px 0 44px;
  border-bottom: 1px solid ${colors.gray01};
`;

const RadioTitle = styled.strong`
  display: block;
  text-align: center;
  margin-bottom: 24px;
  color: ${colors.gray08};
  ${fonts.s16};
  font-weight: 600;
`;

const RadioWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${fonts.s14};
`;
