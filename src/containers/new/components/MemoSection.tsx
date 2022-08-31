import React, { ReactNode } from 'react';
import Input from 'components/Input';
import styled from '@emotion/styled';
import { colors, fonts } from 'constants/theme';
import { useFormContext } from 'react-hook-form';

interface MemoSectionProps {
  title: string;
  name: string;
  children?: ReactNode;
}

const MemoSection = ({ title, name, children }: MemoSectionProps) => {
  const { register } = useFormContext();
  return (
    <Wrap>
      <SubTitle>{title}</SubTitle>
      {children}
      <Input.Textarea
        placeholder="메모할 내용을 적어주세요."
        id={name}
        {...register(name)}
      />
    </Wrap>
  );
};

export default MemoSection;

const Wrap = styled.div`
  margin-top: 24px;
`;

const SubTitle = styled.div`
  margin-bottom: 12px;
  ${fonts.s14};
  ${colors.gray06};
  font-weight: 600;
`;
