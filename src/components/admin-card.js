import React from 'react';

const AdminCard = () => {
  return (
    <div class='col'>
      <div class='card shadow-sm'>
        <img class='card-img' src='<%= image.location %>' alt='' />
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
              <a
                type='button'
                class='btn btn-sm btn-outline-secondary'
                href='/images/delete/<%=image._id%>'
                onclick="return window.confirm('Delete this Image ?')"
              >
                Delete
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
