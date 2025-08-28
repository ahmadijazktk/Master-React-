import { useState } from "react"

const UseProject2 = () => {
const [quote,setshowquote]=useState(false);
let content ;
if(quote) {
    content = (
        <>
            <button onClick={()=>setshowquote(!quote)}>Hide</button>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aspernatur corporis culpa quia consequatur tempore molestiae nihil temporibus odio eius doloribus adipisci beatae eaque quo aut perspiciatis, similique laboriosam dignissimos.
            </p>
        </>
    )
} else
{
    content = <button onClick={()=>setshowquote(!quote)}>Show Quote</button>
}
  return (
    <>
      {content}
    </>
  )
}

export default UseProject2
