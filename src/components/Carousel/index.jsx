import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { ThumbnailSlider } from './Styles';

// function importAll(r) {
//   let images = {};
//   r.keys().map((item, index) => {
//     images[item.replace('./', '')] = r(item);
//   });
//   return images;
// }

// const imagesObj = importAll(
//   require.context('../../assets/senser', false, /.jpg/)
// );
// const imageKeys = Object.keys(imagesObj);
// const images = imageKeys.map((key) => imagesObj[key]);

const Carousel = ({ images }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  console.log(images);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
  };

  const settingsThumbs = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '10px',
  };

  return (
    <div>
      <Slider
        {...settingsMain}
        asNavFor={nav2}
        ref={(slider) => setSlider1(slider)}
      >
        {images.map((image) => {
          return (
            <div key={image.default}>
              <img src={image.default} alt='senser' />
            </div>
          );
        })}
      </Slider>
      <ThumbnailSlider>
        <Slider
          {...settingsThumbs}
          asNavFor={nav1}
          ref={(slider) => setSlider2(slider)}
          style={{ maxWidth: '500px', maxHeight: '100px', margin: '0 auto' }}
        >
          {images.map((image) => {
            return (
              <div key={image.default}>
                <img src={image.default} alt='senser' />
              </div>
            );
          })}
        </Slider>
      </ThumbnailSlider>
    </div>
  );
};

export default Carousel;
