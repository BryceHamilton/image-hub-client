import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { UserContext } from '../App';
import api from '../api';

const Login = () => {
  const history = useHistory();
  const [user, setUser] = React.useContext(UserContext);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const handleSubmit = (event) => {
    setError('');
    event.preventDefault();
    const data = { username, password };
    console.log(data);
    fetch(api('/auth/login'), {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    })
      .then(async (res) => {
        if (res.ok) return res.json();
        const json = await res.json();
        console.log(json);
        throw new Error(json.Message);
      })
      .then((json) => {
        setUser(json.user);
        history.push('/profile');
      })
      .catch((err) => setError(err.message));
  };

  if (user) {
    return <Redirect to='/' />;
  }
  return (
    <div className='row mt-5 '>
      <div className='col-md-6 m-auto sign-up'>
        <div className='card card-body text-center'>
          <h1>
            <i className='far fa-images'></i>
          </h1>
          <form className='form-signin' onSubmit={handleSubmit}>
            <h1 className='h3 mb-3 font-weight-normal'>Login</h1>
            <div className='sign-up-inputs'>
              <label for='username' className='sr-only'>
                Username
              </label>
              <input
                type='text'
                id='username'
                className='form-control'
                placeholder='Username'
                required
                autofocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label for='password' className='sr-only'>
                Password
              </label>
              <input
                type='password'
                id='password'
                className='form-control'
                placeholder='Password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                className='btn btn-lg btn-primary btn-block'
                type='submit'
              >
                Login
              </button>
            </div>
            {error}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
