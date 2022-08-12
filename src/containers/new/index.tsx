import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import Header from 'components/Header';
import { Close } from 'components/Icon';
import { colors, fonts } from 'constants/style';
import { useRouter } from 'next/router';
import Step1 from './step1';
import Step2 from './step2';

export default function New() {
  const { query } = useRouter();
  console.log(query);
  const renderComponent = useMemo(() => {
    if (query.step === '1' || !query.step) {
      return <Step1 />;
    }
    return <Step2 />;
  }, [query]);
  return (
    <Wrap>
      <Header
        leftButton={
          <button onClick={() => {}}>
            <Close color={colors.gray06} width="24" />
          </button>
        }
      >
        새 공고 등록
      </Header>
      {renderComponent}
    </Wrap>
  );
}

const Wrap = styled.div`
  ${fonts.md16};
`;
