import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import css from './Signup.module.css'
import convertFormDataToArray from '../../utils/convertFormDataToArray';
import updateFormDataInLocalState from '../../utils/updateFormDataInLocalState';
import { initialState } from './initialState';
import Input from '../../components/Input/Input';
import {useNavigate} from 'react-router-dom';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

const Signup = (props) => {

  const  navigate  = useNavigate();

  if (props?.isUserLoggedIn) navigate('/');

  const [formValues, setFormValues] = useState(initialState);

  const disabled = formValues.isValidForm;

  const inputChangeHandler = (event, id, formData) => {
    const { updatedFormData, formIsValid = false } = updateFormDataInLocalState(event, id, formData);

    setFormValues({
      ...formValues,
      formData: updatedFormData,
      isValidForm: formIsValid
    });
  };

  const onUserLogin = (e) => {
    e.preventDefault();
    
    const { firstName: { value: fName },lastName: { value: lName }, password: { value: password }, email: { value: email } } = formValues.formData;
    props.setIsUserLoggedIn(true);
    localStorage.setItem('isUserLoggedIn', true);
    localStorage.setItem('userData', JSON.stringify({ fName, lName, email, password }));
    navigate('/');
  };


  const form = (
    <form className={css.loginForm}>
      {convertFormDataToArray(formValues.formData).map(formElement => {
        console.log('formElement***',{formElement})
        const { id } = formElement;
        const { 
          elementType,
          elementConfig,
          value,
          validation,
          valid,
          touched,
        } = formElement.config;

        return (
          <Input
            key={id}
            elementType={elementType}
            elementConfig={elementConfig}
            value={value}
            valid={valid}
            invalid={!valid}
            touched={touched}
            shouldValidate={validation}
            name={id}
            label={elementConfig?.label}
            changed={e => inputChangeHandler(e, id, formValues.formData)}
          />
        );
      })}
      <PrimaryButton label='Signup' disabled={!disabled} onClick={onUserLogin}>Login</PrimaryButton>
    </form>
  )


  return (
    <div className={css.Signup}>
      <h3>Signup</h3>
      {form}
    </div>
  );
}

Signup.propTypes = {}

export default Signup;