
import React, {useContext} from 'react';
import { UserContext } from './C1';

const C4 = ( ) => {
  const user = useContext (UserContext);
  return (
    
    <div className='box'><h2>C4</h2> 
    <h2>{ `Hello i'm :  ${user}`}</h2>
  
    </div>
  )
}

export default C4



