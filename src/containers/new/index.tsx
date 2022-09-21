import React, { useCallback, useEffect, useMemo } from 'react';
import styled from '@emotion/styled';
import Header from 'components/Header';
import { Close } from 'components/Icon';
import { colors, fonts } from 'constants/theme';
import { useRouter } from 'next/router';
import Step1 from './step1';
import Step2 from './step2';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import httpClient from 'remotes/index';
import noticeCriteria from 'constants/noticeCriteria';

type FormValues = {
  [index: string]: string;
  title: string;
  url: string;
  salary: string;
  salaryMemo: string;
  domain: string;
  domainMemo: string;
  location: string;
  locationMemo: string;
  welfare: string;
  welfareMemo: string;
  company: string;
  companyMemo: string;
  growth: string;
  growthMemo: string;
  culture: string;
  cultureMemo: string;
};

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

  const method = useForm<FormValues>({ defaultValues });
  const renderComponent = useMemo(() => {
    if (query.step === '1' || !query.step) {
      return <Step1 />;
    }
    return <Step2 />;
  }, [query]);

  const onSubmit: SubmitHandler<FormValues> = useCallback(
    async (data) => {
      const reqData = {
        title: data.title,
        url: data.url,
        notice_criteria: Object.keys(noticeCriteria).map((key) => ({
          criteria_name: noticeCriteria[key],
          score: Number(data[key]),
          description: data[`${key}Memo`],
        })),
      };
      console.log(reqData);
      if (query.step === '2') {
        await httpClient.post(
          `/api/v1/notice?memberId=${process.env.NEXT_PUBLIC_MEMBER_ID}`,
          reqData
        );
      }
    },
    [query.step]
  );

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
        <form onSubmit={method.handleSubmit(onSubmit)}>{renderComponent}</form>
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
