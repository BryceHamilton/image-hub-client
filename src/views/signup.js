import React from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../App.js';

const Signup = () => {
  const history = useHistory();
  const [user, setUser] = React.useContext(UserContext);
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = { username, email, password };
    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => data.append(key, value));
    fetch('http://localhost:4000/auth/signup', { method: 'POST', body: data })
      .then((res) => res.json())
      .then((json) => {
        setUser(json.user);
        history.push('/profile');
      });
  };

  return (
    <div className='row mt-5 '>
      <div className='col-md-6 m-auto sign-up'>
        <div className='card card-body text-center'>
          <h1>
            <i className='far fa-images'></i>
          </h1>
          <form className='form-signin' onSubmit={handleSubmit}>
            <h1 className='h3 mb-3 font-weight-normal'>Sign up</h1>
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
              <label for='email' className='sr-only'>
                Email address
              </label>
              <input
                type='email'
                id='email'
                className='form-control'
                placeholder='Email address'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
