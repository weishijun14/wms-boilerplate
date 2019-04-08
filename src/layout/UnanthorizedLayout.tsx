import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route, Redirect } from "react-router-dom";

class UnanthorizedLayout extends Component {
  // if logined then redirect to app page. else redirect to login page.
  render() {
    if (this.props) {
      <Redirect to="/" />;
    }
    return (
      <div>
        <Route path="/login" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnanthorizedLayout);
