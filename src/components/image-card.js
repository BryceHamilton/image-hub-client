import React from 'react';

const ImageCard = (props) => {
  const { location } = props.image;
  return (
    <div class='col'>
      <div class='card shadow-sm'>
        <img class='card-img' src={location} alt='' />
        <div class='card-body'>
          <h6>Hello</h6>
          <p class='card-text'>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div class='d-flex justify-content-between align-items-center'>
            <div class='btn-group'>
              <a
                type='button'
                class='btn btn-sm btn-outline-secondary'
                href='<%= image.location %>'
              >
                View
              </a>
            </div>
            <small class='text-muted'>9 mins</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
