import React, { Component } from "react";
import { connect } from "react-redux";

class AboutPage extends Component {
  render() {
    return (
      <div>
        <h1>AboutPage {this.props.login.email}</h1>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    login: state.login
  };
}

export default connect(mapStateToProps)(AboutPage);
