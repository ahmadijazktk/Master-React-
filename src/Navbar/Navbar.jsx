import "./navbar.css"

const Navbar = () => {
  return (
    <div className="menus">
      <div className="logo">Logo</div>
      <div className="items">
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>

    </div>
      <div className="buton"> <a href="">Resgister</a></div>
    </div>
  )
}

export default Navbar
