import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useFetch from '../../utils/useFetch';
import { BASE_URL } from '../../utils/constants';
import css from './Products.module.css';
import Product from '../../components/Product/Product';
import ProductCategoriesSideBar from '../../components/ProductCategoriesSideBar/ProductCategoriesSideBar';

const Products = props => {

  const { isLoading, apiData: productsData } = useFetch(`${BASE_URL}products`, 'products');
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const onCategoryClick = id => {
    setSelectedCategoryId(id);
  }

  console.log('products****', { productsData });
  const productMapFunc = ({ id, ...rest }) => {
    return (
      <Product
        key={id}
        onBuyNow={() => null}
        {...rest}
      />
    )
  }
  return (
    <div className={css.Products}>
      <ProductCategoriesSideBar
        onCategoryClick={onCategoryClick}
        selectedCategoryId={selectedCategoryId}
      />
      <div className={css.allProducts}>
        {isLoading ? 'loading products...' :
          productsData &&
          (selectedCategoryId ? productsData.filter((pd) => pd.category === selectedCategoryId).map(productMapFunc) : productsData.map(productMapFunc))
        }
      </div>
    </div>
  )
}

Products.propTypes = {}

export default Products;