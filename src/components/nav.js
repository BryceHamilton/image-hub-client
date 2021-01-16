import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';

const Nav = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <nav class='navbar navbar-expand-lg navbar-light bg-light'>
      <ul>
        <li>
          {user ? (
            <>
              <a class='btn btn-outline-success my-2 my-sm-0' href='/'>
                <i class='far fa-images'></i>
              </a>
              <a class='btn btn-outline-success my-2 my-sm-0' href='/profile'>
                user.username
              </a>
              <a
                class='btn btn-outline-success my-2 my-sm-0'
                href='/auth/logout'
              >
                Logout
              </a>
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
