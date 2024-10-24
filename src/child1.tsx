import { childProps } from './interface'

function Child1({name, age, handleClicks}:childProps) {
  return (
    <div>
      Hello Neha {name} age is {age}
      <button onClick={()=>{handleClicks(name)}}>Test Me</button>
    </div>
  )
}

export default Child1
