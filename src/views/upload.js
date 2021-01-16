import React from 'react';

const Upload = () => {
  return (
    <div class='row mt-5'>
      <div class='col-md-6 m-auto'>
        <div class='card card-body text-center'>
          <h1>
            <i class='far fa-images'></i>
          </h1>
          <p>
            <span>
              <a href='/profile'>user.username</a>
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
