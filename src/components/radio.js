import React, { useState , createContext} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import '../style/radio.css'
import Images from '../component7/images'
const RadioContext = createContext();

const Radio = () => {

  const navigate=useNavigate();
  const [formData,setformData]=useState({
    processor:"64-bit (x86)"
  })

  const handleChange=event=>{
    const target=event.target
    const value=target.value
    setformData({
        ...formData,processor:value
    })
  }  
  const handleSubmit=event=>{
    navigate('/review&launch');
  }

  return (<div>
    <form >
        <div className='radio'>
        <input type='radio' value="64-bit (x86)" onChange={handleChange}
            checked={formData.processor=="64-bit (x86)"}/>
            <lable >64-bit (x86)</lable><br></br>
            <input type='radio' value="64-bit (ARM)" onChange={handleChange}
             />
            <lable>64-bit (ARM)</lable><br></br>
        </div><button className='but' type="submit" onClick={handleSubmit} >Select</button>
    </form>

    </div>

  )

}

export default Radio;
export {RadioContext};