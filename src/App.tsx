import React, { useState } from 'react';
import Breadcrumbs from './components/Breadcrumbs';
import Carousel from './components/Carousel';
import ProductDetailArea from './pages/ProductDetail';
import Column from './components/Column';
import ProductContext from './components/ProductContext';
import { products } from './products';
import './styles/globals.css';

function App() {
  const [selectedProduct, selectProduct] = useState(products[0]);

  return (
    <ProductContext.Provider value={{ selectedProduct, selectProduct }}>
      <div>
        <main>
          <Breadcrumbs items={['Home', 'Play Kits', selectedProduct.title]} />
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '3em',
            }}
          >
            <Column>
              <Carousel images={selectedProduct.images} />
            </Column>
            <Column>
              <ProductDetailArea />
            </Column>
          </div>
        </main>
      </div>
    </ProductContext.Provider>
  );
}

export default App;
