import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MultiTabs from './MultiTabs';
import ViewResult from './ViewResult';

const MultiStepRouter = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<MultiTabs />} />
            <Route path="/results" element={<ViewResult />} />
        </Routes>
    </Router>
    </>
  )
}

export default MultiStepRouter