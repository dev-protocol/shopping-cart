import React from 'react';
import { ProductsLoader } from './ProductsLoader';

interface ProductsProps {
  isLoading: boolean;
  children?: React.ReactNode;
}

export const Products: React.FunctionComponent<ProductsProps> = ({ isLoading, children }) => (
  <section className="products">
    { isLoading ? (
    <>
      <h1 className="main">Loading shopping cart, please wait...</h1>
      <ProductsLoader />
    </>
    ) : (
    <>
      <h1 className="main">Shopping cart</h1>
      <ul className="products-list tableHead">
        <li className="products-list-title row">
          <div className="col-product">Product details</div>
          <div className="col-quantity">Quantity</div>
          <div className="col-price">Price</div>
          <div className="col-total">Total</div>
        </li>
      </ul>
      {children}
    </>
    )}
  </section>
);