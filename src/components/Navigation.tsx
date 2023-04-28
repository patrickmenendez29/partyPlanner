import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { NavLink } from "react-router-dom";
import "../styles/navigation.css"


function Navigation() {

  const [selected, setSelected] = useState("welcome, ");
  const navigate = useNavigate();

  // handle logout
  const handleLogOut = () => {
    
    // check user is logged in, if not alert user is not logged in
    if (auth.currentUser == null) {
      alert("You are not logged in");
      return;
    }

    // sign out
  
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("User signed out");
        navigate("/")
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  }

  return (

        <div className='navigation'>
          <NavLink className="navElement" to='/' onClick={() => {setSelected("home")}}>Home</NavLink>
          <NavLink className="navElement" to='/list'  onClick={() => {setSelected("list")}}>List</NavLink>
          <NavLink className="navElement" to='/create' onClick={() => {setSelected("create")}}>Create New</NavLink>
        </div>
  );

}

export default Navigation;
