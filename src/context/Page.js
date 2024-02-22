
import React, { createContext } from 'react'
import Layout from './layout'
const user = {name: 'hayet'}
const theme ={name: 'white'}
export const userContext= React.createContext()
export const themeContext= React.createContext()
function Page(props) {
    
  return (
  <userContext.Provider value={user}>
        <Layout/>
 </userContext.Provider>
 )
}

export default Page
