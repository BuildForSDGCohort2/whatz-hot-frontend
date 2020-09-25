import React from 'react';
import { Button } from '@blueprintjs/core';
import { RouteComponentProps } from 'react-router';
import { userAuth } from '../utils/Uiconfig';

interface Iprops extends RouteComponentProps<any> {}
const Homepage: React.FC<Iprops> = (props) => {
  const handleOnClick = () => {
    userAuth.signOut();
    props.history.push('/user/login');
  };
  return (
    <div>
      <h1>Homepage</h1>
      <Button onClick={handleOnClick}>signout</Button>
    </div>
  );
};

export default Homepage;
