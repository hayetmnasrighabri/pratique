import { type } from "@testing-library/user-event/dist/type"
import React, {useReducer} from "react"
function Reducer(){
  const initialState={
    UserName: " ",
    Email: " ",
    Notes: " "
  }
  const reducer=(state, action)=>{
    switch(action.type){
      case 'input':
        return {...state,[action.field]: action.value}
      case "reset":
        return initialState;
       default:
        return state;
      }
  }
  const [state, dispatch]=useReducer(reducer, initialState)
  const handleReset=()=>{
    dispatch({type: "reset "})
  }
  const handleChange=(e)=>{
    dispatch({
      type: 'input',
      field: e.target.name,
      value: e.target.value
    })
    
  }
  const handleSubmit=(e)=>{
   e.preventDefault()
   console.log(state)
   return state
  }
 
  return(
    <form onSubmit={handleSubmit}>
    <label>UserName
      <input type="text" name="UserName" value={state.UserName} onChange={handleChange}/>
    </label><br/><br/>
    <label>Email
      <input type="text" name="Email" value={state.Email} onChange={handleChange}/>
    </label><br/><br/>
    <label>Notes:
      <input type="text" name="Notes" value={state.Notes} onChange={handleChange}/>
    </label><br/><br/>
    <button type="button" >Submit</button>
    <button type="button" onClick={handleReset}>Reset</button>
    </form>
  )
}
export default Reducer