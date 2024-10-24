import './App.css';
import Child1 from './child1';
import Child2 from './child2';

function App() {
  
  const handleClick=(name:string)=>{
    console.log("Thanks",name)
  }

  return (
    <div className="App">
      <Child1 name ="xyz" age={26} handleClicks={handleClick}/>
      <Child2/>
    </div>
  );
}

export default App;
