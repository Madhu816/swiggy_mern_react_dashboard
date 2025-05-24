import React from 'react'

const Welcome = () => {
    const firmName = localStorage.getItem("firmname")

  return (
    <div className='welcomeSection'>
        <h2>WELCOME TO : {firmName.toUpperCase()}</h2> 
    </div>
  )
}

export default Welcome

