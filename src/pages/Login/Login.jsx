import React, { useState } from 'react'
import {
  Typography,
  Box,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { isValidEmail, isValidPassword, showAlert } from '../../utils';
import LPTButton from '../../components/LMTButton/LMTButton';
import './Login.scss'
import { LAMT_API } from '../../api'
import { Link, useNavigate } from 'react-router-dom';
import LMTLoader from '../../components/LMTLoader/LMTLoader';

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState({
    value: '',
    error: false,
    focus: false,
  })
  const [password, setPassword] = useState({
    value: '',
    error: false,
    focus: false,
  })
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail({ value: newEmail, error: !isValidEmail(newEmail) });
  };
  const handlePasswordChange = (event) => {
    const newPass = event.target.value;
    setPassword({ value: newPass, error: !isValidPassword(newPass) });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (!email.error) {
      setLoading(true)
      const data = { email: email.value, password: password.value }
      try {
        let loginResponse = await LAMT_API.endpoints.superAdmin.login(data);
        if (loginResponse?.data?.success) {
          if (Array.isArray(loginResponse?.data?.data)) {
            showAlert.success(loginResponse?.data?.message)
            navigate('/two-factor', { state: { data } })
          }
          else {
            showAlert.success(loginResponse?.data?.message)
            localStorage.setItem("authToken", loginResponse?.data?.data?.token)
            window.location.reload()
          }
        }
        else {
          showAlert.failure(loginResponse?.response?.data?.message)
        }
      } catch (err) {
        console.log(err)
      }
      setLoading(false)
    }
  }
  return (
    <div className='login-main'>
      <div className='login-container'>
        {
          loading ? <LMTLoader />
            : <Box className='login-inner'>
              <Box className="login-head">
                <img width={50} height={50} className='logo' alt='logo' src='/favicon.png' />
                <Typography variant="h4" gutterBottom> Welcome Admin</Typography>
                <Typography variant="subtitle1" gutterBottom> Please Login to continue to dashboard </Typography>
              </Box>
              <form onSubmit={handleSubmit}>
                <TextField
                  label='Email'
                  value={email.value}
                  onChange={handleEmailChange}
                  required
                  fullWidth
                  error={email.error}
                  helperText={!email.error ? '' : 'Invalid email format'}
                />
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
                <Link to={'/forget-password'} underline="none">
                  Forget Password?
                </Link>
                <LPTButton content="Continue" type={"submit"} />
              </form>
            </Box>
        }
      </div>
    </div>
  )
}

export default Login
