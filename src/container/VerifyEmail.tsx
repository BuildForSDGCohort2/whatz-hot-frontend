import React from 'react';
import { Card, Elevation } from '@blueprintjs/core';
import { H2 } from '../styles/userauthstyles';
import UserauthHeader from './UserauthHeader';
import { Wrapper, CardWrapper, H4 } from '../styles/VerifyemailStyle';

const VerifyEmail = () => {
  return (
    <Wrapper>
      <CardWrapper>
        <UserauthHeader />
        <Card interactive={true} elevation={Elevation.TWO}>
          <H2>Thank you for Registering</H2>
          <H4>A link as been sent to your email for email verification</H4>
        </Card>
      </CardWrapper>
    </Wrapper>
  );
};

export default VerifyEmail;
