import React from 'react';
import styled from 'styled-components';

const navstyler = {
  backgroundColor: '#3DCC91'
};
const UserauthHeader = () => {
  return (
    <Header style={navstyler}>
      <H3>whatz hot!</H3>
    </Header>
  );
};

const H3 = styled.h3`
  text-align: center;
  margin-top: 0;
  padding: 15px;
  font-size: 35px;
  color: #fff;
  font-family: 'Pacifico', cursive;
  font-style: bold;
  text-transform: capitalize;
`;
const Header = styled.header`
  background-color: #ffffff;
  box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0),
    0 1px 1px rgba(16, 22, 26, 0.2);
  height: 70px;
  padding: 0;
  width: 100%;
  z-index: 10;
`;
export default UserauthHeader;
