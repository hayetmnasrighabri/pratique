import { type } from "@testing-library/user-event/dist/type"
import { useReducer } from "react"

function reducer(state, action){
  switch(action.type){
    case "remove_todo": return (
      {
        ...state,
        todos: state.todos.filter(todo=>todo!==action.payload)
      }
    )
    case "toggle_todo": return(
      {
        ...state,
        todos: state.todos.map(todo=>todo===action.payload?{
        ...todo,
        checked: !todo.checked  
        }: todo)
      }
    )
    case "clear_complete": return(
      {
        ...state,
        todos: state.todos.filter(todo=>!todo.checked)
      }
    )
  }
}

function App(){
  const[state, dispatch]=useReducer(reducer, 
    {todos:[
    {name: "faire les courses", 
    checked: false
  },{
    name: "Ranger les courses",
    checked: false
  },{
    name: "Manger les courses",
    checked: false
  }]
})
return(
  <div> 
  <ul>
    
   {state.todos.map(todo=><li key={todo.name}>
    <input type="checkbox"  onChange={()=>dispatch({type: "toggle_todo", payload: todo})} checked={todo.checked} />
    {todo.name}
    <button onClick={()=>dispatch({type:"remove_todo", payload: todo})}>Supprimer</button>
    </li>)}
  </ul>
  <button onClick={()=>dispatch({type: "clear_complete"})}>Supprimer les taches accomplies</button>
  </div> 
)
}
export default App