import React, { useState } from 'react';
import axios from 'axios';
import { auth } from "../config/firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 

  const signUp = async () => {  
      await axios.post("http://localhost:8080/v1/users/create", {
          displayName, email, password
      })
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/", {replace: true});
  }
  
  
  return (
    
    <div className='Signpage'>
    <div className='container'>
        <h1>Sign up!</h1>
        <a href='/'>Already have an account</a>

        <form >
            <div>
                <label>Name</label>
                <input type="text" onChange={(e)=>{setDisplayName(e.target.value)}} value={displayName}></input>
            </div>
            <div>
                <label>Email address</label>
                <input type="text" onChange={(e)=>{setEmail(e.target.value)}} value={email} ></input>
            </div>

            <div>
                <label>Password</label>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password}></input>
            </div>
            <button onClick={signUp}>Sign Up</button>
    
        </form>



    </div>
    </div>
  )
}

export default SignUp