import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <div className="errorSection">
        <Link to="/" style={{fontSize:"22px",color:"blue"}}>Go back..Enter the correct Link</Link>
        <h1>404</h1>
        <div>Page is Not Found</div>
      </div>
    </div>
  )
}

export default NotFound
