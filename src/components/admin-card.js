import React from 'react';
import { useHistory } from 'react-router-dom';
import api from '../api';

const AdminCard = ({ image, location }) => {
  const history = useHistory();
  const deleteImage = () => {
    if (window.confirm('Delete this Image?')) {
      fetch(api(`/images/${image._id}`), {
        method: 'DELETE',
        credentials: 'include',
      });
      history.push('/');
    }
  };
  return (
    <div className='image-card'>
      <div className='card shadow-sm'>
        <img className='card-img' src={location} alt='' />
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
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
