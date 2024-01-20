import { getDatabase,ref,set } from 'firebase/database';
import app from './firebase';
import './App.css';

const db =getDatabase(app);

function App() {
  const putData = () =>{
    set(ref(db,"users/shail"),{
      id:1,
      name:"Shail",
      age:20
    })
  }
  return (
    <div className="App">
      <h1>Welcome</h1>
      {/* <p>hi</p> */}
      <button onClick = {putData}>Put Data</button>
    </div>
  );
}

export default App;
