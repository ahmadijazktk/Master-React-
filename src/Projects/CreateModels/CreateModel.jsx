import { useState } from 'react'
import './CreateModel.css'
const CreateModel = () => {

 const[showmodel,setshowmodel]=useState(false);

  return (<>
    <div>
      <div className={`ShowModel ${(showmodel)? 'activemodel': ""}`} > </div>
      <div><h1>Welcome To Learn Overlay Pop-up</h1></div>
      <div className= {`ShowCard ${(showmodel)? 'activecard': ""}`}><h3>Enquire Now <span onClick={()=>{setshowmodel(!showmodel)}}>&times;</span></h3></div>
      <button className='btn1' onClick={()=>{setshowmodel(!showmodel)}}>Enquire Now</button>
    </div>
    </>
  )
}

export default CreateModel
