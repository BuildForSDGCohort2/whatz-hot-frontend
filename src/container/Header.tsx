import React from 'react';
import { Card, Button, Elevation, H1 } from '@blueprintjs/core';

const Header = () => {
  return (
    <div className='App'>
      <Card interactive={true} elevation={Elevation.TWO}>
        <H1>Welcome to Whatz-hot</H1>
        <Button>Welcome to Whatz-hot</Button>
      </Card>
    </div>
  );
};

export default Header;
