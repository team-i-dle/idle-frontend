import React from 'react';
import BottomNavigation from 'components/BottomNavigation';
import Header from 'components/Header';
import styled from '@emotion/styled';

export default function Home() {
  return (
    <>
      <Header>JOPMARKE</Header>
      <Content></Content>
      <BottomNavigation />
    </>
  );
}

const Content = styled.div`
  min-height: calc(100vh - 52px - 60px);
`;
