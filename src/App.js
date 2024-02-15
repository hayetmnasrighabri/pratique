const { useState } = require("react");

function useToggle(){
const [state, setState]=useState(false)
const toggle=()=>
  setState(v=>!v)
  return[state, toggle]
}
 function App(){
  const [checked, setChecked]=useToggle()
  return(
    <div>
    <input  type="checkbox" checked={checked} onChange={setChecked}/>
    {checked && 'je suis cocher'}
    </div>
  )
 }
 export default App;