import { useState } from "react"
import useToggle from "./hook/useToggle";
import useIncrement from "./hook/increment";
import useDocumentTitle from "./hook/useDocumentTitle";
function App(){
  const [checked, setChecked]=useToggle()
  const {count, increment, decrement}= useIncrement()
  const [name, setName]=useState('')
  useDocumentTitle(name? 'Editer ${name}' : null)
  return(
    <div>
      <label name='Nom'>Nom</label><br/> 
      <input value={name} onChange={(e)=>setName(e.target.value)}/>
    <input  type="checkbox" checked={checked} onChange={setChecked}/>
    {checked && 'je suis cocher'}<br/>
      <button onClick={increment}>increment</button><br/>
      <button    onClick={decrement}>decrement</button><br/>
       count: {count}
    </div>
  )
 }
 export default App;