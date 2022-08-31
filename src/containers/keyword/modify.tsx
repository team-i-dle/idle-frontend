import Header from 'components/Header';
import { Close, Home } from 'components/Icon';
import { colors } from 'constants/theme';
import React from 'react';

const Modify = () => {
  return (
    <div>
      <Header
        leftButton={
          <button onClick={() => {}} style={{ display: 'flex' }}>
            <Close color={colors.gray06} width="24" />
          </button>
        }
        rightButton={
          <button onClick={() => {}} style={{ display: 'flex' }}>
            <Home width="24" color={colors.gray06} />
          </button>
        }
      >
        JOPMARKE
      </Header>
    </div>
  );
};

export default Modify;
