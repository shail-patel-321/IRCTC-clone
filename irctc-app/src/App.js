import { getAuth,createUserWithEmailAndPassword} from 'firebase/auth';
import app from './firebase';
import './App.css';
import Signup from './pages/Signup';
import Signin from './pages/Signin';


const auth =getAuth(app);

function App() {
    // const signupUser =()=>{
    //   createUserWithEmailAndPassword(
    //     auth,

    //   )
    // }
  return (
    <div className="App">
      <h1>Welcome</h1>
      {/* <p>hi</p> */}
      {/* <button onClick = {putData}>Put Data</button> */}
      <Signup/>
      <Signin/>
    </div>
  );
}

export default App;
