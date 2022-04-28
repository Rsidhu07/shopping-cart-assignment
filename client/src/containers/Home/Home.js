import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import css from './Home.module.css';
import SimpleImageSlider from "react-simple-image-slider";
import useFetch from '../../utils/useFetch';
import CategoryTextWithImage from '../../components/CategoryTextWithImage/CategoryTextWithImage';
import { BASE_URL } from '../../utils/constants';
import { useSelector } from 'react-redux';


// const categoryImagesWithDescription = [
//   {url : baby, heading:, btnLabel:, description:, onClick:}
// ];

const Home = props => {

  const state = useSelector(state => state);

  console.log('stae*****',{state})

  const { isLoading, apiData: bannersData } = useFetch(`${BASE_URL}banners`,'bannersData');
  const { isLoading: loadingCategories, apiData: categoriesData } = useFetch(`${BASE_URL}categories`,'productCategories');
  
  const bannersUrl = (bannersData && Array.isArray(bannersData)) ? bannersData.map(({ bannerImageUrl }) => {
    return {
      url: bannerImageUrl
    }
  }) : null;

  return (
    <div className={css.Home}>

      {(isLoading || !bannersUrl) ? 'loding banners....' :
        <SimpleImageSlider
          width={'80%'}
          height={'42%'}
          images={bannersUrl}
          showBullets={true}
          showNavs={true}
        />}
        <div className={css.categories}>

      {loadingCategories ? 'loading categories....' :
        categoriesData && categoriesData.filter(({enabled})=> enabled).map((cat,ind) => {
          return (
            <CategoryTextWithImage
              {...cat}
              key={cat.id}
              label={cat.key}
              ind={ind}
              onClick={() => null}
            />
          )
        })
      }
        </div>
    </div>
  )
};

Home.propTypes = {};

export default Home;