import React from 'react'
import { Card, Container, Row ,Col, Table} from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ViewResult = () => {
    const state = useSelector(state => state.multiform)
    console.log(state)
    //first_name,last_name,age,gender,email,phone_number, dob, address
    //first_name,last_name,age,gender
    //first_name,last_name,age,gender

  return (
    <Container>
        <Card className='m-5'>
            <Card.Body>
                <Card.Title className='text-center text-success '> Multi Form Details</Card.Title>
                <Row>
                  <Col md={12}>
                    <Row>
                      
                      <Col md={12}>
                        <h5 className='text-info text-center mt-3'>Basic Detail</h5>
                        <Row>
                          <Col md={4}>
                          <p className='text-secondary fw-bold'> First Name:</p> {state.first_name}
                          </Col>
                          <Col md={4}>
                          <p className='text-secondary fw-bold'>Last Name: </p> {state.last_name}
                          </Col>
                          <Col md={4}>
                          <p className='text-secondary fw-bold'>Age: </p>{state.age}
                          </Col>
                          <Col md={4}>
                          <p className='text-secondary fw-bold'> Gender: </p> {state.gender}
                          </Col>

                          <Col md={4}>
                          <p className='text-secondary fw-bold'> Email : </p> {state.email}
                          </Col>

                          <Col md={4}>
                          <p className='text-secondary fw-bold'> Phone No : </p> {state.phone_number}
                          </Col>
                          <Col md={4}>
                          <p className='text-secondary fw-bold'>Date : </p> {state.date}
                          </Col>
                          <Col md={4}>
                          <p className='text-secondary fw-bold'>Address :</p> {state.address}
                          </Col> 
                          <Col md={4}>
                          <p className='text-secondary fw-bold'>City : </p> {state.city}
                          </Col>


                          <Col md={4}>
                          <p className='text-secondary fw-bold'>State :</p> {state.state}
                          </Col>
                          <Col md={4}>
                          <p className='text-secondary fw-bold'>PinCode : </p> {state.pincode}
                          </Col>
                          <Col md={4}>
                          <p className='text-secondary fw-bold'>National : </p> {state.national}
                          </Col> 
                        </Row>
                      </Col>
                      <Col md={12}>
                        <h5 className='text-info text-center mt-3'>Employee Info</h5>
                        <Row>
                          <Col md={4}>
                          <p className='text-secondary fw-bold'>Emp first name :</p> {state.emp_first_name}
                          </Col>
                          <Col md={4}>
                          <p className='text-secondary fw-bold'>Emp Last Name :</p> {state.emp_last_name}
                          </Col>
                          <Col md={4}>
                          <p className='text-secondary fw-bold'>Emp id : </p> {state.employeeid}
                          </Col>
                          <Col md={4}>
                          <p className='text-secondary fw-bold'>Emp phone no : </p> {state.emp_phone_no}
                          </Col>
                          
                          <Col md={4}>
                          <p className='text-secondary fw-bold'>position : </p> {state.position}
                          </Col>
                          <Col md={4}>
                          <p className='text-secondary fw-bold'>Team name : </p> {state.tlname}
                          </Col>
                          <Col md={4}>
                          <p className='text-secondary fw-bold'>TeamLeader Email id :</p> {state.tlemailid}
                          </Col>
                          <Col md={4}>
                          <p className='text-secondary fw-bold'>leave type :</p> {state.leave_type}
                          </Col>

                          <Col md={4}>
                          <p className='text-secondary fw-bold'>leave start date : </p> {state.leave_start_date}
                          </Col>
                          <Col md={4}>
                          <p className='text-secondary fw-bold'>leave end date :</p> {state.leave_end_date}
                          </Col>
                        </Row>
                      </Col>
                      <Col md={12}>
                        <h5 className='text-info text-center mt-3'>Customer Info</h5>
                        <Row>   
                          
                          <Col md={4}>
                          <p className='text-secondary fw-bold'>Customer first name : </p> {state.cus_first_name}
                          </Col>
                          <Col md={4}>
                          <p className='text-secondary fw-bold'>Customer last name :</p> {state.cus_last_name}
                          </Col>


                          
                          <Col md={4}>
                          <p className='text-secondary fw-bold'>Customer address :</p> {state.cus_address}
                          </Col>
                          <Col md={4}>
                          <p className='text-secondary fw-bold'>Customer city : </p>{state.cus_city}
                          </Col>
                          <Col md={4}>
                          <p className='text-secondary fw-bold'>Customer state :</p> {state.cus_state}
                          </Col>
                          <Col md={4}>
                              <p className='text-secondary fw-bold'>    Customer pincode : </p> {state.cus_pincode}
                          </Col>

                          <Col md={4}>
                          <p className='text-secondary fw-bold'>Customer Phone No : </p> {state.cus_phone_no}
                          </Col>
                          <Col md={4}>
                          <p className='text-secondary fw-bold'>      Customer email : </p> {state.cus_email}
                          </Col>
                          <Col md={4}>
                          <p className='text-secondary fw-bold'>Customer arrival date : </p> {state.cus_arr_date}
                          </Col>
                          <Col md={4}>
                          <p className='text-secondary fw-bold'>Customer depture date : </p>{state.cus_dep_date}
                          </Col>
                          <Col md={4}>
                          <p className='text-secondary fw-bold'>Customer Comment : </p>{state.cus_comment}
                          </Col>
                          <Col md={4}>
                          <p className='text-secondary fw-bold'>Customer Adult : </p>{state.cus_adults}
                          </Col>
                          <Col md={4}>
                          <p className='text-secondary fw-bold'>Customer Child : </p> {state.cus_childs}
                          </Col>
                          <Col md={4}>
                          <p className='text-secondary fw-bold'>Payment Type : </p> {state.payment_type}
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>                    
                    
                
            </Card.Body>
        </Card>
    </Container>
  )
}

export default ViewResult