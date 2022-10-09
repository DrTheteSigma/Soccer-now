
import React, { useState } from 'react'


const Signin = () => {

  const  [email, setEmail] = useState("")
  const  [password, setPassword] = useState("")
  
  
  
  return (
    <div className='Signpage'>
    <div className='container'>
        <h1>Sign up!</h1>
        <div>Already have an account</div>

        <form >
            <div>
                <label>Email address</label>
                <input type="text" onChange={(e)=>{setEmail(e.target.value)}} value={email} ></input>
            </div>

            <div>
                <label>Password</label>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password}></input>
            </div>
            <button>Sign in</button>
    
        </form>



    </div>
    </div>
  )
}

export default Signin