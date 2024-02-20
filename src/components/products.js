import React from 'react'
 
export default function Products({proctuct}){
    if (proctuct==="apple")
    throw new Error ("not found apple") 
  return (
    <div>
      {proctuct}
    </div>
  )
}
