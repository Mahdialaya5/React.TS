import React from 'react'


type profilprops={

  pass:string;
 children:React.ReactNode
}

function Profil({pass,children}:profilprops) {
  return (
    <div>
      <p></p>
      <p>{pass}</p>
      <p>{children}</p>
    </div>
  )
}

export default Profil