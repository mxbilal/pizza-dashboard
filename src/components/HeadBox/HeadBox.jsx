import { Box, Typography } from '@mui/material'
import React from 'react'
import HeaderLogoLAMT from '../../assets/img/login-logo.png'

const HeadBox = ({ title }) => {
  return (
    <Box className="register-head">
      <img width={200} className='logo' src={HeaderLogoLAMT} />
      {title && <Typography variant="h5" gutterBottom> {title} </Typography>}
    </Box>
  )
}

export default HeadBox
