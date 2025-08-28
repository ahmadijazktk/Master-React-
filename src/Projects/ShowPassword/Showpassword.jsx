
import { useState } from 'react'
import showpassword from './Showpassword.module.css'
const Showpassword = () => {
    const [text,setshowtext]=useState(false);
  return (
    <div className={showpassword.parents}>
        <h1>Hide & Show Passowrd Mini Project</h1>
      <div>
        <input type={text ? 'text' : 'password'} className={showpassword.input} />
      </div>
      <button onClick={()=>{setshowtext(!text)}} className={showpassword.btn}>
        {
            text ? 'Hide' : 'Show'
        }
      </button>
    </div>
  )
}

export default Showpassword
