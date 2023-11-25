import React from 'react';
import { Col, Row, Container} from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import {CustomDateInput, CustomRadioInput} from '../component/inputs/CutomInput';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const schema= yup.object({
  leave_end_date: yup.date().nullable()
  .transform((curr, orig) => orig === '' ? null : curr).required('Leave start date is required'),
  leave_start_date: yup.date().nullable()
  .transform((curr, orig) => orig === '' ? null : curr).required('Leave end date is required'),
})
const LeaveRequest = () => {
  const {register, formState:{errors}}=useFormContext({

  })  
  const radioOptions = [
    { value: 'sick', label: 'Sick' },
    { value: 'causal', label: 'Casual' },
    { value: 'others', label: 'Others' },
  ];
  return (
    <Container>
      <Row>
        <Col md={6}>
            <CustomDateInput 
              type="date"
              register={register}
              name="leave_start_date"
              labelText="Leave Start Date"
              id="leave_start_date"
              errors={errors}
            />
        </Col>
        <Col md={6}>
          <CustomDateInput 
            type="date"
            register={register}
            name="leave_end_date"
            labelText="Leave End Date"
            id="leave_end_date"
            errors={errors}
          />
        </Col>
        <Col md={6}>
        <CustomRadioInput 
          label="Gender"
          name="leave_type"
          type="radio"
          options={radioOptions}
          register={register}
          labelText="Leave Type"
        />
        </Col>        
      </Row>  
      
    </Container>
  )
}

export default LeaveRequest