import  React, {useState } from 'react';
import './App.css'
import { Tabs, Tab } from 'react-bootstrap';
import MultiStepper1 from './MultiStepper1';
import MultiStepper from './MultiStepper';
import MultiStepper2 from './MultiStepper2';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { activeStep, activeTab } from './redux/action'

export default function MultiTabs() {
  const dispatch=useDispatch()
  
  const step = useSelector(state => state.tab);
  const onSelect=(key)=>{
    dispatch(activeTab(key))
  }
  return (
    <>
      <ToastContainer />    
      <div className='container'>

        <Tabs
          id="controlled-tab-example"
          defaultActiveKey='0'
          activeKey={step.activeTab.toString()}
          onSelect={onSelect}
          className="mb-3"
        >
          <Tab eventKey="0" title="Basic" >
            <MultiStepper  />
          </Tab>
          <Tab eventKey="1" title="Employee">
            <MultiStepper1 />
          </Tab>
          <Tab eventKey="2" title="Customer">
            <MultiStepper2 />
          </Tab>
        </Tabs>
      </div>    
    </>
  );
}
