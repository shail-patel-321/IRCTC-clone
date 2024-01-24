import React,{useState} from 'react'

export default function Profile() {
    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [uname,setUname] = useState("");
    const [mail,setEmail] = useState("");
    const [cno,setCno] = useState("");
  return (
    <div className='profile'>
      <h2>Buttons, Buttons, Everywhere</h2>
      <h1><u>Welcome to firebase tutorial</u></h1>
      <label>First Name</label>
      <input onChange={(e)=>setFname(e.target.value)} value={fname} type="name" required placeholder='Enter your First Name'/>
        <br></br>
        <label>Last Name</label>
        <input onChange={(e)=>setLname(e.target.value)} value={lname} type="name" required placeholder='Enter your Last Name'/>
        <br></br>
        <label>Username</label>
        <input onChange={(e)=>setUname(e.target.value)} value={uname} type="name" required placeholder='Enter your Username'/>
        <br></br>
        <label>Email</label>
        <input onChange={(e)=>setEmail(e.target.value)} value={mail} type="email" required placeholder='Enter your email'/>
        <br></br>
        <label>Contact No.</label>
        <input onChange={(e)=>setCno(e.target.value)} value={cno} type="number" required placeholder='Enter your Contact Number'/>
        <br></br>
        <label>Gender</label>
        <select>
            <option>Male</option>
            <option>Female</option>
        </select>
    </div>
  )
}
