import React from 'react';
import PropTypes from 'prop-types';
import css from './CartItem.module.css';
const CartItem = ({ imageURL, name, numberOfItems, itemPrice, totalPrice, stock , quantityAdded,onIncQuantity,onDecQuantity}) => {
  return (
    <div className={css.CartItem}>
      <img src={imageURL} alt={name} width='80' height='80' />
      <div className={css.productDetailsContainer}>
        <p>{name}</p>
        <div className={css.itemsAndPrice}>
          <div className={css.items}>
            <p className={css.addDecQty} onClick={onDecQuantity}>-</p>
            <p>{quantityAdded}</p>
            <p className={css.addDecQty} onClick={onIncQuantity}>+</p>
            <p>X</p>
            <p>Rs{itemPrice}</p>
          </div>
          <p>Rs {totalPrice}</p>
        </div>
      </div>

    </div>
  )
}

CartItem.propTypes = {}

export default CartItem