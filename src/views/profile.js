import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import PrivateImages from '../components/private-images';
import PublicImages from '../components/public-images';

const Profile = () => {
  const [isPublic, setIsPublic] = React.useState(true);
  const [user] = React.useContext(UserContext);
  return (
    <main>
      <div className='row mt-5'>
        <div className='col-md-6 m-auto'>
          <div className='card card-body text-center'>
            <h1>
              <i className='far fa-images'></i>
            </h1>
            <p>
              <div>Welcome {user.username}</div>
              <Link
                className='btn btn-outline-success my-2 my-sm-0'
                to='/upload'
              >
                Upload
              </Link>
              <div>
                <button
                  className='btn btn-outline-success my-2 my-sm-0'
                  id={isPublic ? 'active' : ''}
                  onClick={() => setIsPublic(true)}
                >
                  Public
                </button>
                <button
                  className='btn btn-outline-success my-2 my-sm-0'
                  id={!isPublic ? 'active' : ''}
                  onClick={() => setIsPublic(false)}
                >
                  Private
                </button>
              </div>
            </p>
          </div>
        </div>
      </div>
      <div className='album py-5 bg-light'>
        <div className='container'>
          {isPublic ? <PublicImages /> : <PrivateImages />}
        </div>
      </div>
    </main>
  );
};

export default Profile;
