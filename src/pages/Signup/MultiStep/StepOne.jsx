import { Box } from '@mui/material'
import React from 'react'
import HeadBox from '../../../components/HeadBox/HeadBox'
import LMTForm from '../../../components/LMTForm/LMTForm'
import { stepOneValidation, StepOneInitials, StepOneFields } from './data'
import { useNavigate } from 'react-router-dom'
import { useFormData } from '../../../ContextAPI/FormDataContext'

const StepOne = () => {
  const navigate = useNavigate()
  const { formData, setFormData } = useFormData()

  const onSubmit = (values) => {
    setFormData({ ...formData, ...values });
    navigate('/signup/2')
  }
  return (
    <div className='register-main'>
      <div className='register-container'>
        <Box className='register-inner'>
          <HeadBox />
          <LMTForm
            initialValues={StepOneInitials}
            validationSchema={stepOneValidation}
            formFields={StepOneFields}
            onSubmit={onSubmit}
          />
        </Box>
      </div>
    </div>
  )
}

export default StepOne
