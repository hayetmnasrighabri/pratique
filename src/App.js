import { useState } from "react"
import useToggle from "./hook/useToggle";
import useIncrement from "./hook/increment";
function App(){
  const [checked, setChecked]=useToggle()
  const {count, increment, decrement}= useIncrement()
  return(
    <div>
    <input  type="checkbox" checked={checked} onChange={setChecked}/>
    {checked && 'je suis cocher'}<br/>
      <button onClick={increment}>increment</button><br/>
      <button    onClick={decrement}>decrement</button><br/>
       count: {count}
    </div>
  )
 }
 export default App;