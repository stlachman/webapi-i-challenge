import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { withRouter } from "react-router-dom";

import { editUser } from "../actions";

class User extends React.Component {
  constructor() {
    super();

    this.state = {
      user: "",
      error: ""
    };
  }

  componentDidMount() {
    return axios
      .get(`http://localhost:5000/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ ...this.state, user: res.data }))
      .catch(err => this.setState({ ...this.state, error: err }));
  }

  handleChange = event => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.editUser(this.state.user).then(res => {
      if (res.type === "EDIT_USER_FAIL") {
        this.setState({
          ...this.state,
          error: "Both fields must be filled out"
        });
      } else {
        this.props.history.push("/");
      }
    });
  };

  render() {
    if (this.state.user === "") {
      return (
        <div>
          <h1>Loading User Info</h1>
        </div>
      );
    }
    return (
      <div>
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.user.name}
              name="name"
            />
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.user.bio}
              name="bio"
            />
            <button>Edit User</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    editingUser: state.editingUser,
    error: state.error
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { editUser }
  )(User)
);
