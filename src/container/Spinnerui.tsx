import React from 'react';
import { Spinner } from '@blueprintjs/core';
import { SpinnerWrapper, Wrapper } from '../styles/Spinneruistyles';

const SpinnerUi = () => {
  return (
    <Wrapper>
      <SpinnerWrapper>
        <Spinner size={20} intent={'primary'} />
      </SpinnerWrapper>
    </Wrapper>
  );
};

export default SpinnerUi;
