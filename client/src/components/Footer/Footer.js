import React from 'react';
import PropTypes from 'prop-types';
import css from './Footer.module.css';

const Footer = props => {
  return (
    <footer className={css.Footer}>
      <p>Copyright 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd</p>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;