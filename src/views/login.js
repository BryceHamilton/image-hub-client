import React, { useReducer } from 'react';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const Login = () => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
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
                onChange={setFormData}
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
                onChange={setFormData}
              />

              <button
                className='btn btn-lg btn-primary btn-block'
                type='submit'
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
