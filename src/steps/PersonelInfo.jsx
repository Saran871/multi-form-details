import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { useFormContext } from 'react-hook-form';
import {CustomNumberInput, CustomTextInput} from '../component/inputs/CutomInput';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { useSelector } from 'react-redux';

const schema = yup.object({
  city: yup.string().required('city is required'),
  state: yup.string().required('state is required'),
  pincode: yup.string().required('pin code is required'),
  national: yup.string().required('nationality is required'),
}).required()

const PersonelInfo = () => {   
  const {register, formState:{errors}}=useFormContext({
    resolver: yupResolver(schema)
  })
  const state = useSelector(state => state.multiform)
  console.log(state)
  return (
    <Container>
      <Row>    
        <Col md={6}>
          <CustomTextInput 
            type="text"
            register={register}
            name="city"
            labelText="City"
            id="city"
            placeholder="Enter your City"
            errors={errors}
          />
        </Col>         
        <Col md={6}>
          <CustomTextInput 
            type="text"
            register={register}
            name="state"
            labelText="State"
            id="state"
            placeholder="Enter your State"
            errors={errors}
          />
        </Col>    
        <Col md={6}>
          <CustomNumberInput 
            type="number"
            register={register}
            name="pincode"
            labelText="Pincode"
            id="pincode"
            placeholder="Enter your Pincode"
            errors={errors}
          />
        </Col> 
        <Col md={6}>
            <CustomTextInput 
              type="text"
              register={register}
              name="national"
              labelText="Nationality"
              id="national"
              placeholder="Enter your Naltionality"
              errors={errors}
            />
        </Col>
      </Row>    
    </Container>
  )
}

export default PersonelInfo