import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Nav.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import Cart from '../Cart/Cart';
import { BASE_URL } from '../../utils/constants';
import useFetch from '../../utils/useFetch';

const Nav = props => {
  const { cartItems } = useSelector(state => state);
  const { isUserLoggedIn, userData = {}, setIsUserLoggedIn } = props;
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { isLoading, apiData: productsData } = useFetch(`${BASE_URL}products`, 'products');

  const productsInCart = productsData ? productsData.filter(p => cartItems.includes(p.id)) : [];

  const cartModal = (
    <Modal 
    usePortal onClose={() => setIsCartOpen(false)}
    title={`My Cart(${productsInCart.length} item)`}
    >
      <Cart
        productsInCart={productsInCart}
      />
    </Modal>
  )
  return (
    <header className={css.Nav}>
      <div className={css.navLeftContainer}>
        <img src='/static/images/logo_2x.png' alt='logo' width='150' height='70' />
        <nav className={css.leftNav}>
          <ul className={css.mainNav}>
            <NavLink to='/'>
              <li>Home</li>
            </NavLink>
            <NavLink to='/products'>
              <li>Products</li>
            </NavLink>
          </ul>
        </nav>
      </div>
      <div className={css.navRightContainer}>
        <nav className={css.rightNav}>
          <ul className={css.registerLoginNav}>
            {!isUserLoggedIn ?
              <>
                <NavLink to='/signin'>
                  <li>SignIn</li>
                </NavLink>
                <NavLink to='/register'>
                  <li>Register</li>
                </NavLink>
              </> :
              <>
                <li>Hello {userData?.fName}</li>
                <li onClick={() => {
                  setIsUserLoggedIn(false);
                  navigate('/');
                }}>Logout</li>
              </>
            }
          </ul>
        </nav>
        <div className={css.cartContainer} onClick={() => setIsCartOpen(true)}>
          <svg className={css.cartSvg} version="1.1" id="Layer_1" focusable="false" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px" y="0px" viewBox="0 0 24 24" style={{ enableBackground: 'new 0 0 24 24', width: '40px', height: '40px' }} xmlSpace="preserve">
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
          {/* <img src='static/images/cart.svg' alt='cart' width='40' height='40'/> */}
          <p>{cartItems.length} Items</p>
        </div>
      </div>
      {isCartOpen && cartModal}
    </header>
  )
};

Nav.propTypes = {};

export default Nav;