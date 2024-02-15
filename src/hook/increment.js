import { useState } from "react"
import App from "../App";

function useIncrement(){
    const [x, setX]=useState(0)
 return(
  {  count: x,
     increment: ()=>setX(v=>v+1), 
      decrement: ()=>setX(v=>v-1)
  }
 )    
}
export default useIncrement;