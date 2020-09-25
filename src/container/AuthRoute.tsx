import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AppState } from '../redux';
import { RouteProps } from 'react-router';
import { usersReducerState } from '../redux/models/User';

interface Iprops extends RouteProps {
  component: any;
  authenticated: boolean;
}

type props = Iprops & LinkstateProps;
const AuthRoute: React.FC<props> = ({
  component: Component,
  authenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={(routeProps: RouteProps) =>
      authenticated === false ? (
        <Redirect
          to={{ pathName: '/', state: { from: routeProps.location } }}
        />
      ) : (
        <Component {...routeProps} />
      )
    }
  />
);

AuthRoute.prototype = {
  user: PropTypes.object.isRequired
};
interface LinkstateProps {
  authenticated: usersReducerState;
}
const mapStateToProps = (state: AppState) => ({
  authenticated: state.user.authenticated
});

export default connect(mapStateToProps)(AuthRoute);
