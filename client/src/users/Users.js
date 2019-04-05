import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    const headers = { authorization: localStorage.getItem('jwt')};

    axios.get('http://localhost:5000/api/users', { headers })
      .then(res => {
        console.log(res.data)
        this.setState({ users: res.data });
      }).catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <h2>Users</h2>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Users
