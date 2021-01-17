import React from 'react';
import AdminCard from './admin-card';
import api from '../api';
import styled from 'styled-components';

const PublicImages = () => {
  const [images, setImages] = React.useState([]);
  React.useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch(api('/images/public/user'), {
        method: 'GET',
        credentials: 'include',
      });
      if (res.ok) {
        const data = await res.json();
        setImages(data.images);
      } else {
        console.log(res);
      }
    };
    fetchImages();
  }, []);
  return (
    <Grid>
      {images.map((image) => (
        <AdminCard image={image} location={image.location} />
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
