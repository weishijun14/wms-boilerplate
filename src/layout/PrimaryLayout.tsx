import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

// TODO: 泛型 class

class PrimaryLayout extends Component {
  // if not login then redirect to login page , else into page.
  render() {
    console.log(this.props, 123);
    if (this.props) {
      <Redirect to="/user" />;
    }
    return (
      <div>
        PrimaryLayout
        <Route path="/dashboard" />
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
)(PrimaryLayout);
