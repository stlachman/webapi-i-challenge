import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { fetchUser } from "../actions";

class User extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  render() {
    if (this.props.fetchingUser) {
      return (
        <div>
          <h1>Loading User Info</h1>
        </div>
      );
    }
    return (
      <div>
        <h2>Name: {this.props.user.name}</h2>
        <p>Bio: {this.props.user.bio}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingUser: state.fetchingUser,
    error: state.error,
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(User);
