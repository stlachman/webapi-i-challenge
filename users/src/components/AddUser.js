import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { addUser } from "../actions";

class AddUser extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      bio: ""
    };
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addUser(this.state).then(() => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div>
        <h1>Add User</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Add Name"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <input
              type="text"
              name="bio"
              placeholder="Add Bio"
              onChange={this.handleChange}
              value={this.state.bio}
            />
            <button>Add User</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addingUser: state.addingUser,
    error: state.error
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { addUser }
  )(AddUser)
);
