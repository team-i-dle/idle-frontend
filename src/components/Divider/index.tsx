import styled from '@emotion/styled';
import { colors } from 'constants/theme';
import React from 'react';

const Divider = () => {
  return <Wrap />;
};

export default Divider;

const Wrap = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${colors.secondary03};
`;
