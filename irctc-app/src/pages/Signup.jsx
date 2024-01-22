import React,{useState} from 'react';
import { getAuth,createUserWithEmailAndPassword} from 'firebase/auth';
import app from '../firebase';
const auth  =  getAuth(app);

export default function Signup() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const createUser = () =>{
        createUserWithEmailAndPassword(auth,email,password).then((value)=>alert("Success"));
    }
  return (
    <div className="signup-page">
        <h1>SignUp page</h1>
        <br></br>
        <label>Email</label>
        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" required placeholder='Enter your email here'/>
        <br></br>
        <label>Password</label>
        <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" required placeholder='Enter your password here'/>
       <button onClick={createUser}>Signup</button>
    </div>
  )
}
