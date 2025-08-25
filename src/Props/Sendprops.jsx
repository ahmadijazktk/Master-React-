import "../App.css"
const Sendprops = (props) => {
    let { UserInfo }= props ;
    console.log(UserInfo);
  return (
    <div className="p-parrent">
    <div className="Parrent">
    <div>
     <h2>{UserInfo.name}</h2>
     <h3>{UserInfo.age}</h3>
     </div>
     <div className="p2-img">
     <h2><img className="p-img" src={UserInfo.imgUrl} alt="" width="100px"/></h2>
     </div>
    </div>
    </div>
  )
}

export default Sendprops
