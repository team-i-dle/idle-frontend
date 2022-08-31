import React, { useEffect, useState } from 'react';
import Header from 'components/Header';
import styled from '@emotion/styled';
import httpClient from 'remotes/index';
import { useQuery } from 'react-query';
import { colors, fonts } from 'constants/theme';
import { css } from '@emotion/react';
import BottomNavigation from 'components/BottomNavigation';
import Button from 'components/Button';
import { useRouter } from 'next/router';

const defaultData = [
  {
    criteria_name: '연봉',
    member_criteria_id: 3,
  },
  {
    criteria_name: '산업군',
    member_criteria_id: 2,
  },
  {
    criteria_name: '위치(거리)',
    member_criteria_id: 5,
  },
  {
    criteria_name: '워라밸',
    member_criteria_id: 6,
  },
  {
    criteria_name: '네임밸류',
    member_criteria_id: 4,
  },
  {
    criteria_name: '(회사)성장 가능성',
    member_criteria_id: 1,
  },
  {
    criteria_name: '사내문화',
    member_criteria_id: 8,
  },
  {
    criteria_name: '복지',
    member_criteria_id: 7,
  },
];

const Keyword = () => {
  const router = useRouter();
  const getData = async () => {
    return httpClient.get('/api/v1/member/1/keyword').then((res) => res.data);
  };

  const {
    isLoading,
    data = defaultData,
    error,
  } = useQuery('keyword', getData, {
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <Header>JOPMARKE</Header>
      <Wrap>
        <Description>
          <Small>이직하실때</Small>
          <Strong>{data[0].criteria_name}</Strong> 을/를 제일
          <Bold>중요하게 보시네요!</Bold>
        </Description>
        <RankWrap>
          {data.map((list: { criteria_name: string }, index: number) => (
            <List key={list.criteria_name} active={index < 3}>
              <Rank active={index < 3}>{index + 1}</Rank>
              {list.criteria_name}
            </List>
          ))}
        </RankWrap>
        <Button full outline onClick={() => router.push('/keyword/modify')}>
          키워드 재정렬
        </Button>
      </Wrap>
      <BottomNavigation />
    </>
  );
};

export default Keyword;

const Wrap = styled.div`
  padding: 24px 20px;
`;

const Description = styled.div`
  ${fonts.s26};
  color: ${colors.gray08};
`;

const Small = styled.span`
  display: block;
  margin-bottom: 4px;
  ${fonts.s18};
  color: ${colors.gray06};
`;

const Strong = styled.span`
  color: ${colors.primary};
`;

const Bold = styled.span`
  display: block;
  margin-top: 4px;
  color: ${colors.white};
  font-weight: 600;
`;

const RankWrap = styled.div`
  margin: 24px 0 16px;
`;

const List = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  margin-top: 8px;
  font-weight: 600;
  ${fonts.s16};
  color: ${colors.gray07};
  background-color: ${colors.secondary01};
  &:first-of-type {
    margin-top: 0;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: ${colors.primary05};
      color: ${colors.primary};
    `};
`;

const Rank = styled.span<{ active: boolean }>`
  display: flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  ${fonts.s12};
  border-radius: 50%;
  border: 1px solid ${colors.gray02};
  color: ${colors.gray05};
  font-weight: 700;
  ${({ active }) =>
    active &&
    css`
      background-color: ${colors.primary};
      color: ${colors.secondary};
    `};
`;
