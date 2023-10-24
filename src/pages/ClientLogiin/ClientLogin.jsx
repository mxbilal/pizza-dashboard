import React, { useState } from 'react'
import {
  Typography,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { isValidEmail, isValidPassword, showAlert } from '../../utils';
import LPTButton from '../../components/LMTButton/LMTButton';
import '../Login/Login.scss'
import { LAMT_API } from '../../api'
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import LMTModal from '../../components/LMTModal/LMTModal';
import TopLogoImage from '../../assets/img/login-logo.png'
import './ClientLogin.scss'

const ClientLogin = () => {
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
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail({ value: newEmail, error: !isValidEmail(newEmail) });
  };
  const handlePasswordChange = (event) => {
    const newPass = event.target.value;
    setPassword({ value: newPass, error: !isValidPassword(newPass) });
  };
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!email.error) {
      try {
        let loginResponse = await LAMT_API.endpoints.clientAdmin.login({ email: email.value, password: password.value });
        if (loginResponse?.data?.success) {
          localStorage.setItem("authToken", loginResponse?.data?.data?.token)
          showAlert.success(loginResponse?.data?.message);
          window.location.reload()
        }
        else {
          showAlert.failure(loginResponse?.response?.data?.message)
        }

      } catch (err) {
        console.log(err)
      }
    }
  }
  const handleGoogle = async () => {
    if (email.value !== '' && !email.error) {
      setLoading(true)
      try {
        let result = await LAMT_API.endpoints.clientAdmin.withGoogle({ email: email.value, password: email.value });
        console.log("res", result)
        if (result?.status === 200) {
          setLoading(false)
          window.open(result.data?.url, "_blank")
        }
        else {
          setLoading(false)
          setOpen(false)
          showAlert.failure(result?.message)
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
    responseMessage = (event) => {
      console.log(event)
    },
    errorMessage = (err) => console.log(err)
  const withGoogleTemplate = <>
    <TextField
      label='Email'
      value={email.value}
      onChange={handleEmailChange}
      required
      fullWidth
      error={email.error}
      helperText={!email.error ? '' : 'Invalid email format'}
    />
    <Button onClick={handleGoogle}>Submit</Button>
  </>

  return (
    <div className='login-main'>
      <div className='login-container'>
        <Box className='login-inner'>
          <Box className="login-head">
            <img width={200} className='logo' src={TopLogoImage} />
            <Typography variant="subtitle1" gutterBottom> Login to continue to LAMT</Typography>
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
            <Link to={'/forget-password'} underline="none" className='forget-password-link'>
              Forget Password?
            </Link>
            <LPTButton content="Continue" type={"submit"} className='btn-login-submit'/>
          </form>
          <Box className='first-login'>
            <Typography variant="subtitle1" gutterBottom> Don't have an account? </Typography>
            <Link to={'/signup-type'} underline="none" className='singup-sign'>
              Sign up
            </Link>
          </Box>
          <Typography variant="subtitle1" gutterBottom className='option-or'> OR</Typography>
          <Button variant='outlined' onClick={() => setOpen(true)} className='btn-login-with-google'> Login with Google</Button>
          {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage} /> */}
        </Box>
      </div>
      <LMTModal
        open={open}
        handleClose={() => setOpen(e => !e)}
        children={withGoogleTemplate}
        loading={loading}
      />
    </div>
  )
}

export default ClientLogin
