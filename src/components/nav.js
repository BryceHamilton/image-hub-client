import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../App';

const Nav = () => {
  const history = useHistory;
  const [user] = useContext(UserContext);
  const logout = () => {
    fetch('http://localhost:4000/auth/logout').then((res) => {
      if (res.ok) history.push('/');
    });
  };
  return (
    <nav class='navbar navbar-expand-lg navbar-light bg-light'>
      <ul>
        <li>
          <Link class='btn btn-outline-success my-2 my-sm-0' to='/'>
            <i class='far fa-images'></i>
          </Link>
          {user ? (
            <>
              <Link class='btn btn-outline-success my-2 my-sm-0' tp='/profile'>
                {user.username}
              </Link>
              <button
                class='btn btn-outline-success my-2 my-sm-0'
                onClick={logout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link class='btn btn-outline-success my-2 my-sm-0' to='/signup'>
                Sign up
              </Link>
              <Link class='btn btn-outline-success my-2 my-sm-0' to='/login'>
                Login
              </Link>
            </>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
