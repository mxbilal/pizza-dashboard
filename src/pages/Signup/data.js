import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  country: Yup.string().required('Country is required'),
  state: Yup.string().required('State is required'),
  city: Yup.string().required('City is required'),
  address: Yup.string().required('Address is required'),
  zipcode: Yup.string().required('Zip Code is required'),
  phone: Yup.string().required('Zip Code is required'),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

export const initialValues = {
  email: '',
  first_name: '',
  last_name: '',
  country: '',
  state: '',
  city: '',
  password: '',
  password_confirmation: '',
  address: '',
  zipcode: '',
  phone: ''
};
export const formFields = [
  {
    title: "Personal Information",
    fields: [
      { name: 'email', label: 'Email', type: 'email' },
      { name: 'first_name', label: 'First Name', type: 'text' },
      { name: 'last_name', label: 'Last Name', type: 'text' },
      { name: 'phone', label: 'Phone', type: 'tel' },
      { name: 'password', label: 'Password', type: 'password' },
      { name: 'password_confirmation', label: 'Confirm Password', type: 'password' }
    ]
  },
  {
    title: "Address Information",
    fields: [
      { name: 'address', label: 'Address', type: 'text' },
      { name: 'country', label: 'Country', type: 'text' },
      { name: 'state', label: 'State', type: 'text' },
      { name: 'city', label: 'City', type: 'text' },
      { name: 'zipcode', label: 'Zip Code', type: 'number' }
    ]
  }
];