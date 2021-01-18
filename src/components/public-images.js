import React from 'react';
import AdminCard from './admin-card';
import api from '../api';
import styled from 'styled-components';

const PublicImages = ({ images, setImages, selectImage, removeImage }) => {
  React.useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch(api('/images/public/user'), {
        method: 'GET',
        credentials: 'include',
        // bad! cookie should be httpOnly
        headers: { Authorization: 'Bearer ' + document.cookie.split('=')[1] },
      });
      if (res.ok) {
        const data = await res.json();
        setImages(data.images);
      } else {
        console.log(res);
      }
    };
    fetchImages();
  }, [setImages]);
  return (
    <Grid>
      {images.map((image, idx) => (
        <AdminCard
          image={image}
          location={image.location}
          handleCheck={() => selectImage(idx)}
          removeImage={removeImage}
        />
      ))}
    </Grid>
  );
};

export default PublicImages;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  margin: 0 auto;
  grid-column-gap: 5px;
`;
