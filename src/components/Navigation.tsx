import { NavLink } from "react-router-dom";
import "../styles/navigation.css"


function Navigation() {



  return (

        <div className='navigation'>
          <NavLink className="navElement" to='/'>Home</NavLink>
          <NavLink className="navElement" to='/list'>List</NavLink>
          <NavLink className="navElement" to='/create'>Create New</NavLink>
        </div>
  );

}

export default Navigation;
