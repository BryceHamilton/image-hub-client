import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import { UserContext } from '../App';

const Upload = () => {
  const [user] = useContext(UserContext);
  const form = useRef(null);
  const [message, setMessage] = useState('');
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(form.current);
    const url = `/images${checked ? '/public' : ''}`;
    fetch(api(url), {
      method: 'POST',
      body: data,
      credentials: 'include',
    }).then(async (res) => {
      if (!res.ok) return true;
      const json = await res.json();
      setMessage(json.Message);
    });
  };

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
            <form
              action={api('/images')}
              ref={form}
              onSubmit={handleSubmit}
              enctype='multipart/form-data'
            >
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
                  name='images'
                  multiple='multiple'
                  accept='image/*'
                />
                <label class='form-label'>Public</label>
                <input
                  type='checkbox'
                  class='form-control'
                  value={checked}
                  onChange={() => setChecked(!checked)}
                />

                <input
                  type='submit'
                  value='Upload'
                  style={{ marginTop: '30px' }}
                />
              </div>
              {message}
            </form>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Upload;
