import React, { useState } from 'react'
import {
  Typography,
  Box,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { isValidPassword, showAlert } from '../../utils';
import LPTButton from '../../components/LMTButton/LMTButton';
import './ResetPassword.scss'
import { LAMT_API } from '../../api'
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LMTLoader from '../../components/LMTLoader/LMTLoader';
import TopLogoImage from '../../assets/img/login-logo.png'

const ResetPassword = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { search } = location
  const urlParam = new URLSearchParams(search)
  const token = urlParam.get('token')
  const email = urlParam.get('email')
  const [password, setPassword] = useState({
    value: '',
    error: false,
    focus: false,
  })
  const [confirmPassword, setConfirmPassword] = useState({
    value: '',
    error: false,
    focus: false,
  })
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);
  const handlePasswordChange = (event) => {
    const newPass = event.target.value;
    setPassword({ value: newPass, error: !isValidPassword(newPass) });
  };


  const handleConfirmPasswordChange = (event) => {
    const newPass = event.target.value;
    setConfirmPassword({ value: newPass, error: password.value !== newPass });
  };
  async function handleSubmit(event) {
    event.preventDefault();
    if (true) {
      setLoading(true)
      try {
        let resetPassword = await LAMT_API.endpoints.superAdmin.resetPassword({
          email: email,
          password: password.value,
          password_confirmation: confirmPassword.value,
          token,
        });
        if (resetPassword?.status === 200) {
          showAlert.success(resetPassword?.response?.data?.message)
          navigate('/login')
        }
        else {
          showAlert.failure(resetPassword?.response?.data?.message)
        }

      } catch (err) {
        console.log(err)
      }
      setLoading(false)
    }
  }
  return (
    <div className='login-main'>
      {loading ? <LMTLoader /> : <div className='login-container'>
        <Box className='login-inner'>
          <Box className="login-head">
            <img width={200} className='logo' src={TopLogoImage} alt='logo' />
            <Typography variant="h6" gutterBottom> Please Enter the Code </Typography>
          </Box>
          <form onSubmit={handleSubmit}>

            <TextField
              fullWidth
              required
              type={showPassword ? 'text' : 'password'}
              InputProps={
                {
                  endAdornment: <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              }
              onChange={handlePasswordChange}
              label="Password"
              error={password.error}
              helperText={!password.error ? '' : 'Password must be 8 characters, with 1 capital letter, 1 number, and 1 special character'}
            />
            <TextField
              fullWidth
              required
              type={showConfirmPassword ? 'text' : 'password'}
              InputProps={
                {
                  endAdornment: <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              }
              onChange={handleConfirmPasswordChange}
              label="New Password"
              error={confirmPassword.error}
              helperText={!confirmPassword.error ? '' : 'Both Password must be same!'}
            />
           
            <LPTButton content="Submit" type={"submit"} style={{margin:"5% 0"}}/>
           
          </form>
          {/* <Box className='first-login back-to-reset-login'>
            <Link to={'/login'} underline="none" className='btn-reset'>
              Back to Login
            </Link>
          </Box> */}
        </Box>
      </div>}?
    </div>
  )
}

export default ResetPassword
