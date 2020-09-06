import React from 'react';
import styled from 'styled-components';
import signimg from '../images/logo.jpg';

const UserauthLogo = () => {
  return (
    <>
      <SideWrapper>
        <img
          src={signimg}
          alt='sigup illustration'
          width='600px'
          height='400px'
        />
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
