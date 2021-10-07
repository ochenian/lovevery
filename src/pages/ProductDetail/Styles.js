import styled from 'styled-components';
import { color } from '../../styles/constants';

export const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 2em;
`;

export const ProductTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: left;
  margin: 0;
`;

export const ProductTrustContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  font-size: 0.75rem;
  border-bottom: 1px solid gray;
  padding-bottom: 2em;

  div {
    flex: 1;
    text-align: center;
    padding: 4px;
  }

  div:not(:last-of-type) {
    border-right: 1px solid ${color.textMedium};
  }
`;

export const ProductDetail = styled.p`
  font-size: 1rem;
  max-width: 60ch;
  text-align: left;
`;

export const ProductPricing = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
`;

export const SellingPointsContainer = styled.div`
  display: flex;
  gap: 1em;
  width: 100%;
`;

export const SellingPoint = styled.div``;
