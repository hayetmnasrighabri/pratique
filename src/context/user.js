import {React, useContext } from 'react'
import { userContext, themeContext } from './Page'
function User(props) {
    const user = useContext(userContext)
    const theme=useContext(themeContext)
  return (
    
        <div>{user.name}</div>
  )
}

export default User
