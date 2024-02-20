import { type } from "@testing-library/user-event/dist/type";
import React, {useReducer} from "react";
function Reducer(){
  const initialState={count:0}
  const reducer=(state, action)=>{
   switch(action.type){
    case 'Down': return  {count: state.count-1}
      case 'Up': return {count: state.count+1}
      case 'reset': return {count:0}
      default: state
      }
  }
  const[state, dispatch]=useReducer(reducer, initialState)
  return(
    <>
    <h1>{state.count}</h1>
    <button onClick={()=>{dispatch({type: 'up'})}}>Up</button>
    <button onClick={()=>{dispatch({type: 'Down'})}}>Down</button>
    <button onClick={()=>{dispatch({type: 'reset'})}}>reset</button>
    </>
  )
}
export default Reducer