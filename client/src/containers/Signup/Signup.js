import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import css from './Signup.module.css'
import convertFormDataToArray from '../../utils/convertFormDataToArray';
import updateFormDataInLocalState from '../../utils/updateFormDataInLocalState';
import { withRouter } from 'react-router-dom';
import { initialState } from './initialState';
import Input from '../../components/Input/Input';

const Signup = (props) => {

  if (props?.loggedIn) props.history.push('/');

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
    
    const { name: { value: name }, password: { value: password }, email: { value: email } } = formValues.formData;
    props.setIsUserLoggedIn(true);
    localStorage.setItem('isUserLoggedIn', true);
    localStorage.setItem('userData', JSON.stringify({ name, email, password }));
    props.history.push('/dash-board');
  };


  const form = (
    <form className={css['login-form']}>
      {convertFormDataToArray(formValues.formData).map(formElement => {
        const { id } = formElement;
        const { 
          elementType,
          elementConfig,
          value,
          validation,
          valid,
          touched
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
            changed={e => inputChangeHandler(e, id, formValues.formData)}
          />
        );
      })}
      <button disabled={!disabled} onClick={onUserLogin}>Login</button>
    </form>
  )


  return (
    <div className={css.Home}>
      {form}
    </div>
  );
}

Signup.propTypes = {}

export default withRouter(Signup);