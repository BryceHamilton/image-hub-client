import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../api';

const Upload = () => {
  const history = useHistory();
  const form = useRef(null);
  const [message, setMessage] = useState('');
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(form.current);
    const url = `/images${checked ? '/public' : ''}`;

    fetch(api(url), {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'multipart/form-data' },
      credentials: 'include',
    }).then(async (res) => {
      const json = await res.json();
      setMessage(json.Message);
      if (res.ok) history.push('/profile');
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
            <form
              action={api('/images')}
              ref={form}
              onSubmit={handleSubmit}
              encType='multipart/form-data'
            >
              <label class='form-label'>🔥 Upload your Images 👇</label>
              <div>
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
