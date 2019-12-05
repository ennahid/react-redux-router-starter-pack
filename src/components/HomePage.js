import React, { Component } from "react";
import { connect } from "react-redux";

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>HomePage</h1>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    login: state.login
  };
}

export default connect(mapStateToProps)(HomePage);
