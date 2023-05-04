import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { AuthContext } from "../App";
import "../styles/home.css"


function Home(){

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const passwordElement = useRef<HTMLInputElement>(null);
    const [loginState, setLoginState] = useState<"login" | "create">("create");

    const context = useContext(AuthContext);


    // check if user is logged in 
    useEffect(() => {
        if (auth.currentUser != null) {
            context?.setIsLoggedIn(true);
        }
    }, []);


    const navigate = useNavigate();

    const handleCreateAccount = () => {
        console.log("Creating account with: ", email, password);
        // sign in with email and password
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            // ...
            updateProfile(auth.currentUser!, {
                displayName: first + " " + last
            })
           

            console.log("User created with id: ", userCredential.user.uid);
            navigate("/list");
        }
        )
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorCode, errorMessage);
        }
        );

    }


    // handle sign in
    const handleSignIn = () => {
        // validate password
        handlePassword();
        // sign in with email and password
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            console.log("User signed in with id: ", user.uid);
            navigate("/list");
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });


    }

    // handle sign in with google 
    const handleSignInWithGoogle = () => {
        // sign in with google
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.

            // The signed-in user info.
            const user = result.user;
            // ...
            console.log("User signed in with google with id: ", user.uid);
            navigate("/list");
            window.location.reload();
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            console.log(errorCode, errorMessage, email, credential);
        });
    }


    
    const handlePassword = () => {
        // validate password (8+ characters, one uppercase, one lowercase, one number and one special character)
        if (password.length < 8) {
            alert("Password must be at least 8 characters long");
            return;
        }
        if (!password.match(/[a-z]/g)) {
            alert("Password must contain at least one lowercase letter");
            return;
        }

         if (!password.match(/[A-Z]/g)) {
            alert("Password must contain at least one uppercase letter");
            return;
        }
        
        setPassword(password);
        
    }

    const showPassword = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if (passwordElement.current!.type === "password") {
            passwordElement.current!.type = "text";
        } else {
            passwordElement.current!.type = "password";
        }
    }


    // TODO: add the homepage (index.html) here:
    return (
                   
            <>
           <div className="homeBody">
             <div className="form">
                <h1 className="appTitle"> 🎉Party Planner🎉</h1>
                    <div>
                        <h2 className="subtitle">Use this website to plan any party! </h2>
        			<div className="description"> 
        				This website is designed to make your party planning dreams come true easily! 
        				Create an account to start creating your to do list.
        				Add new tasks by clicking on the create new task button. 
        				Review your list of tasks by clicking on the my to do list button. 
        				View all details of a specific task by clicking on the View details button next to that task from your to do list.
        			</div>
                </div>
        			
                <form  className="contactForm" method="">
                    {
                        loginState === "create" && 
                        <>
                            <div>
                                <label htmlFor="email" >First name:</label>
                                <input type="text" id="first" name="email" className="textfield" onChange={ (event) => {setFirst(event.target.value)}} />
                            </div>
                            <div>
                                <label htmlFor="password">Last name:</label>
                                <input type="text" id="last" name="password" className="textfield" onChange={(event) => {setLast(event.target.value)}}/>
                            </div >
                        </>
                    }
                    
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" className="textfield" onChange={ (event) => {setEmail(event.target.value)}} />
                    </div >
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" ref={passwordElement} className="textfield" onChange={(event) => {setPassword(event.target.value)}}/>
                        <button onClick={showPassword}>Show/Hide password</button>
                    </div >
                    <button onClick={handleSignInWithGoogle} className="login-with-google-btn" > Sign in with Google </button>
                </form>
    
                
                <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
                    {
                        loginState === "create" ? 
                        <div className="">
                            <button  className="submitButtons register"  onClick={handleCreateAccount}>Sign Up</button>
                            <p>Existing user? </p>
                            <button  className="submitButtons login"  onClick={() =>{setLoginState("login")}}>Login</button>
                        </div> 
                        : 
                        <div className="">
                            <button  className="submitButtons login"  onClick={handleSignIn}> Sign In </button>
                            <p>New user? </p>
                            <button  className="submitButtons register" onClick={() => {setLoginState("create")}}>Create account</button>
                        </div>
                    }
                   
                </div>
                <div>
                </div>
             </div>
             <img className="image" alt="cover" src="https://media.npr.org/assets/img/2022/11/04/gettyimages-1183414292-1-_slide-edff8c3fe6afcab5c6457e3c7bd011f5c1745161.jpg" />
 
           </div>
            </>
           
    );
}

export default Home;