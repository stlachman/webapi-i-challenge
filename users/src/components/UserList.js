import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UserList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    if (this.props.fetchingUsers) {
      return (
        <div>
          <h2>Loading</h2>
        </div>
      );
    }
    return (
      <div>
        <ul>
          {this.props.users.map((user, index) => (
            <li key={index}>
              Name: {user.name} Bio: {user.bio}{" "}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    fetchingUsers: state.fetchingUsers,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchUsers }
)(UserList);
