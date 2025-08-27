import { useState } from "react"


const UseState = () => {
    const[value,setvalue]=useState(0);

    let add = () =>
    {
      
      setvalue(value + 1);
    } 

    let sub = () =>
    {
       {
        (value) ? setvalue(value-1) :
        ""
       }
       
    }
    let reset =()=>{
        setvalue(0)
    }

  return (
    <div >
<h1>{value}</h1>
 <button onClick={add}>add</button>
 <button  onClick={sub}>sub</button>
 <button onClick={reset}>reset</button>
    </div>
  )
}

export default UseState

// Lets learn what is Usestate