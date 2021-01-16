import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';

const AdminCard = () => {};

const Profile = () => {
  const [images] = React.useState([]);
  const [user] = React.useContext(UserContext);
  return (
    <main>
      <div class='row mt-5'>
        <div class='col-md-6 m-auto'>
          <div class='card card-body text-center'>
            <h1>
              <i class='far fa-images'></i>
            </h1>
            <p>
              <div>Welcome {user.username}</div>
              <Link to='/upload'> Upload </Link>
            </p>
          </div>
        </div>
      </div>
      <div class='album py-5 bg-light'>
        <div class='container'>
          <div class='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
            {images.map((image) => (
              <AdminCard image={image} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
