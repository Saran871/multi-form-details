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
                          <span className='text-secondary fw-bold'> First Name:</span> {state.first_name}
                          </Col>
                          <Col md={4}>
                          <span className='text-secondary fw-bold'>Last Name: </span> {state.last_name}
                          </Col>
                          <Col md={4}>
                          <span className='text-secondary fw-bold'>Age: </span>{state.age}
                          </Col>
                          <Col md={4}>
                          <span className='text-secondary fw-bold'> Gender: </span> {state.gender}
                          </Col>

                          <Col md={4}>
                          <span className='text-secondary fw-bold'> Email : </span> {state.email}
                          </Col>

                          <Col md={4}>
                          <span className='text-secondary fw-bold'> Phone No : </span> {state.phone_number}
                          </Col>
                          <Col md={4}>
                          <span className='text-secondary fw-bold'>Date : </span> {state.date}
                          </Col>
                          <Col md={4}>
                          <span className='text-secondary fw-bold'>Address :</span> {state.address}
                          </Col> 
                          <Col md={4}>
                          <span className='text-secondary fw-bold'>City : </span> {state.city}
                          </Col>


                          <Col md={4}>
                          <span className='text-secondary fw-bold'>State :</span> {state.state}
                          </Col>
                          <Col md={4}>
                          <span className='text-secondary fw-bold'>PinCode : </span> {state.pincode}
                          </Col>
                          <Col md={4}>
                          <span className='text-secondary fw-bold'>National : </span> {state.national}
                          </Col> 
                        </Row>
                      </Col>
                      <Col md={12}>
                        <h5 className='text-info text-center mt-3'>Employee Info</h5>
                        <Row>
                          <Col md={4}>
                          <span className='text-secondary fw-bold'>Emp first name :</span> {state.emp_first_name}
                          </Col>
                          <Col md={4}>
                          <span className='text-secondary fw-bold'>Emp Last Name :</span> {state.emp_last_name}
                          </Col>
                          <Col md={4}>
                          <span className='text-secondary fw-bold'>Emp id : </span> {state.employeeid}
                          </Col>
                          <Col md={4}>
                          <span className='text-secondary fw-bold'>Emp phone no : </span> {state.emp_phone_no}
                          </Col>
                          
                          <Col md={4}>
                          <span className='text-secondary fw-bold'>position : </span> {state.position}
                          </Col>
                          <Col md={4}>
                          <span className='text-secondary fw-bold'>Team name : </span> {state.tlname}
                          </Col>
                          <Col md={4}>
                          <span className='text-secondary fw-bold'>TeamLeader Email id :</span> {state.tlemailid}
                          </Col>
                          <Col md={4}>
                          <span className='text-secondary fw-bold'>leave type :</span> {state.leave_type}
                          </Col>

                          <Col md={4}>
                          <span className='text-secondary fw-bold'>leave start date : </span> {state.leave_start_date}
                          </Col>
                          <Col md={4}>
                          <span className='text-secondary fw-bold'>leave end date :</span> {state.leave_end_date}
                          </Col>
                        </Row>
                      </Col>
                      <Col md={12}>
                        <h5 className='text-info text-center mt-3'>Customer Info</h5>
                        <Row>   
                          
                          <Col md={4}>
                          <span className='text-secondary fw-bold'>Customer first name : </span> {state.cus_first_name}
                          </Col>
                          <Col md={4}>
                          <span className='text-secondary fw-bold'>Customer last name :</span> {state.cus_last_name}
                          </Col>


                          
                          <Col md={4}>
                          <span className='text-secondary fw-bold'>Customer address :</span> {state.cus_address}
                          </Col>
                          <Col md={4}>
                          <span className='text-secondary fw-bold'>Customer city : </span>{state.cus_city}
                          </Col>
                          <Col md={4}>
                          <span className='text-secondary fw-bold'>Customer state :</span> {state.cus_state}
                          </Col>
                          <Col md={4}>
                              <span className='text-secondary fw-bold'>    Customer pincode : </span> {state.cus_pincode}
                          </Col>

                          <Col md={4}>
                          <span className='text-secondary fw-bold'>Customer Phone No : </span> {state.cus_phone_no}
                          </Col>
                          <Col md={4}>
                          <span className='text-secondary fw-bold'>      Customer email : </span> {state.cus_email}
                          </Col>
                          <Col md={4}>
                          <span className='text-secondary fw-bold'>Customer arrival date : </span> {state.cus_arr_date}
                          </Col>
                          <Col md={4}>
                          <span className='text-secondary fw-bold'>Customer depture date : </span>{state.cus_dep_date}
                          </Col>
                          <Col md={4}>
                          <span className='text-secondary fw-bold'>Customer Comment : </span>{state.cus_comment}
                          </Col>
                          <Col md={4}>
                          <span className='text-secondary fw-bold'>Customer Adult : </span>{state.cus_adults}
                          </Col>
                          <Col md={4}>
                          <span className='text-secondary fw-bold'>Customer Child : </span> {state.cus_childs}
                          </Col>
                          <Col md={4}>
                          <span className='text-secondary fw-bold'>Payment Type : </span> {state.payment_type}
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