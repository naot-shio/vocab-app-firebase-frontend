import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const PrivateRoute = ({ component, auth, ...rest }) => {
  let Component = component;

  return (
    <Route
      {...rest}
      render={props =>
        auth ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/sentences", state: { from: props.location } }} />
        )
      }
    />
  );
};

const mapStateToProps = state => ({ auth: state.user.authenticated });
export default withRouter(connect(mapStateToProps)(PrivateRoute));