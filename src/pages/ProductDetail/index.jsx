import React, { useContext, useState } from 'react';
import { differenceInMonths } from 'date-fns';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {
  ProductDetailContainer,
  ProductTitle,
  ProductTrustContainer,
  ProductDetail,
  ProductPricing,
} from './Styles';
import Money from '../../assets/save-money.png';
import { products } from '../../products';
import Reviews from '../../components/Reviews';
import { findProduct } from '../../utils/helpers';
import SellingPoint from '../../components/SellingPoint';
import Awards from '../../components/Awards';
import ProductContext from '../../components/ProductContext';

const ProductDetailArea = () => {
  const [date, setDate] = useState('');
  // const [selectedProduct, selectProduct] = useState(products[0]);
  const { selectedProduct, selectProduct } = useContext(ProductContext);

  function handleSubmit(event) {
    event.preventDefault();
    if (date) {
      const age = Math.abs(differenceInMonths(new Date(date), new Date()));
      const productIndex = findProduct(age);
      selectProduct(products[productIndex]);
    }
  }

  return (
    <ProductDetailContainer>
      <ProductTitle>{selectedProduct.title}</ProductTitle>
      {selectedProduct !== products[0] && (
        <ProductTrustContainer>
          <Reviews />
          {selectedProduct.age && (
            <>
              <div>Suitable for {selectedProduct.age} old</div>
            </>
          )}
          <div>
            Part of: <a href='/'>Play Kit Subscription</a>
          </div>
        </ProductTrustContainer>
      )}
      <ProductDetail>{selectedProduct.detail}</ProductDetail>
      {selectedProduct === products[0] && (
        <p>Enter your child's name and birth date below to see your kit:</p>
      )}
      {selectedProduct !== products[0] && (
        <ProductPricing>
          <img
            style={{ width: '2em', height: '2em' }}
            src={Money}
            alt='Money'
          />
          <p>$60 / kit, only available in the Play Kit subscription</p>
        </ProductPricing>
      )}
      <form
        style={{
          display: 'flex',
          gap: '16px',
          width: '100%',
          alignItems: 'end',
          flexWrap: 'wrap',
        }}
        onSubmit={handleSubmit}
      >
        <Input label="Your child's name (optional)" />
        <Input
          label='Birth date/due date'
          type='date'
          name='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Button type='submit'>
          {selectedProduct === products[0] ? 'Show my kit' : 'Subscribe now'}
        </Button>
      </form>
      <div
        style={{
          display: 'flex',
          gap: '16px',
          width: '100%',
          flexWrap: 'wrap',
        }}
      >
        <SellingPoint>Free shipping</SellingPoint>
        <SellingPoint>Cancel Anytime</SellingPoint>
        <SellingPoint>Satisfaction Guaranteed</SellingPoint>
      </div>
      <Awards />
    </ProductDetailContainer>
  );
};

export default ProductDetailArea;
