const Childprops = (props) => {
 
    let {UserInfo,children}=props;

  return (
    <div>
      <h1>{UserInfo.name}</h1>
      <h2>{UserInfo.age}</h2>
      <h3><img className="p-img" src={UserInfo.imgUrl} alt="" width="100px"/></h3>
      <h3>{UserInfo.data}</h3>
      {children}
    </div>
  )
}

export default Childprops
