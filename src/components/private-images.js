import React from 'react';
import AdminCard from './admin-card';
import api from '../api';
import styled from 'styled-components';

const PrivateImages = ({ images, setImages, selectImage, removeImage }) => {
  React.useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch(api('/images/user'), {
        method: 'GET',
        credentials: 'include',
      });
      const data = await res.json();
      setImages(data.images);
    };
    fetchImages();
  }, [setImages]);
  return (
    <Grid>
      {images.map((image, idx) => (
        <AdminCard
          image={image}
          location={image.signedUrl}
          handleCheck={() => selectImage(idx)}
          removeImage={removeImage}
        />
      ))}
    </Grid>
  );
};

export default PrivateImages;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  margin: 0 auto;
  grid-column-gap: 5px;
`;
