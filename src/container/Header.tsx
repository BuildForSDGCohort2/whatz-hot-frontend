import React from 'react';
import { Card, Button, Elevation, H6 } from '@blueprintjs/core';
import { Link } from "react-router-dom";

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
        {/* This is temporary please remove */}
        <div id="temp-div">
          <Link to="/signup">Sign up</Link>
          <br/>
          <Link to="/login">Login</Link>
        </div>
        {/* Ends here */}
      </Card>
    </div>
  );
};

export default Header;
