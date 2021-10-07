import React from 'react';
import { ReactComponent as Circle } from '../../assets/svgs/circle.svg';
import { Container, Label } from './Styles';

const SellingPoint = ({ children }) => (
  <Container>
    <Circle style={{ width: '0.75em' }} />
    <Label>{children}</Label>
  </Container>
);

export default SellingPoint;
