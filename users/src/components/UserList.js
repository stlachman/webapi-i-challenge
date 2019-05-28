import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { fetchUsers, deleteUser } from "../actions";

import styled from "styled-components";

const Container = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  text-align: center;
`;

class UserList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  componentDidUpdate(prevProps) {
    if (this.props.deletingUser !== prevProps.deletingUser) {
      this.props.fetchUsers();
    }
  }

  delete = id => {
    this.props.deleteUser(id);
  };

  render() {
    if (this.props.fetchingUsers) {
      return (
        <div>
          <h2>Loading</h2>
        </div>
      );
    }
    return (
      <Container>
        <h1>Cool Users</h1>
        {this.props.users.map(user => (
          <div key={user.id}>
            <h3>Name: {user.name}</h3>
            <p>Bio: {user.bio}</p>
            <Link to={`/users/${user.id}`}>Edit User Profile</Link>
            <button onClick={() => this.delete(user.id)}>Delete User</button>
          </div>
        ))}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    fetchingUsers: state.fetchingUsers,
    error: state.error,
    deletingUser: state.deletingUser
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchUsers, deleteUser }
  )(UserList)
);
