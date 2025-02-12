export const signInInitialState = {
    formData: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Registered Email ',
          label:'Email'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false
      },
  
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Your password',
          label:'Password'
        },
        value: '',
        validation: {
          required: true,
          minLength: 8
        },
        valid: false,
        touched: false
      },
    },
    isValidForm: false
  };
  