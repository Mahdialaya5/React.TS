import React from 'react'

interface props{
    name:string
}

const Greeting :React.FC<props>= ({ name }) => { 

return  <div>Hello, {name}!</div>

 };
 export default Greeting;