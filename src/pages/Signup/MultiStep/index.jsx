import React from 'react'
import { useParams } from 'react-router-dom'
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';

const MultiStep = () => {
  const { step } = useParams()
  switch (step) {
    case '1':
      return <StepOne />;
    case '2':
      return <StepTwo />;
    case '3':
      return <StepThree />;
    case '4':
      return <StepFour />;
    default:
      return <div>no step</div>
  }
}

export default MultiStep
