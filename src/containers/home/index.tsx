import React, { useEffect, useState } from 'react';
import BottomNavigation from 'components/BottomNavigation';
import Header from 'components/Header';
import styled from '@emotion/styled';
import { colors, fonts } from 'constants/theme';
import { IcoArrow } from 'components/Icon';
import Input from 'components/Input';
import Button from 'components/Button';
import Divider from 'components/Divider';
import Toast from './components/Toast';

const Home = () => {
  const [clipboard, setClipboard] = useState('');
  useEffect(() => {
    console.log(navigator);
    const readClipboard = async () => {
      if (!navigator || !navigator.clipboard) return;
      try {
        const text = await navigator.clipboard.readText();
        setClipboard(text);
      } catch (err) {
        console.error('Failed to copy!', err);
      }
    };
    readClipboard();
  }, []);

  return (
    <>
      <Header>JOPMARKE</Header>
      <Title>
        지금 <Round>채용공고</Round> 저장하고
        <div>
          <Bold>
            <Strong>내게 맞는</Strong> 회사
          </Bold>
          <IconWrap>
            비교하기 <IcoArrow width="32" />
          </IconWrap>
        </div>
      </Title>
      <InputWrap>
        <Input.Text
          placeholder="www.jopmark.com"
          style={{
            marginBottom: '8px',
            padding: '14px 12px',
          }}
        />
        <Button full>새 공고 등록</Button>
      </InputWrap>
      <Divider />
      <Content>
        <SubTitle>내 공고보기</SubTitle>
        <List></List>
      </Content>
      {!!clipboard && (
        <Toast
          text={clipboard}
          button={
            <button
              type="button"
              style={{ ...fonts.s16, color: colors.primary, fontWeight: 700 }}
            >
              새 공고 등록
            </button>
          }
        />
      )}
      <BottomNavigation />
    </>
  );
};

export default Home;

const Content = styled.div`
  min-height: calc(100vh - 52px - 60px);
`;

const Title = styled.div`
  margin: 40px 45px 20px 40px;
  ${fonts.s18};
  color: ${colors.white};

  > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 6px;
    ${fonts.s26};
  }
`;

const Round = styled.span`
  padding: 0 6px;
  border-radius: 100px;
  color: ${colors.secondary};
  background-color: ${colors.primary};
`;

const Bold = styled.span`
  font-weight: 700;
  margin-right: 4px;
`;

const Strong = styled.span`
  color: ${colors.primary};
`;

const IconWrap = styled.span`
  display: flex;
  gap: 2px;
  align-items: flex-end;
`;

const InputWrap = styled.div`
  padding: 0 30px 40px;
`;

const SubTitle = styled.strong`
  display: block;
  padding: 24px 24px 12px;
  ${fonts.s18};
  color: ${colors.gray06};
  font-weight: 700;
`;

const List = styled.div`
  padding: 0 20px;
`;
