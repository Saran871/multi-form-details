import React, { useState, useEffect } from 'react'
import {Form} from 'react-bootstrap'
import CustomerBasic from './steps/CustomerBasic';
import CustomerDetails from './steps/CustomerDetails';
import PaymentInfo from './steps/PaymentInfo';
import {Stepper, StepLabel, Step,  Box, Button } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { activeStep, paymentInfo, customerBaisc, customerDetails } from './redux/action';

const steps = ['Basic Info', 'Contact Info', 'Address Info'];


 const MultiStepper1=()=> {
  const methods = useForm()
  const navigate = useNavigate()
  const dispatch=useDispatch()
  const step = useSelector(state => state.tab)
  // console.log(step)

  const {getValues}=methods;


  const handleBack = () => {
    dispatch(activeStep(step.activeStep - 1))
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <CustomerBasic />;
      case 1:
        return <CustomerDetails />;
      case 2:
        return <PaymentInfo />;
      default:
        return;
    }
  };
  
  const onSubmit = (data) => {  
   
    if(step.activeStep === 0 &&  (getValues('cus_first_name')!=="") &&(getValues('cus_last_name')!=="") && (getValues('cus_address')!=="") && (getValues('cus_city')!=="") &&(getValues('cus_state')!=="") &&(getValues('cus_pincode')!=="") ){  
      
      dispatch(activeStep(1))  
      dispatch(customerBaisc(data))
      
    }else if(step.activeStep === 1 &&   (getValues('cus_email')!=="") &&(getValues('cus_arr_date')!=="") && (getValues('cus_dep_date')!=="") && (getValues('cus_phone_no')!=="") ){
      
      dispatch(activeStep(2))
      dispatch(customerDetails(data))
    }else if(step.activeStep === 2 &&  (getValues('cus_comment')!=="") &&(getValues('cus_payment')!=="") && (getValues('cus_adults')!=="") &&  (getValues('cus_childs')!=="") ) {
      
      
      dispatch(paymentInfo(data))  
      toast.success("Successfully Added Customer Info")
      navigate('/results');

      
    }else{
      toast.error("Please fill the fields ")      
    }
  
    console.log(data, step.activeStep)
  };
  
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={step.activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <FormProvider {...methods} >
          <Form onSubmit={methods.handleSubmit(onSubmit)}>
            {getStepContent(step.activeStep)} 
            <React.Fragment>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              type='button'
              color="inherit"
              disabled={step.activeStep === 0}    
              onClick={handleBack}          
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            
            <Button type="submit">Next</Button>
                      
          </Box>
        </React.Fragment> 
          </Form>
       </FormProvider>
       
    </Box>
  );
}

export default MultiStepper1