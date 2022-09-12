import React,{ useContext } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { RadioContext } from '../components/radio'
import Top_list from '../components/top_list'
import '../style/cards.css'
import '../style/radio.css'
import CostEstimater from '../components/cost-estimater'

const Images = () => {
  const image_prices=[243.61,300,338.77,200.22]

return(<div>    
    <h7 className='dropdown2 summary__title'>Review & launch</h7>
  <div className='flex-container'>
<Top_list /><CostEstimater price={image_prices[0]} />

<div className='title1'> Images
 <a href='/' className='edit_link'>Edit</a></div>
<button className='generate__button'>Generate JSON</button>
<div className='flex-container5 image__summary'>
<div className='flex-image'></div>

  <div className='internal1'> Linux 2 Image 
    <p className='internal2'>Linux 2 comes with 5 years of support.
      it provides Linux kernel 4.14 tuned for 
      optimal performance
    </p>
    </div>
</div>
    </div>
    <div className='review_button' >
    <button className='summary_buttons summary_buttons1'>Cancel</button>
    <button className='summary_buttons summary_buttons2'>Back</button>
    <button className='summary_buttons summary_buttons3'>Launch</button></div>
    </div>
)}
export default Images