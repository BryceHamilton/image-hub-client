import React from 'react';
import api from '../api';

const AdminCard = ({ image, removeImage, location, handleCheck }) => {
  const deleteImage = async () => {
    if (window.confirm('Delete this Image?')) {
      const res = await fetch(api(`/images/${image._id}`), {
        method: 'DELETE',
        credentials: 'include',
        // bad! cookie should be httpOnly
        headers: { Authorization: 'Bearer ' + document.cookie.split('=')[1] },
      });
      if (res.ok) {
        const json = await res.json();
        console.log(json);
        removeImage(json.deleted);
      }
    }
  };
  return (
    <div className='image-card'>
      <div className='card shadow-sm'>
        <img className='card-img' src={location} alt='' width='375px' />
        <div className='card-body'>
          <h6>{image.title}</h6>
          <p className='card-text'>{image.description}</p>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='btn-group'>
              <a
                type='button'
                className='btn btn-sm btn-outline-secondary'
                href={location}
                target='#'
              >
                View
              </a>
              <button
                className='btn btn-sm btn-outline-secondary'
                onClick={deleteImage}
              >
                <i class='fas fa-trash-alt'></i>
              </button>
            </div>
            <input
              type='checkbox'
              value={image.checked}
              onChange={handleCheck}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
