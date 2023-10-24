import { Box } from '@mui/material'
import React from 'react'
import HeadBox from '../../../components/HeadBox/HeadBox'
import LMTForm from '../../../components/LMTForm/LMTForm'
import { StepThreeFields, StepThreeInitials, stepThreeValidation } from './data'
import { useNavigate } from 'react-router-dom'
import { useFormData } from '../../../ContextAPI/FormDataContext'

const StepThree = () => {
  const navigate = useNavigate()
  const { formData, setFormData } = useFormData()
  const onSubmit = (values) => {
    setFormData({ ...formData, ...values });
    navigate('/signup/4')
  }
  return (
    <div className='register-main'>
      <div className='register-container'>
        <Box className='register-inner'>
          <HeadBox title={"Admin Registration"} />
          <LMTForm
            initialValues={StepThreeInitials}
            validationSchema={stepThreeValidation}
            formFields={StepThreeFields}
            onSubmit={onSubmit}
          />
        </Box>
      </div>
    </div>
  )
}

export default StepThree
