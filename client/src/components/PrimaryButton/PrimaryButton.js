import React from 'react'
import { func, string } from 'prop-types'
import css from './PrimaryButton.module.css'

const PrimaryButton = ({ label, onClick,...rest }) => {
  return (
    <button className={css.PrimaryButton} onClick={onClick} {...rest}>{label}</button>
  )
}

PrimaryButton.propTypes = {
  label: string.isRequired,
  onClick: func.isRequired
}

export default PrimaryButton