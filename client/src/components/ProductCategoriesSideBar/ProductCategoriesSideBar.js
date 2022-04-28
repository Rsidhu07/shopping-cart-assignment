import React from 'react';
import PropTypes from 'prop-types';
import css from './ProductCategoriesSideBar.module.css';
import useFetch from '../../utils/useFetch';
import { BASE_URL } from '../../utils/constants';

const ProductCategoriesSideBar = ({onCategoryClick, selectedCategoryId}) => {
  const { isLoading: loadingCategories, apiData: categoriesData } = useFetch(`${BASE_URL}categories`,'productCategories');
  return (
    <aside className={css.ProductCategoriesSideBar}>
        {(loadingCategories || !categoriesData) ? 'loading...':
          categoriesData.filter(({enabled})=>enabled).map(({name,id})=>{
            return(
              <p key={id} onClick={() => onCategoryClick(id)} className={(selectedCategoryId === id) ? css.selectedCat : undefined}>{name}</p>
            )
          })
        }
    </aside>
  );
};

ProductCategoriesSideBar.propTypes = {};

export default ProductCategoriesSideBar;