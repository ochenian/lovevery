import React from 'react';
import { importAll } from '../../utils/helpers';
import { Container } from './Styles';

const Awards = () => {
  const imagesObj = importAll(
    require.context('../../assets/awards', false, /.png/)
  );
  const imageKeys = Object.keys(imagesObj);
  const images = imageKeys.map((key) => imagesObj[key]);

  return (
    <Container>
      {images.map((image) => (
        <img key={image.default} src={image.default} alt='Award' />
      ))}
    </Container>
  );
};

export default Awards;
