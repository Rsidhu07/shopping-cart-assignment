import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import css from './SignIn.module.css';
import convertFormDataToArray from '../../utils/convertFormDataToArray';
import { useNavigate } from 'react-router-dom';
import { signInInitialState } from './initialState';
import Input from '../../components/Input/Input';
import { USER_DATA } from '../../utils/constants';
import { getDataFromLocalStorage } from '../../utils/getDataFromLocalStorage';
import updateFormDataInLocalState from '../../utils/updateFormDataInLocalState';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

const SignIn = props => {
    const  navigate  = useNavigate();

    if (props?.isUserLoggedIn) navigate('/');

    const [formValues, setFormValues] = useState(signInInitialState);
    const [loginError, setLoginError] = useState(false);

    useEffect(()=>{
        let timeOut;
        if(loginError){
            timeOut =setTimeout(() => {
                setLoginError(false)
            }, 3000);
        }
        return ()=>{
            if(timeOut){
                clearTimeout(timeOut);
            }
        }
    },[loginError]);

    const disabled = formValues.isValidForm;

    const inputChangeHandler = (event, id, formData) => {
      const { updatedFormData, formIsValid = false } = updateFormDataInLocalState(event, id, formData);
  
      setFormValues({
        ...formValues,
        formData: updatedFormData,
        isValidForm: formIsValid
      });
    };

    const onUserLogin = ()=> {
        const { formData: { email, password } } = formValues;
        const userData = getDataFromLocalStorage(USER_DATA);
        console.log('useData***********', userData)
        if(userData && userData.hasOwnProperty('email') && userData.hasOwnProperty('password')){
            const { email: userEmail, password: userPass } = userData;
            if (userEmail === email.value && userPass === password.value){
                props.setIsUserLoggedIn(true);
                localStorage.setItem('isUserLoggedIn', true);
               navigate('/')
            } 
        } else {
          setLoginError(true);
        }
    }

    const form = (
        <form className={css.loginForm}>
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
                label={elementConfig?.label}
                changed={e => inputChangeHandler(e, id, formValues.formData)}
              />
            );
          })}
          <PrimaryButton label='Login' disabled={!disabled} onClick={(event)=> {
            event.preventDefault();
            onUserLogin()
            }}>Login</PrimaryButton>
        </form>
      )
    
    
      return (
        <div className={css.SignIn}>
          <h3>Signin</h3>
          {form}
          {loginError&&<p className={css.loginError}>Incorrect login details.</p>}
        </div>
      );
}

SignIn.propTypes = {}

export default SignIn;