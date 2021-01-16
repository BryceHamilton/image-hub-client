import React from 'react';
import ImageCard from '../components/image-card';

const Home = () => {
  const [images, setImages] = React.useState([]);
  React.useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch('http://localhost:4000/images');
      const data = await res.json();
      console.log(data);
      setImages(data.images);
    };
    fetchImages();
  }, []);
  return (
    <div class='album py-5 bg-light'>
      <div class='container'>
        <div class='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
          {images.map((image) => (
            <ImageCard image={image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
