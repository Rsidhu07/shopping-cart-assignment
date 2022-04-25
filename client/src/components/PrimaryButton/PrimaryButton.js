import React from 'react'
import { func, string } from 'prop-types'
import css from './PrimaryButton.module.css'

const PrimaryButton = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>{label}</button>
  )
}

PrimaryButton.propTypes = {
  label: string.isRequired,
  onClick: func.isRequired
}

export default PrimaryButton