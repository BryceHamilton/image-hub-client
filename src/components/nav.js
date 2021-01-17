import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../App';
import api from '../api';

const Nav = () => {
  const history = useHistory();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isProfile = location.pathname === '/profile';
  const isLogin = location.pathname === '/login';
  const isSignup = location.pathname === '/signup';
  const [user, setUser] = useContext(UserContext);

  const logout = () => {
    fetch(api('/auth/logout'), { method: 'GET', credentials: 'include' }).then(
      (res) => {
        if (res.ok) {
          setUser('');
          history.push('/');
        }
      },
    );
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <ul>
        <li>
          {!isHome && (
            <Link className='btn btn-outline-success my-2 my-sm-0' to='/'>
              <i className='far fa-images'></i>
            </Link>
          )}
          {user ? (
            <>
              {!isProfile && (
                <Link
                  className='btn btn-outline-success my-2 my-sm-0'
                  to='/profile'
                >
                  <i className='fas fa-user'></i>
                </Link>
              )}
              <button
                className='btn btn-outline-success my-2 my-sm-0'
                onClick={logout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {!isSignup && (
                <Link
                  className='btn btn-outline-success my-2 my-sm-0'
                  to='/signup'
                >
                  Sign up
                </Link>
              )}
              {!isLogin && (
                <Link
                  className='btn btn-outline-success my-2 my-sm-0'
                  to='/login'
                >
                  Login
                </Link>
              )}
            </>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
