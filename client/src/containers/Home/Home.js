import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import css from './Home.module.css';
import SimpleImageSlider from "react-simple-image-slider";
import useFetch from '../../utils/useFetch';
import CategoryTextWithImage from '../../components/CategoryTextWithImage/CategoryTextWithImage';

const BASE_URL = 'http://localhost:5000/'


// const categoryImagesWithDescription = [
//   {url : baby, heading:, btnLabel:, description:, onClick:}
// ];

const Home = props => {

  const { isLoading, apiData: bannersData } = useFetch(`${BASE_URL}banners`);
  const { isLoading: loadingCategories, apiData: categoriesData } = useFetch(`${BASE_URL}categories`);

  const bannersUrl = (bannersData && Array.isArray(bannersData)) ? bannersData.map(({ bannerImageUrl }) => {
    return {
      url: bannerImageUrl
    }
  }) : [];

  return (
    <div className={css.Home}>

      {isLoading ? 'loding banners....' :
        <SimpleImageSlider
          width={1024}
          height={250}
          images={bannersUrl}
          showBullets={true}
          showNavs={true}
        />}
      {loadingCategories ? 'loading categories....' :
        categoriesData && categoriesData.filter(({enabled})=> enabled).map(cat => {
          return (
            <CategoryTextWithImage
              {...cat}
              label={cat.key}
              onClick={() => null}
            />
          )
        })
      }
    </div>
  )
};

Home.propTypes = {};

export default Home;