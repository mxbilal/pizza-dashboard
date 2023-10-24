import React from 'react'
import { Button } from '@mui/material'
import './LMTButton.scss'

const LMTButton = ({ content, onClick, type, ...props }) => {
  return (
    <Button {...props} className='lpt-button' type={type} variant="contained" onClick={onClick}>{content}</Button>
  )
}

export default LMTButton
