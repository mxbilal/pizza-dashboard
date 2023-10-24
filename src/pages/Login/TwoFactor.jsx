import React, { useState } from 'react'
import {
  Typography,
  Box,
  TextField,
} from '@mui/material'
import { showAlert } from '../../utils';
import LPTButton from '../../components/LMTButton/LMTButton';
import './Login.scss'
import { LAMT_API } from '../../api'
import { useLocation, useNavigate } from 'react-router-dom';
import LMTLoader from '../../components/LMTLoader/LMTLoader';

const TwoFactor = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { data } = location.state
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  async function handleSubmit(event) {
    event.preventDefault();
    if (code !== '') {
      setLoading(true)
      try {
        let loginResponse = await LAMT_API.endpoints.superAdmin.twoFactor({ google2fa_verification: code });
        if (loginResponse?.data?.success) {
          let data2 = { ...data }
          showAlert.success(loginResponse?.data?.message)
          navigate('/admin/login')
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
        {loading ? <LMTLoader /> : <Box className='login-inner'>
          <Box className="login-head">
            <img width={50} height={50} className='logo' alt='logo' src='/favicon.png' />
            <Typography variant="h4" gutterBottom> Two Factor Authentication</Typography>
            <Typography variant="subtitle1" gutterBottom> Please enter code sent to your Email </Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <TextField
              label='code'
              value={code}
              placeholder='please enter code'
              onChange={(e) => setCode(e.target.value)}
              required
              fullWidth
            />
            <LPTButton content="Continue" type={"submit"} />
          </form>
        </Box>}
      </div>
    </div>
  )
}

export default TwoFactor
