import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import Link from 'next/link';
import styled from '@emotion/styled';
import {
  Home,
  HomeFill,
  Star,
  StarFill,
  UserFillWide,
  UserOutline,
} from 'components/Icon';
import { colors, fonts } from 'constants/theme';

const BottomNavigation = () => {
  const router = useRouter();

  const active = useMemo(() => (path: string) => router.asPath === path, []);
  // const activeColor = useMemo(
  //   () => (path: string) => {
  //     return active(path) ? colors.primary : colors.gray03;
  //   },
  //   []
  // );
  return (
    <Wrap>
      <Link href={'/'}>
        <Tab active={active('/')}>
          {!active('/') && <Home width="24" color={colors.gray03} />}
          {active('/') && <HomeFill width="24" color={colors.primary} />}
          <Text>메인</Text>
        </Tab>
      </Link>
      <Link href={'/keyword'}>
        <Tab active={active('/keyword')}>
          {!active('/keyword') && <Star width="24" color={colors.gray03} />}
          {active('/keyword') && <StarFill width="24" color={colors.primary} />}
          <Text>키워드</Text>
        </Tab>
      </Link>
      <Link href={'/mypage'}>
        <Tab active={active('mypage')}>
          {!active('mypage') && (
            <UserOutline width="24" color={colors.gray03} />
          )}
          {active('mypage') && (
            <UserFillWide width="24" color={colors.primary} />
          )}
          <Text>내정보</Text>
        </Tab>
      </Link>
    </Wrap>
  );
};

export default BottomNavigation;

const Wrap = styled.div`
  position: sticky;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  bottom: 0;
  padding: 8px 10px calc(env(safe-area-inset-bottom) + 8px);
  background-color: ${colors.secondary02};
  border-top: 1px solid ${colors.gray02};
`;

const Tab = styled.a<{ active: boolean }>`
  text-align: center;
  color: ${colors.gray03};
  ${({ active }) =>
    active &&
    css`
      color: ${colors.white};
    `}
`;

const Text = styled.span`
  display: block;
  margin-top: 4px;
  ${fonts.s10}
  font-weight: 600;
`;
