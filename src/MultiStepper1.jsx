import React, { useState, useEffect } from 'react'
import {Form} from 'react-bootstrap'
import EmpDetails from './steps/EmpDetails';
import TeamLeader from './steps/TeamLeader';
import LeaveRequest from './steps/LeaveRequest';
import {Stepper, StepLabel, Step,  Box, Button } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { activeTab, activeStep, empDetails, teamLeader, leaveRequest } from './redux/action';

const steps = ['Employee', 'Team Leader', 'Leave Request'];


 const MultiStepper1=()=> {
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
        return <EmpDetails />;
      case 1:
        return <TeamLeader />;
      case 2:
        return <LeaveRequest />;
      default:
        return;
    }
  };
  
  const onSubmit = (data) => {  
   
    if(step.activeStep === 0 && (getValues('emp_first_name')!=="") &&(getValues('emp_last_name')!=="") && (getValues('employeeid')!=="") &&(getValues('emp_phone_no')!=="")){  
      console.log('active')
      dispatch(activeStep(1))  
      dispatch(empDetails(data))
      
    }else if(step.activeStep === 1 &&  (getValues('position')!=="") &&(getValues('tlname')!=="") && (getValues('tlemailid')!=="") ){
      
      dispatch(activeStep(2))
      dispatch(teamLeader(data))
    }else if(step.activeStep === 2 &&  (getValues('leave_start_date')!=="") &&(getValues('leave_end_date')!=="") && (getValues('leave_type')!=="") &&  (getValues('tl_comment')!=="") ) {
      
      dispatch(activeTab(2)) 
      dispatch(leaveRequest(data))
      dispatch(activeStep(0))  
      toast.success("successfully Added Employee Info")
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