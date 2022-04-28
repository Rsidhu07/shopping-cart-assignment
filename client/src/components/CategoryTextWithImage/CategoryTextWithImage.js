import React from 'react'
import { string, func } from 'prop-types'
import css from './CategoryTextWithImage.module.css';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const CategoryTextWithImage = ({ imageUrl, name, label, description, onClick, ind }) => {

  const imageEl = (
    <img className={css.imageCategory} src={imageUrl} alt={name} width='300' height='160' />
  );
  const detailsEl = (
    <div className={css.categoryDescriptionContainer}>
      <h3>{name}</h3>
      <p>{description}</p>
      <PrimaryButton
        label={`Explore ${label}`}
        onClick={onClick}
      />
    </div>
  )
  return (
    <div className={css.CategoryTextWithImage}>
      {(ind % 2 === 0) ? imageEl : detailsEl}
      {(ind % 2 === 0) ? detailsEl : imageEl}
    </div>
  )
}

CategoryTextWithImage.propTypes = {
  name: string.isRequired,
  label: string.isRequired,
  description: string.isRequired,
  onClick: func.isRequired
}

export default CategoryTextWithImage