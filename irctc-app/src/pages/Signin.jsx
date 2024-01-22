import React,{useState} from 'react';
import { getAuth,signInWithEmailAndPassword} from 'firebase/auth';
import app from '../firebase';
const auth  =  getAuth(app);

export default function Signin() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const signinUser = () =>{
        signInWithEmailAndPassword(auth,email,password).then((value)=>alert("Success")).catch((err)=>console.log(err));
    }
  return (
    <div className='signin-page'>
      <h1>SignIn page</h1>
        <br></br>
        <label>Email</label>
        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" required placeholder='Enter your email here'/>
        <br></br>
        <label>Password</label>
        <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" required placeholder='Enter your password here'/>
       <button onClick={signinUser}>Sign in</button>
    </div>
  )
}
