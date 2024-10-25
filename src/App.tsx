import { useState } from 'react';
import './App.css';
import Child1 from './child1';
import Child2 from './child2';

function App() {
  
  const [desc,setDesc]=useState<string>()
  
  const handleClick=(name:string)=>{
    console.log("Thanks",name)
  }

  return (
    <div className="App">
      {desc}
      <Child1 name ="xyzu" age={26} setDesc={setDesc} handleClicks={handleClick}/>
      <Child2/>
    </div>
  );
}

export default App;
