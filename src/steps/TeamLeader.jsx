import React from 'react';
import { Col, Row, Container, Form,Button} from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import {CustomEmailInput, CustomTextInput} from '../component/inputs/CutomInput';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

const schema = yup.object({
  position: yup.string().required('position is required'),
  tlname: yup.string().required('team leader name is required'),
  tlemailid: yup.string().email().required('team leader mail is required'),  
})


const TeamLeader = () => {
  const {register, formState:{errors}}=useFormContext({
    resolver:yupResolver(schema)
  })    
  return (
    <Container>
      <Row>
      <Col md={6}>
          <CustomTextInput 
            type="text"
            register={register}
            name="position"
            labelText="Position"
            id="position"
            placeholder="Enter your position"
            errors={errors}
          />
        </Col>
        <Col md={6}>
          <CustomTextInput 
            type="text"
            register={register}
            name="tlname"
            labelText="Tl Name"
            id="tlname"
            placeholder="Enter your tl name"
            errors={errors}
          />
        </Col>
        <Col md={6}>
          <CustomEmailInput 
            type="email"
            register={register}
            name="tlemailid"
            labelText="Tl email"
            id="tlemailid"
            placeholder="Enter your tl mailid"
            errors={errors}
          />
        </Col>
      </Row>
      
    </Container>
  )
}

export default TeamLeader