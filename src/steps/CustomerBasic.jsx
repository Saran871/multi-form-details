import React from 'react';
import { Col, Row, Container } from 'react-bootstrap'
import { useFormContext } from 'react-hook-form';
import {CustomNumberInput, CustomTextInput} from '../component/inputs/CutomInput';

const CustomerBasic = () => {
  const {register, formState:{errors}}=useFormContext()  
  return (
    <Container>
      <Row>
        <Col md={6}>
          <CustomTextInput 
            type="text"
            register={register}
            name="cus_first_name"
            labelText="Cus. First Name"
            id="cus_first_name"
            placeholder="Enter your customer first name"
            errors={errors}
          />
        </Col>        
        <Col md={6}>
          <CustomTextInput 
            type="text"
            register={register}
            name="cus_last_name"
            labelText="Cus. Last Name"
            id="cus_last_name"
            placeholder="Enter your customer last name"
            errors={errors}
          />
        </Col>
        <Col md={6}>
          <CustomTextInput 
            type="text"
            register={register}
            name="cus_address"
            labelText="Address"
            id="cus_address"
            placeholder="Enter your Address"
            errors={errors}
          />
        </Col>
        <Col md={6}>
          <CustomTextInput 
            type="text"
            register={register}
            name="cus_city"
            labelText="City"
            id="cus_city"
            placeholder="Enter your city"
            errors={errors}
          />
        </Col>
        <Col md={6}>
          <CustomTextInput 
            type="text"
            register={register}
            name="cus_state"
            labelText="State"
            id="cus_state"
            placeholder="Enter your State"
            errors={errors}
          />
        </Col>
        <Col md={6}>
          <CustomNumberInput 
            type="number"
            register={register}
            name="cus_pincode"
            labelText="Pincode"
            id="cus_pincode"
            placeholder="Enter your Pincode"
            errors={errors}
          />
        </Col>        
      </Row>      
    </Container>
  )
}
export default CustomerBasic