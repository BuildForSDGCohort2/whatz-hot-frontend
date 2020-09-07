import React from 'react';
import styled from 'styled-components';
import signimg from '../images/signup_illustration.png';

const UserauthLogo = () => {
  return (
    <>
      <SideWrapper>
        <Img src={signimg} alt='sigup illustration' />
      </SideWrapper>
    </>
  );
};

const SideWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  height: 400px;
  margin-top: 150px;
  @media (max-width: 500px) {
    display: none;
  }
`;
const Img = styled.img`
  max-width: 100%;
  height: auto;
`;
export default UserauthLogo;
