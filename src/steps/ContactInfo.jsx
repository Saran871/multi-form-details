import React from 'react';
import { Col, Row, Container,Form} from 'react-bootstrap'
import { useFormContext } from 'react-hook-form';
import {CustomEmailInput, CustomDateInput, CustomTextInput, CustomNumberInput} from '../component/inputs/CutomInput';
import { useSelector } from 'react-redux';

const ContactInfo = () => { 
  const {register, formState:{errors}}=useFormContext()   
  const state = useSelector(st => st.multiform)
  console.log(state, 'contact');
  return (
    <Container>
      <Row>
        <Col md={6}>
          <CustomEmailInput 
              type="email"
              register={register}
              name="email"
              labelText="Email"
              id="email"
              placeholder="Enter your email"
              errors={errors}
            />
        </Col>  
        <Col md={6}>
          <CustomNumberInput 
            type="number"
            register={register}
            name="phone_number"
            labelText="Mobile No"
            id="phone_number"
            placeholder="Enter you mobile no"
            errors={errors}
          />
        </Col>
       
        <Col md={6}>
          <CustomDateInput 
            type="date"
            register={register}
            name="date"
            labelText="Date of Birth"
            id="dob"
            errors={errors}
          />
        </Col>
        <Col md={6}>
          <CustomTextInput 
            type="text"
            register={register}
            name="address"
            labelText="Address"
            id="address"
            placeholder="Enter your address"
            errors={errors}
          />
        </Col>
      </Row>
    </Container>
  )
}
export default ContactInfo