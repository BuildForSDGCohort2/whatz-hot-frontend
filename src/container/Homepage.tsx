import React from 'react';
import { Button } from '@blueprintjs/core';
import { auth } from '../utils/Uiconfig';
import { RouteComponentProps } from 'react-router';

interface Iprops extends RouteComponentProps<any> {}
const Homepage: React.FC<Iprops> = (props) => {
  const handleOnClick = () => {
    auth.signOut();
    props.history.push('/login');
  };
  return (
    <div>
      <h1>Homepage</h1>
      <Button onClick={handleOnClick}>signout</Button>
    </div>
  );
};

export default Homepage;
