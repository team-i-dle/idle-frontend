import React, { useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { useFormContext } from 'react-hook-form';
import { colors, fonts } from 'constants/theme';
import Input from 'components/Input';
import { Link } from 'components/Icon';
import ButtonGroup from 'components/ButtonGroup';
import Button from 'components/Button';
import Divider from 'components/Divider';
import noticeCriteria from 'constants/noticeCriteria';
import MemoSection from './components/MemoSection';

const Step2 = () => {
  const { register, getValues } = useFormContext();
  const router = useRouter();
  useEffect(() => {
    if (!getValues('title') || !getValues('url')) {
      router.replace('/new');
    }
  }, []);

  const scoreName = useMemo(
    () => (key: string) => {
      switch (key) {
        case '1':
          return '별로예요';
        case '2':
          return '적당해요';
        case '3':
          return '만족해요';
        default:
          return '적당해요';
      }
    },
    []
  );

  return (
    <div>
      <Info>
        <Input.Text
          startAdornment={<Link color={colors.gray05} width="20" />}
          disabled
          value={getValues('url')}
        />
        <InfoBox>
          <TitleWrap>
            <Title>{getValues('title')}</Title>
          </TitleWrap>
          <GridList>
            {Object.keys(noticeCriteria).map((key) => (
              <Grid key={key}>
                <span>{noticeCriteria[key]}</span> {scoreName(getValues(key))}
              </Grid>
            ))}
          </GridList>
        </InfoBox>
      </Info>
      <Divider />
      <MemoWrap>
        <MemoTitle>적어둘 내용이 있으신가요?</MemoTitle>
        <MemoSection title="연봉" name="salaryMemo">
          <Input.Text
            type="numberType"
            placeholder="숫자만 입력하세요."
            id="salaryPrice"
            endAdornment={<span>만원</span>}
            style={{ marginBottom: '8px' }}
            {...register('salaryPrice')}
          />
        </MemoSection>
        <MemoSection title="산업군/도메인" name="domainMemo" />
        <MemoSection title="위치/출퇴근시간" name="locationMemo" />
        <MemoSection title="워라밸/복지" name="welfareMemo" />
        <MemoSection title="회사 규모/네임밸류" name="companyMemo" />
        <MemoSection title="성장 가능성" name="growthMemo" />
        <MemoSection title="사내문화/좋은 동료" name="cultureMemo" />
      </MemoWrap>
      <ButtonGroup merge>
        <Button
          themeColor="gray"
          type="button"
          full
          onClick={() => router.back()}
        >
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
  margin: 12px 20px 32px;
  background-color: ${colors.secondary01};
`;

const InfoBox = styled.div`
  border-top: 1px solid ${colors.gray01};
  padding: 16px 12px;
`;

const TitleWrap = styled.div`
  padding-right: 5px;
`;

const Title = styled.span`
  ${fonts.s20};
  color: ${colors.secondary};
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 100px;
  background-color: ${colors.primary};
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  line-height: 34px;
  word-break: keep-all;
`;

const GridList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 16px 8px 0px;
  ${fonts.s14};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-bottom: 6px;
  &:last-of-type {
    margin-bottom: 0;
  }
  > span {
    color: ${colors.gray04};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const MemoWrap = styled.div`
  padding: 32px 20px 48px;
`;

const MemoTitle = styled.strong`
  display: block;
  ${fonts.s22};
  font-weight: 600;
  color: ${colors.gray09};
`;
