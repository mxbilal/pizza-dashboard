import React, { useState } from 'react'
import {
  Typography,
  Box,
  TextField,
} from '@mui/material'
import { isValidEmail, showAlert } from '../../utils';
import LPTButton from '../../components/LMTButton/LMTButton';
import './ForgetPassword.scss'
import { LAMT_API } from '../../api'
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from 'react-router-dom';
import LMTLoader from '../../components/LMTLoader/LMTLoader';
import TopLogoImage from '../../assets/img/login-logo.png'

const ForgetPassword = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState({
    value: '',
    error: false,
    focus: false,
  })
  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail({ value: newEmail, error: !isValidEmail(newEmail) });
  };

  async function handleSubmit(event) {
    setLoading(true)
    try {
      event.preventDefault();
      if (!email.error) {
        let forgetPassword = await LAMT_API.endpoints.superAdmin.forgetPassword({ email: email.value });
        console.log("forgetPassword", forgetPassword)
        if (forgetPassword.status === 200) {
          showAlert.success(forgetPassword?.data?.message)
          setTimeout(() => {
            navigate('/login')

          }, 2500)
        } else {
          showAlert.failure(forgetPassword?.response?.data?.message)
        }

      }
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }
  return (
    <div className='forget-main'>
      {loading ? <LMTLoader /> : <div className='forget-container'>
        <Box className='forget-inner'>
          <Box className="forget-head">
            <img width={200} className='logo' src={TopLogoImage} alt='logo'/>
            <Typography variant="h6" gutterBottom> Forgot Password? </Typography>
           
          </Box>
          <form onSubmit={handleSubmit}>
            <TextField
              className='forget-password-input'
              label='Email'
              value={email.value}
              onChange={handleEmailChange}
              required
              fullWidth
              error={email.error}
              helperText={!email.error ? '' : 'Invalid email format'}
            />
            <LPTButton disabled={loading} content="Send Code" type={"submit"} />
          </form>
          <Box className='first-login back-to-login'>
            <Link to={'/login'} underline="none" className='btn-btl'>
              Back to Login
            </Link>
          </Box>
        </Box>
      </div>}
    </div>
  )
}

export default ForgetPassword
