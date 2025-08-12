import React from 'react'

const LearnJsx = () => {
 let skill="React js";
  let list= [10,20,30,40,50,60];
  let status = true;
  return <>
  <div>
    <h1>I am going to {skill}</h1>
  </div>
   <div>
       {
        list.map((v)=>{
            return <>
                 <div>
                  {v}
                 </div>
            </>
        })
       }
   </div>

    <div>
       {

      (status) ?  <h1 style={{color:"red" , background:"Yellow"}}>You can learn it</h1> 

      : ""
      
      }
    </div>
       

  </>
}
export default LearnJsx
