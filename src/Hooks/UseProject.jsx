import { useState } from "react"

const UseProject = () => {
    const [ quote , setshowquote]=useState(false)
   
    
        
       
  return (
    <>
    {
       (quote) ? 
       
        <p style={{width:"300px",height:"300px",overflow:'hidden',border:"1px solid", backgroundColor:"chocolate",color:'black',borderRadius:"8px"}}>
            <button style={{position:"absolute", top :"30%"}} onClick={()=>setshowquote(!quote)}>hide</button>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel enim provident aperiam incidunt tempora illo necessitatibus, asperiores cum, esse hic eos nihil dolores dolor voluptates culpa iusto possimus itaque? Amet.
        </p>
        
        : 
        <div>
            <h1>Show us A quote</h1>
        <button style={{position:"absolute", top :"30%"}} onClick={()=>setshowquote(!quote)}>show</button>
        </div>
       
    }
<div>
     <div>
        
    </div> 
</div>
</>
  )
}

export default UseProject
