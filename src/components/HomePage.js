import React, { Component } from "react";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>HomePage {this.props.t("hello")}</h1>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    login: state.login
  };
}

export default connect(mapStateToProps)(withTranslation()(HomePage));
// export default withTranslation(connect(mapStateToProps)(HomePage));
