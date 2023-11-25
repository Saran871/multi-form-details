
import React from 'react';
import { Col, Row, Container, Form, Button} from 'react-bootstrap'
import { useFormContext} from 'react-hook-form';
import * as yup from 'yup';
import { CustomTextInput,CustomRadioInput} from '../component/inputs/CutomInput';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  cus_adults: yup.number().required('cus adults is required'),
  cus_childs: yup.number().required('cus adults is required'),
  cus_comment: yup.number().required('cus adults is required'),
})

const PaymentInfo = () => {
  const {register, formState:{errors}}=useFormContext({
    resolver: yupResolver(schema)
  })  
  const radioOptions = [
    { value: 'check', label: 'Check' },
    { value: 'paypal', label: 'Paypal' },
  ];
  return (
    <Container>
      {/* <Form onSubmit={handleSubmit(onSubmit)}> */}
      <Row>
      <Col md={6}>
          <CustomTextInput 
            type="text"
            register={register}
            name="cus_adults"
            labelText="cus. adults"
            id="cus_adults"
            placeholder="Enter your cus adults"
            errors={errors}
          />
        </Col> 
        <Col md={6}>
          <CustomTextInput 
            type="text"
            register={register}
            name="cus_childs"
            labelText="cus. childs"
            id="cus_childs"
            placeholder="Enter your cus childs"
            errors={errors}
          />
        </Col> 
        <Col md={6}>
          <CustomRadioInput 
            name="payment_type"
            type="radio"
            options={radioOptions}
            register={register}
            labelText="payment type"
          />
        </Col>  
        
        
      
       
        <Col md={6}>
          <Form.Group className='text-start'>
            <Form.Label className='text-primary fw-bold'>Do you have any special request?</Form.Label>
            <Form.Control as="textarea" name="cus_comment"
              {...register('cus_comment', { required: true })}
            />
            <Form.Text className="errcolor">
              {errors.cus_comment && (
                <span style={{color: 'red', fontSize:'14.5px', fontWeight:500}}>{errors.cus_comment.message}</span>
              )}
            </Form.Text>
          </Form.Group>
        </Col>
               
      </Row>
      {/* </Form> */}
    </Container>
  )
}

export default PaymentInfo