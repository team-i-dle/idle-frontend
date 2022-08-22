import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import Header from 'components/Header';
import { Close } from 'components/Icon';
import { colors, fonts } from 'constants/theme';
import { useRouter } from 'next/router';
import Step1 from './step1';
import Step2 from './step2';
import { FormProvider, useForm } from 'react-hook-form';

export default function New() {
  const { query } = useRouter();
  const defaultValues = useMemo(
    () => ({
      title: '',
      url: '',
      salary: '2',
      domain: '2',
      location: '2',
      welfare: '2',
      company: '2',
      growth: '2',
      culture: '2',
    }),
    []
  );
  const method = useForm({ defaultValues });
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
          <button onClick={() => {}} style={{ display: 'flex' }}>
            <Close color={colors.gray06} width="24" />
          </button>
        }
      >
        새 공고 등록
      </Header>
      {/* <URLBox><a href={}></a></URLBox> */}
      <FormProvider {...method}>
        <form
          onSubmit={method.handleSubmit((data) => {
            console.log(data);
          })}
        >
          {renderComponent}
        </form>
      </FormProvider>
    </Wrap>
  );
}

const Wrap = styled.div`
  ${fonts.s16};
`;

const URLBox = styled.div`
  padding: 14px 12px;
  background-color: rgba(255, 255, 255, 0.02);
`;
