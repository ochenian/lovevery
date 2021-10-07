import React from 'react';
import { ReviewsContainer, ReviewCount } from './Styles';
import { ReactComponent as Stars } from '../../assets/svgs/stars.svg';

const Reviews = () => (
  <ReviewsContainer>
    <Stars fill='#fcf75e' />
    <ReviewCount>20 reviews</ReviewCount>
  </ReviewsContainer>
);

export default Reviews;
