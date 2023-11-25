import React from 'react';
import { Col, Row, Container, Form,Button} from 'react-bootstrap'
import { useFormContext } from 'react-hook-form';
import {CustomNumberInput, CustomTextInput,CustomDateInput, CustomEmailInput} from '../component/inputs/CutomInput';

const CustomerDetails = () => {
  const {register, formState:{errors}}=useFormContext()  

  return (
    <Container>
        <Row>      
          <Col md={6}>
            <CustomNumberInput 
              type="number"
              register={register}
              name="cus_phone_no"
              labelText="Phone No"
              id="cus_phone_no"
              placeholder="Enter your Phone No"
              errors={errors}
            />
          </Col>
          <Col md={6}>
            <CustomEmailInput 
              type="email"
              register={register}
              name="cus_email"
              labelText="Email"
              id="cus_email"
              placeholder="Enter your Email"
              errors={errors}
            />
          </Col>
          <Col md={6}>
            <CustomDateInput 
              type="date"
              register={register}
              name="cus_arr_date"
              labelText="Arrival Date"
              id="cus_arr_date"
              errors={errors}
            />
          </Col>
          <Col md={6}>
            <CustomDateInput 
              type="date"
              register={register}
              name="cus_dep_date"
              labelText="Departure Date"
              id="cus_dep_date"
              errors={errors}
            />
          </Col>         
        </Row>
    
    </Container>
  )
}

export default CustomerDetails