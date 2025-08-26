const Showdata = () => {

    let status = true ;

    let displaydata=()=>{
        alert("button is clicked")
        {
        (status) ? <h1> This is data</h1> : "nothing"
        };
    }

    let Adddata=(a,b)=>{
       let r= a+b;
        console.log(r)
    }

  return (
    <div>
        {
        (status) ? <h1> This is data</h1> : "nothing"
        };
    
    <button style={{padding:"12px 30px 15px 30px" , backgroundColor:"blueviolet" , color : "white" , fontSize:"30px" , marginTop:"100px"}} onClick={displaydata}>Show data</button>
    <button onClick={()=>{Adddata(20,23)}}>Add data</button>
    </div>
  )
}

export default Showdata
