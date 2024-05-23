
import React, { useState, createContext } from 'react'
import C2 from './C2'

export const UserContext = createContext ();
  
const C1 = () => {
  <h1>UseContext with Different Component</h1>

  

  const [user, setuser] = useState ("Boqol Haji");
  return (

    
    <div className='box'> 
      <h2 className='Nnnnnn'>UseContext with Different Component</h2>
<h2>C1</h2>
    
    <h2>{`Me : ${user}`}</h2>

    <p className='user'>
    
    </p>

    <UserContext.Provider value={user}>
        <C2 user={user} />
    </UserContext.Provider>
   
    </div>
  )
}

export default C1
