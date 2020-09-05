import React from 'react';
import { Spinner } from '@blueprintjs/core';
import styled from 'styled-components';

const SpinnerUi = () => {
  return (
    <Wrapper>
      <SpinnerWrapper>
        <InnerWrapper>
          <Spinner size={20} intent={'primary'} className='spinnerstyle' />
        </InnerWrapper>
      </SpinnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;
const SpinnerWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  height: 600px;
  margin: 0 auto;
`;
const InnerWrapper = styled.div`
  margin: 250px 0 0 0;
  padding: 0 auto;
  height: 50px;
`;

export default SpinnerUi;
