import { childProps } from './interface'

function Child1({name, age, handleClicks, setDesc}:childProps) {
  return (
    <div>
      Hello Neha {name} age is {age}
      <input type="text" onChange={(e)=>{setDesc(e.target.value)}}></input>
      <button onClick={()=>{handleClicks(name)}}>Test Me</button>
    </div>
  )
}

export default Child1
