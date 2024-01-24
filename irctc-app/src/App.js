import { useEffect, useState } from 'react';
import { getAuth,createUserWithEmailAndPassword, onAuthStateChanged,signOut} from 'firebase/auth';
import app from './firebase';
import './App.css';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Protected from './components/Protected';
import Directions from './components/Directions';


const auth =getAuth(app);

function App() {
  const [user,setUser]=useState(null);
    useEffect(()=>{
      onAuthStateChanged(auth,user => {
        if(user){
          console.log("Hello",user);
          setUser(user);
        }
        else
        {
          console.log("You are logged out");
          setUser(null);
        }
      })
    });
    if(user===null)
    {
      return (
        <div className="App">
          {/* <p>hi</p> */}
          {/* <button onClick = {putData}>Put Data</button> */}
          <div className='ss'>
          <Signup/>
          <Signin/>
          </div>
        </div>
      );
    }
    else{
  return (
    <div className="App">
      <Directions/>
      <div background-color='aqua'>
      <button onClick={()=>signOut(auth)} >Logout</button></div>
    </div>
  );
    }
}

export default App;
