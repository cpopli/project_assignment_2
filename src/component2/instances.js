import React from 'react'
import Top_list from '../components/top_list'
import '../style/cards.css'
import '../component2/instances.css'
import { useNavigate } from 'react-router-dom'

const Instances = () => {
  const navigate=useNavigate();

  return (
    <div>
        
            <h7 className='dropdown2 summary__title'>Choose Instances Type</h7>
        <div className='flex-container'>
    <Top_list />
    </div>
    <div className='flex-top2-container'>
      <div className='menu1 '>General Purpose</div>
      <div className='menu1'>CPU Optimised</div>
      <div className='menu1'>Storage Optimised</div>
      <div className='menu1'>Network Optimised</div>
    </div>
    <h6 className='dropdown2 config__title'>Create Configuration</h6>

    <div class="dropdown">
  <button class="dropbtn">CPU Cores</button>
  <div class="dropdown-content">
    <a>1 Core</a>
    <a>2 Core</a>
    <a>4 Core</a>
    <a>6 Core</a>
    <a>8 Core</a>
  </div>
</div>
<div class="dropdown button2">
  <button class="dropbtn">Memory</button>
  <div class="dropdown-content">
    <a>256MB</a>
    <a>512MB</a>
    <a>1GB</a>
    <a>4GB</a>
    <a>8GB</a>
  </div>
    </div>
    <div >
    <button className='summary_buttons1 summary_buttons4' onClick={() => navigate("/")}>Back</button>
    <button className='summary_buttons1 summary_buttons5' onClick={() => navigate("/review&launch")}>Proceed</button>
</div>
</div>

  
  )
}

export default Instances