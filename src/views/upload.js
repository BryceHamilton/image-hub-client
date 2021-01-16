import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';

const Upload = () => {
  const [user] = useContext(UserContext);
  return (
    <div class='row mt-5'>
      <div class='col-md-6 m-auto'>
        <div class='card card-body text-center'>
          <h1>
            <i class='far fa-images'></i>
          </h1>
          <p>
            <span>
              <Link to='/profile'>{user.username}</Link>
            </span>
            <form action='/images' method='post' enctype='multipart/form-data'>
              <label class='form-label'>🔥 Upload your Images 👇</label>
              <div>
                <label class='form-label' for='title'>
                  Title
                </label>
                <input type='text' class='form-control' name='title' />
                <label class='form-label' for='description'>
                  Description
                </label>
                <input type='text' class='form-control' name='description' />
                <label class='form-label'>Images</label>
                <input
                  type='file'
                  class='form-control'
                  name='file'
                  multiple='multiple'
                  accept='image/*'
                />

                <input
                  type='submit'
                  value='Upload'
                  style={{ marginTop: '30px' }}
                />
              </div>
            </form>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Upload;
