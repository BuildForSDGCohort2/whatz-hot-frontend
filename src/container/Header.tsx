import React from 'react';
import { Card, Button, Elevation, H6 } from '@blueprintjs/core';

const Header = () => {
  return (
    <div className='App'>
      <Card
        interactive={true}
        elevation={Elevation.TWO}
        style={{ backgroundColor: '#3DCC91' }}
      >
        <H6>Welcome to Whatz-hot</H6>
        <Button intent={'success'}>Welcome to Whatz-hot</Button>
      </Card>
    </div>
  );
};

export default Header;
