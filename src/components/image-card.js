import React from 'react';

const ImageCard = (props) => {
  const { image } = props;
  return (
    <div className='image-card'>
      <div className='card shadow-sm'>
        <img className='card-img' src={image.location} alt='' width='375px' />
        <div className='card-body'>
          <h6>{image.title}</h6>
          <p className='card-text'>{image.description}</p>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='btn-group'>
              <a
                type='button'
                className='btn btn-sm btn-outline-secondary'
                href={image.location}
                target='#'
              >
                View
              </a>
            </div>
            {image.user?.username && (
              <small className='text-muted'>{image.user?.username}</small>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
