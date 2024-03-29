import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import ButtonGroup from 'components/ButtonGroup';
import Button from 'components/Button';
import Divider from 'components/Divider';
import { Close, Link } from 'components/Icon';
import Input from 'components/Input';
import { colors, fonts } from 'constants/theme';
import RadioSection from './components/RadioSection';
import { useRouter } from 'next/router';
import { useFormContext } from 'react-hook-form';
import noticeCriteria from 'constants/noticeCriteria';
import { withLink } from 'recoil/link';
import { useRecoilValue } from 'recoil';

const Step1 = () => {
  const router = useRouter();
  const {
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext();
  const copyLink = useRecoilValue(withLink);

  useEffect(() => {
    if (!copyLink) return;
    setValue('url', copyLink);
  }, []);

  return (
    <div>
      <LinkSection>
        <LinkWrap>
          <Input.Text
            placeholder="http://jopmark.please.com"
            startAdornment={<Link color={colors.gray05} width="20" />}
            id="url"
            className={errors.url && 'error'}
            {...register('url', { required: true })}
          />
        </LinkWrap>
        <SubTitle>채용공고명</SubTitle>
        <Input.Text
          id="title"
          className={errors.title && 'error'}
          {...register('title', { required: true })}
        />
      </LinkSection>
      <Divider />
      <Section>
        <Title>이 회사는 어떤가요?</Title>
        <Description>
          키워드별 상세한 메모는 다음단계에서 기입할 수 있어요.
        </Description>
        {/* <RadioSection title="연봉" name="salary" />
        <RadioSection title="산업군/도메인" name="domain" />
        <RadioSection title="위치/출퇴근시간" name="location" />
        <RadioSection title="워라밸/복지" name="welfare" />
        <RadioSection title="회사 규모/네임밸류" name="company" />
        <RadioSection title="성장 가능성" name="growth" />
        <RadioSection title="사내문화/좋은 동료" name="culture" /> */}
        {Object.keys(noticeCriteria).map((key: string) => (
          <RadioSection key={key} title={noticeCriteria[key]} name={key} />
        ))}
      </Section>
      <ButtonGroup merge>
        <Button
          themeColor="gray"
          full
          type="button"
          onClick={() => {
            const a = confirm('나중에 등록?');
            if (!a) {
              return;
            }
            router.push('/');
          }}
        >
          나중에
        </Button>
        <Button
          type="button"
          themeColor="primary"
          full
          onClick={() => {
            // sessionStorage.setItem('step1', ``);
            const titleValue = getValues('title');
            const urlValue = getValues('url');
            if (!titleValue || !urlValue) {
              return;
            }
            router.push('/new?step=2');
          }}
          // type="button"
        >
          다음단계
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Step1;

const LinkSection = styled.div`
  padding: 12px 20px 24px;
`;

const Section = styled.div`
  padding: 24px 20px;
`;

const Title = styled.strong`
  display: block;
  ${fonts.s22};
  font-weight: 600;
  color: ${colors.gray09};
`;

const SubTitle = styled.strong`
  display: block;
  ${fonts.s14};
  font-weight: 600;
  margin-bottom: 12px;
`;

const LinkWrap = styled.div`
  margin-bottom: 24px;
`;

const Description = styled.span`
  display: block;
  margin-top: 4px;
  ${colors.gray05};
  ${fonts.s14};
`;
