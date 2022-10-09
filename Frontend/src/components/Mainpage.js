import React from 'react'
import { Link } from 'react-router-dom'

const Mainpage = () => {
  return (
    <>
    <div className='Home'>
      <div className='Home-left'>
        <button className='HomeBtn'>Join Exisiting Matches</button>
        
      </div>

      <div className='Home-right'>
        <Link to={"/create"}>
          <button className="HomeBtn">Create New Match</button>
        </Link>
      </div>

    </div>
    
    
    </>
  )
}

export default Mainpage