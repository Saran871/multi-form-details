
import * as yup from 'yup';
export const schema = yup.object({
  first_name: yup.string().required('first name is required').matches(/^[a-zA-Z]+$/, 'First name should only contain letters'),
  last_name: yup.string().required('last name is required').matches(/^[a-zA-Z]+$/, 'last name should only contain letters'),
  age:yup.number().transform((value) => Number.isNaN(value) ? null : value ).required('age is required'),
  gender:yup.string().required('gender is required'),

  email: yup.string().email().required('email is required'),
  phone_number: yup.string().required('phone number is required'),
  dob:yup.date().nullable()
  .transform((curr, orig) => orig === '' ? null : curr).required('date of birth is required'), 
  address: yup.string().required('address is required'),

  city: yup.string().required('city is required'),
  state: yup.string().required('state is required'),
  pincode: yup.string().required('pin code is required'),
  national: yup.string().required('nationality is required'),

  emp_first_name: yup.string().required('employee first name is required'),
  emp_last_name: yup.string().required('emaployee last name is required'),
  employeeid:yup.string().required('employee id is required'),
  emp_phone_no: yup.string().required('phone number is required'),

   

  cus_first_name: yup.string().required(' first name is required'),
  cus_last_name: yup.string().required(' last name is required'),
  cus_address:yup.string().required(' address id is required'),
  cus_city: yup.string().required('city is required'),
  cus_state: yup.string().required('state is required'),
  cus_pincode: yup.string().required('pincode is required'),


  
  cus_email: yup.string().email().required('customer mail is required'),
  cus_arr_date: yup.date().nullable()
  .transform((curr, orig) => orig === '' ? null : curr).required('arrival start date is required'),
  cus_dep_date: yup.date().nullable()
  .transform((curr, orig) => orig === '' ? null : curr).required('depture date is required'),  
  cus_phone_no: yup.string().required('phone no is required'),
}).required();

