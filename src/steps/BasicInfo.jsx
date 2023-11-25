import React from 'react';
import { Col, Row, Container,Form } from 'react-bootstrap';
import {Box, Button} from '@mui/material'
import { useFormContext } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import { schema } from './schema';
import { CustomNumberInput, CustomTextInput, CustomRadioInput } from '../component/inputs/CutomInput';
import { useSelector } from 'react-redux';

import * as yup from 'yup';
const schema = yup.object({
  first_name: yup.string().required('first name is required').matches(/^[a-zA-Z]+$/, 'First name should only contain letters'),
  last_name: yup.string().required('last name is required').matches(/^[a-zA-Z]+$/, 'last name should only contain letters'),
  age:yup.number().transform((value) => Number.isNaN(value) ? null : value ).required('age is required').max(2),
  gender:yup.string().required('gender is required'),
  
}).required()
const BasicInfo = () => {
  const {register, formState:{errors}}=useFormContext({
    resolver: yupResolver(schema)
  })  
  const radioOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'FeMale' },
    { value: 'others', label: 'Others' },
  ]; 
  return (
    <Container>
      <Row>
        <Col md={6}>
          <CustomTextInput 
            type="text"
            register={register}
            name="first_name"
            labelText="First Name"
            id="first_name"
            placeholder="Enter your first name"
            errors={errors}
          />
        </Col>
        <Col md={6}>
          <CustomTextInput
            type="text"
            register={register}
            name="last_name"
            labelText="Last Name"
            id="last_name"
            placeholder="Enter your last name"
            errors={errors}
          />
        </Col>
        <Col md={6}>
          <CustomNumberInput 
            type="number"
            register={register}
            name="age"
            labelText="Age"
            id="age"
            placeholder="Enter your age"
            errors={errors}
            maxLength="2"
          />
        </Col>
        <Col md={6}>
          <CustomRadioInput 
            label="Gender"
            name="gender"
            type="radio"
            options={radioOptions}
            register={register}
            labelText="Gender"
          />
        </Col>  
        
      </Row> 
    </Container>
  )
}
export default BasicInfo