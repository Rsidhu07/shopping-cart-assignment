import React from 'react';
import PropTypes from 'prop-types';
import css from './Product.module.css';
import PrimaryButton from '../PrimaryButton/PrimaryButton'

const Product = ({ name, description, imageURL, price, onBuyNow }) => {
  return (
    <div className={css.Product}>
      <h2 className={css.name}>{name}</h2>
      <img src={imageURL} alt={name} width='210' height='210'/>
      <p className={css.description}>{description.length > 128 ? description.slice(0,128) : description}</p>
      <div className={css.priceAndBuyContainer}>
        <p>{`MRP Rs ${price}`}</p>
        <PrimaryButton
          label='Buy Now'
          onClick={onBuyNow}
        />
      </div>
    </div>
  )
}

Product.propTypes = {}

export default Product