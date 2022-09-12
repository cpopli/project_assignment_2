import React from 'react'
import '../style/cost_estimater.css'
import '../style/dropdown.css'
import '../style/billing.css'
const Cost_estimater = () => {
  return (
    <div className='estimator'>
      <div className='estimator1'>
        Cost Estimates
        <div className='billing__main'>
        <div >Linux 2 Image</div> 
        <div>$0.0</div>
        </div>
        <hr className='billing__total'></hr>
        <div className='billing__total1'>$0.0/mon</div>
      </div>
      
  </div>)
}

export default Cost_estimater