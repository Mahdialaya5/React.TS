import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Profil from './component/Profil';
import Greeting from './component/Greeting';
import Counter from './component/Counter';

function App() {

  const [username, setusername] = useState<string>('')
  const [password, setpassword] = useState('')
  return (
    <div className="App">
     <form>
       <input  onChange={(e)=>setusername(e.target.value)} />
       <input  onChange={(e)=>setpassword(e.target.value)} />
     </form>
     <Profil   pass={password}  >x</Profil>
     <Greeting name={username}   />
     <Counter/>
    </div>
  );
}

export default App;
