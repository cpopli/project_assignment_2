import React from 'react'
import '../style/cost_estimater.css'
import '../style/dropdown.css'
import '../style/billing.css'
const Cost_estimater = (props) => {
  return (
    <div className='estimator'>
      <div className='estimator1'>
        Cost Estimates
        <div className='billing__main'>
        <div >Linux 2 Image</div> 
        <div>${props.price}</div>
        </div>
        <div className='billing__main1'>
        <div >CPU - 2 Cores</div>
        <div>$6.00</div> 
        </div>
        <div className='billing__main2'>
        <div >Memory - 6 GB</div>
        <div className='adjust'>$5.00</div> 
        </div>
        <hr className='billing__total'></hr>
        <div className='billing__total1'>$0.0/mon</div>
      </div>
      
  </div>)
}

export default Cost_estimater