import { Box } from '@mui/material'
import React from 'react'
import HeadBox from '../../../components/HeadBox/HeadBox'
import LMTForm from '../../../components/LMTForm/LMTForm'
import { StepFourFields, StepFourInitials, stepFourValidation } from './data'
import { useNavigate } from 'react-router-dom'
import { useFormData } from '../../../ContextAPI/FormDataContext'

const StepFour = () => {
  const navigate = useNavigate()
  const { formData, setFormData } = useFormData()
  const onSubmit = (values) => {
    setFormData({ ...formData, ...values });
    console.log(formData)
    // navigate('/login')
  }
  return (
    <div className='register-main'>
      <div className='register-container'>
        <Box className='register-inner'>
          <HeadBox title={"Admin Registration"} />
          <LMTForm
            initialValues={StepFourInitials}
            validationSchema={stepFourValidation}
            formFields={StepFourFields}
            onSubmit={onSubmit}
          />
        </Box>
      </div>
    </div>
  )
}

export default StepFour
