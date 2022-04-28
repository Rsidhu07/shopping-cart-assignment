import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Cart.module.css';
import CartItem from '../CartItem/CartItem';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const getTotalAmount =p =>{ 
  const totalPrices = p.map(({quantityAdded,price})=>{
    return (quantityAdded* price);
  });
  return totalPrices.reduce((acc, price) => acc + price, 0);
}

const Cart = ({ productsInCart }) => {

  const [products, setProducts] = useState(productsInCart.map(p => ({ quantityAdded: 1, ...p })));
 
  const totalAmount = getTotalAmount(products);

  const onIncQuantity = (index) => {
    const newProducts = [...products];
    const currentItemQuantity = newProducts[index]?.quantityAdded + 1;
    const currentItemPrice = newProducts[index]?.price;
    newProducts[index] = {
      ...newProducts[index],
      quantityAdded: currentItemQuantity,
      totalPrice: currentItemPrice * currentItemQuantity
    };

    console.log('newProducts******', { newProducts, products, qty: newProducts[index]?.quantityAdded + 1 })
    setProducts(newProducts);
  };

  const onDecQuantity = (index, id) => {
    let newProducts = [...products];
    let currentItemQuantity = newProducts[index]?.quantityAdded;
    const currentItemPrice = newProducts[index]?.price;
    if (currentItemQuantity) {
      currentItemQuantity--
      newProducts[index] = {
        ...newProducts[index],
        quantityAdded: currentItemQuantity,
        totalPrice: currentItemPrice * currentItemQuantity
      };
    } else {
      newProducts = newProducts.filter(p => p.id !== id)
    }
    setProducts(newProducts);
  };

  return (
    <div className={css.Cart}>
      {products && products.map((p, ind) => {
        const { imageURL, name, price, stock, id, quantityAdded, totalPrice } = p;
        return (
          <CartItem
            imageURL={imageURL}
            name={name}
            itemPrice={price}
            stock={stock}
            key={id}
            id={id}
            quantityAdded={quantityAdded}
            onIncQuantity={() => onIncQuantity(ind, id)}
            onDecQuantity={() => onDecQuantity(ind, id)}
            totalPrice={totalPrice}
          />
        )
      })}
      <div className={css.checkoutContainer}>
        <p>Promo code can be applied on payment page</p>
        <PrimaryButton
          label={`Proceed to Checkout             Rs ${totalAmount}`}
          onClick={() => null}
        />
      </div>
    </div>
  )
}

Cart.propTypes = {}

export default Cart