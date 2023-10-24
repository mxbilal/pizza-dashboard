import React, { useState } from 'react'
import {
  Typography,
  Box,
} from '@mui/material'
import './Signup.scss'
import '../Login/Login.scss'
import { LAMT_API } from '../../api'
import "react-toastify/dist/ReactToastify.css";
import LMTForm from '../../components/LMTForm/LMTForm';
import { showAlert } from '../../utils';
import { formFields, initialValues, validationSchema } from './data'
import HeadBox from '../../components/HeadBox/HeadBox'
import {  useNavigate } from 'react-router-dom';
const Register = () => {
  const navigate = useNavigate()
  async function onSubmit(event) {
    try {
      if (true) {
        let register = await LAMT_API.endpoints.clientAdmin.register(event);
        if(register?.data?.success){
          showAlert.success(register?.data?.message)
          navigate('/login')
        } else {
          showAlert.success(register?.response?.data?.message)
        }
        
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='register-main'>
      <div className='register-container'>
        <Box className='register-inner'>
          <HeadBox title={"Admin Registration"} />
          <LMTForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            formFields={formFields}
            onSubmit={onSubmit}
          />
        </Box>
      </div>
    </div>
  )
}

export default Register
