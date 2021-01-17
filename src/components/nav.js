import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../App';
import api from '../api';

const Nav = () => {
  const history = useHistory();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isProfile = location.pathname === '/profile';
  const [user, setUser] = useContext(UserContext);

  const logout = () => {
    fetch(api('/auth/logout')).then((res) => {
      if (res.ok) {
        setUser('');
        history.push('/');
      }
    });
  };

  return (
    <nav class='navbar navbar-expand-lg navbar-light bg-light'>
      <ul>
        <li>
          {!isHome && (
            <Link class='btn btn-outline-success my-2 my-sm-0' to='/'>
              <i class='far fa-images'></i>
            </Link>
          )}
          {user ? (
            <>
              {!isProfile && (
                <Link
                  class='btn btn-outline-success my-2 my-sm-0'
                  to='/profile'
                >
                  <i class='fas fa-user'></i>
                </Link>
              )}
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
