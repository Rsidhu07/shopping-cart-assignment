import React from 'react'
import PropTypes from 'prop-types'
import useFetch from '../../utils/useFetch';
import { BASE_URL } from '../../utils/constants';
import css from './Products.module.css';
import Product from '../../components/Product/Product';

const Products = props => {

  const { isLoading, apiData: productsData } = useFetch(`${BASE_URL}products`);

  console.log('products****', { productsData });
  return (
    <div className={css.Products}>
      {isLoading ? 'loading products...' :
        productsData && productsData.map(({ id, ...rest }) => {
          return (
            <Product
              key={id}
              onBuyNow={() => null}
              {...rest}
            />
          )
        })
      }
    </div>
  )
}

Products.propTypes = {}

export default Products;