import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/cards.css'
import Radio from './radio'
import Top_list from './top_list'
let title_list=["Linux 2 Image","Ubuntu Server 18.04 LTS","Red Hat Enterprise Linux 8",
"Microsoft Windows Server 2019 Base","SUSE Linux Enterprise Server"
]
let desc_title="Linux 2 comes with 5 years of support it provides Linux kernel 4.14 tuned for optimal performance"
const Cards = (props) => {
  const navigate=useNavigate();
  const [formData,setformData]=useState({
    processor:""
  })

  const handleChange=event=>{
    const target=event.target
    const name=target.name
    const value=target.value
    setformData({
      ...formData,[name] : value
    })
  }  
  const data=formData.processor
  return (
    
    <div className='flex-container'>
      <Top_list />
      <div className='flex-container5'>
      <div className='flex-image'></div>
        <div className='internal1'> {title_list[0]} 
          <p className='internal2'>{desc_title}
          </p>
          </div>
          <form onSubmit={() => navigate("/instances")}>
        <div className='radio'>
        <input type='radio' name="processor" value="64-bit (x86)" onChange={handleChange}
            checked={formData.processor=="64-bit (x86)"}/>
            <lable >64-bit (x86)</lable><br></br>
            <input type='radio' name="processor" value="64-bit (ARM)" onChange={handleChange}
             />
            <lable>64-bit (ARM)</lable><br></br>
        </div><button className='but' type="submit" onClick={props.alert(data)}  >Select</button>
    </form>
          </div>
    <div className='flex-container1'>
    <div className='flex-image'></div>
    <div className='internal1'> {title_list[1]} 
          <p className='internal2'>{desc_title}
          </p>
          </div>
          <form onSubmit={() => navigate("/instances")}>
        <div className='radio'>
        <input type='radio' name="processor" value="64-bit (x86)" onChange={handleChange}
            checked={formData.processor=="64-bit (x86)"}/>
            <lable >64-bit (x86)</lable><br></br>
            <input type='radio' name="processor" value="64-bit (ARM)" onChange={handleChange}
             />
            <lable>64-bit (ARM)</lable><br></br>
        </div><button className='but' type="submit" onClick={props.alert(data)}  >Select</button>
    </form>
</div>

<div className='flex-container2'>
<div className='flex-image'></div>
<div className='internal1'> {title_list[2]} 
          <p className='internal2'>{desc_title}
          </p>
          </div><form onSubmit={() => navigate("/instances")}>
        <div className='radio'>
        <input type='radio' name="processor" value="64-bit (x86)" onChange={handleChange}
            checked={formData.processor=="64-bit (x86)"}/>
            <lable >64-bit (x86)</lable><br></br>
            <input type='radio' name="processor" value="64-bit (ARM)" onChange={handleChange}
             />
            <lable>64-bit (ARM)</lable><br></br>
        </div><button className='but' type="submit" onClick={props.alert(data)}  >Select</button>
    </form>
</div>
<div className='flex-container3'>
<div className='flex-image'></div>
<div className='internal1'> {title_list[3]} 
          <p className='internal2'>{desc_title}
          </p>
          </div><form onSubmit={() => navigate("/instances")}>
        <div className='radio'>
        <input type='radio' name="processor" value="64-bit (x86)" onChange={handleChange}
            checked={formData.processor=="64-bit (x86)"}/>
            <lable >64-bit (x86)</lable><br></br>
            <input type='radio' name="processor" value="64-bit (ARM)" onChange={handleChange}
             />
            <lable>64-bit (ARM)</lable><br></br>
        </div><button className='but' type="submit" onClick={props.alert(data)}  >Select</button>
    </form>
</div>
<div className='flex-container4'>
      <div className='flex-image'></div>
      <div className='internal1'> {title_list[4]} 
          <p className='internal2'>{desc_title}
          </p>
          </div><form onSubmit={() => navigate("/instances")}>
        <div className='radio'>
        <input type='radio' name="processor" value="64-bit (x86)" onChange={handleChange}
            checked={formData.processor=="64-bit (x86)"}/>
            <lable >64-bit (x86)</lable><br></br>
            <input type='radio' name="processor" value="64-bit (ARM)" onChange={handleChange}
             />
            <lable>64-bit (ARM)</lable><br></br>
        </div><button className='but' type="submit" onClick={props.alert(data)}  >Select</button>
    </form>
</div>
  </div>

  )
}

export default Cards