import React, { useState, useEffect } from 'react'
import {Form} from 'react-bootstrap'
import BasicInfo from './steps/BasicInfo';
import ContactInfo from './steps/ContactInfo';
import PersonelInfo from './steps/PersonelInfo';
import {Stepper, StepLabel, Step,  Box, Button } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
// import { schema } from './steps/schema';
import { useDispatch, useSelector } from 'react-redux';
import { activeTab, activeStep, basicInfo, contactInfo, personelInfo } from './redux/action';

const steps = ['Basic Info', 'Contact Info', 'Address Info'];


 const MultiStepper=()=> {
  const methods = useForm()
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
        return <BasicInfo  />;
      case 1:
        return <ContactInfo />;
      case 2:
        return <PersonelInfo />;
      default:
        return;
    }
  };
  
  const onSubmit = (data) => {  
   if(step.activeStep === 0 && (getValues('first_name')!=="") &&(getValues('last_name')!=="") && (getValues('age')!=="") &&(getValues('gender')!=="")){  
   
    dispatch(basicInfo(data))
    dispatch(activeStep(1))       
    }else if(step.activeStep === 1 && (getValues('email')!=="") &&(getValues('phone_number')!=="") && (getValues('dob')!=="") &&(getValues('address')!=="") ){
    
      dispatch(contactInfo(data))
      dispatch(activeStep(2))  
    }else if(step.activeStep === 2 && (getValues('city')!=="") &&(getValues('state')!=="") && (getValues('pincode')!=="") &&(getValues('national')!=="") ) {
        dispatch(personelInfo(data))
      
        dispatch(activeTab(1)) 
        dispatch(activeStep(0))  
        toast.success("Successfully Added Basic Info")  
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

export default MultiStepper