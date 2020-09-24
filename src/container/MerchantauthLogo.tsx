import React from 'react';
import styled from 'styled-components';
import signimg from '../images/business.jpg';

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
  max-width: 600px;
  height: 400px;
  margin-top: 130px;
  padding-left: 35px;
  @media (max-width: 500px) {
    display: none;
  }
  @media (max-width: 675px) {
    width: 100%;
    max-width: 300px;
    height: 100%;
    max-height:300px;
    margin-top: 250px;
    padding:left: 10px;
    padding-right: 5px;
  }
  @media(max-width: 843px){
    padding-right: 5px;
  }
`;
const Img = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
`;
export default UserauthLogo;
