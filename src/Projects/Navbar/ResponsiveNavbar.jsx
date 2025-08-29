import { useState } from "react"
import "./ResNav.css"
const ResponsiveNavbar = () => {
  const [showmenu , setshowmenu]=useState(false)
  return (
    <div>
      <button className="bt" onClick={()=>{setshowmenu(!showmenu)}} >
        {
          (showmenu) ? <span>&times;</span> : <span>&#9776;</span>
        }
        
        
        </button>
     <div className={`${ (showmenu) ? 'activemenu ' : 'p1'}`}>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Gallery</a></li>
      </ul>
     </div>
      
    </div>
  )
}

export default ResponsiveNavbar
