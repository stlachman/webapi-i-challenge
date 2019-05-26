import React from "react";

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

export default AddUser;
