import { useContext } from "react";
import { AuthContext } from "../App";
import "../styles/header.css"
import { signOut } from "firebase/auth";
import { auth as FsAuth } from "../firebaseConfig";


export default function Header() {
    const auth = useContext(AuthContext);

    // handle logout
  const handleLogOut = () => {
    
    
    // sign out
  
    signOut(FsAuth).then(() => {
      // Sign-out successful.
      console.log("User signed out");
        
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  }

    return (
        <div className="header">
        <p>Party Planner</p>
        {
            auth?.isLoggedIn ?
            <div className="profileInfo">
                <p className="welcomeText">Welcome, {auth.displayName}</p>
                <button className='logoutButton' onClick={handleLogOut}>Log out</button>
    
            </div>
            :
            <></>
        }

        </div>
    );
}
