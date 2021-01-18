import React from 'react';
import { Link } from 'react-router-dom';
import Switch from '@material-ui/core/Switch';
import { UserContext, UserImageContext } from '../App';
import PrivateImages from '../components/private-images';
import PublicImages from '../components/public-images';
import api from '../api';

const Profile = () => {
  const [user] = React.useContext(UserContext);
  const [isPublic, setIsPublic] = React.useState(true);
  const [images, setImages] = React.useContext(UserImageContext);

  const selectedImages = images.filter((image) => image.checked);
  const areImagesToDelete = !!selectedImages.length;

  const selectImage = (idx) => {
    const newImages = [...images];
    newImages[idx] = { ...newImages[idx], checked: !newImages[idx].checked };
    setImages(newImages);
  };

  const removeImage = (id) => {
    setImages(images.filter((image) => image._id !== id));
  };

  const deleteSelected = async () => {
    if (window.confirm('Delete selected Images?')) {
      const selectedImageIds = selectedImages.map((image) => image._id);
      const body = JSON.stringify({ images: selectedImageIds });
      const res = await fetch(api('/images/delete'), {
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          // bad! cookie should be httpOnly
          Authorization: 'Bearer ' + document.cookie.split('=')[1],
        },
        credentials: 'include',
      });
      if (res.ok) {
        const json = await res.json();
        const { deleted } = json;
        setImages(images.filter((image) => !deleted.includes(image._id)));
      }
    }
  };

  const imagesProps = { images, setImages, selectImage, removeImage };

  return (
    <main>
      <div className='row mt-5'>
        <div className='col-md-6 m-auto'>
          <div className='card card-body text-center'>
            <h1>
              <i className='far fa-images'></i>
            </h1>
            <p>
              <div>Welcome {user.username}</div>
              <Link
                className='btn btn-outline-success my-2 my-sm-0'
                to='/upload'
              >
                Upload
              </Link>
              {areImagesToDelete && (
                <button
                  className='btn my-2 my-sm-0 del-button'
                  onClick={deleteSelected}
                >
                  Delete Selected
                </button>
              )}
              <div>
                <span>Private</span>
                <Switch
                  defaultChecked
                  color='default'
                  inputProps={{ 'aria-label': 'checkbox with default color' }}
                  onClick={() => setIsPublic(!isPublic)}
                  value={isPublic}
                />
                <span>Public</span>
              </div>
            </p>
          </div>
        </div>
      </div>
      <div className='album py-5 bg-light'>
        <div className='container'>
          {isPublic ? (
            <PublicImages {...imagesProps} />
          ) : (
            <PrivateImages {...imagesProps} />
          )}
        </div>
      </div>
    </main>
  );
};

export default Profile;
