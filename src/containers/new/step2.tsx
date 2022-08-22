import React, { useRef } from 'react';
import Input from 'components/Input';
import styled from '@emotion/styled';
import { colors } from 'constants/theme';
import { Link } from 'components/Icon';
import ButtonGroup from 'components/ButtonGroup';
import Button from 'components/Button';

const Step2 = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <Info>
        <Input.Text
          startAdornment={<Link color={colors.gray05} width="20" />}
          disabled
          value={'http://jopmark.please.com'}
        />
        <InfoBox></InfoBox>
      </Info>
      <Input.Text
        ref={inputRef}
        type="numberType"
        placeholder="숫자만 입력하세요."
        // className="error"
        // startAdornment={<Close color={colors.error} width="20" />}
        endAdornment={<span>만원</span>}
      />
      <ButtonGroup merge>
        <Button themeColor="gray" full>
          뒤로
        </Button>
        <Button themeColor="primary" full type="submit">
          등록하기
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Step2;

const Info = styled.div`
  margin: 12px 20px;
  background-color: ${colors.secondary01};
`;

const InfoBox = styled.div`
  border-top: 1px solid ${colors.gray01};
  padding: 16px 12px;
`;
