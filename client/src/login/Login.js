import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.post('http://localhost:5000/api/auth/login', this.state)
      .then(res => {
        localStorage.setItem('jwt', res.data.token);
        console.log(localStorage.getItem('jwt'))
      }).catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <input 
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
            placeholder='Username'
            type='text'
          >
          </input>
          <input 
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
            placeholder='Password'
            type='text'
          >
          </input>
          <button>Login</button>
        </form>
      </>
    )
  }
}

export default Login;