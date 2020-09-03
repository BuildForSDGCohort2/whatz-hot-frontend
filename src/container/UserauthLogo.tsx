import React from 'react';
import styled from 'styled-components';
import signimg from '../images/signup_illustration.png';

const UserauthLogo = () => {
  return (
    <>
      <SideWrapper>
        <img src={signimg} alt='sigup illustration' />
      </SideWrapper>
    </>
  );
};

const SideWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  height: 400px;
  margin-top: 100px;
  margin-left: 120px;
`;

export default UserauthLogo;
