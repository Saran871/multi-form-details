import React from 'react';
import { Col, Row, Container, Form,Button} from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import { CustomTextInput, CustomNumberInput } from '../component/inputs/CutomInput';

import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';
const schema = yup.object({
  emp_first_name: yup.string().required('employee first name is required'),
  emp_last_name: yup.string().required('emaployee last name is required'),
  employeeid:yup.string().required('employee id is required'),
  emp_phone_no: yup.string().required('phone number is required'),
}).required()

const EmpDetails = () => {
  const {register, formState:{errors}}=useFormContext({
    resolver: yupResolver(schema)
  })  
  return (
    <Container>
      <Row>
      <Col md={6}>
        <CustomTextInput 
          type="text"
          register={register}
          name="emp_first_name"
          labelText="Emp. First Name"
          id="emp_first_name"
          placeholder="Enter your employee first name"
          errors={errors}
        />
      </Col>
      <Col md={6}>
        <CustomTextInput 
          type="text"
          register={register}
          name="emp_last_name"
          labelText="Emp. Last Name"
          id="emp_last_name"
          placeholder="Enter your employee last name"
          errors={errors}
        />
      </Col>
      <Col md={6}>
        <CustomTextInput 
          type="text"
          register={register}
          name="employeeid"
          labelText="Emp. Id"
          id="employeeid"
          placeholder="Enter your employee id"
          errors={errors}
        />
      </Col>
      <Col md={6}>
        <CustomNumberInput 
          type="text"
          register={register}
          name="emp_phone_no"
          labelText="Emp. phone no"
          id="emp_phone_no"
          placeholder="Enter your employee phone no"
          errors={errors}
        />
      </Col>     
        
    </Row>
      
    </Container>
  )
}

export default EmpDetails