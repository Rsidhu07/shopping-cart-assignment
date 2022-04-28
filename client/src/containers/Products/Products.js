import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useFetch from '../../utils/useFetch';
import { BASE_URL } from '../../utils/constants';
import css from './Products.module.css';
import Product from '../../components/Product/Product';
import ProductCategoriesSideBar from '../../components/ProductCategoriesSideBar/ProductCategoriesSideBar';
import { useSelector } from 'react-redux';

const Products = props => {

  const { cartItems } = useSelector(state => state);
  const { isLoading, apiData: productsData } = useFetch(`${BASE_URL}products`, 'products');
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const onCategoryClick = id => {
    setSelectedCategoryId(id);
  }

  const productMapFunc = ({ id, ...rest }) => {
    const isAdded = cartItems.includes(id);
    return (
      <Product
        key={id}
        id={id}
        isAdded={isAdded}
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