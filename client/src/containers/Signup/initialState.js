export const initialState = {
  formData: {
    firstName: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Your first name',
        label:'First Name'
      },
      value: '',
      validation: {
        required: true,
      },
      valid: false,
      touched: false
    },

    lastName: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Your last name',
        label:'Last Name'
      },
      value: '',
      validation: {
        required: true,
      },
      valid: false,
      touched: false
    },

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
    
    confirmPassword: {
      elementType: 'input',
      elementConfig: {
        type: 'password',
        placeholder: 'please confirm password',
        label:'Confirm Password'
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
