import React from 'react'
import { Link } from 'react-router-dom'

const Dashboardevent = ({_id, date, location, description}) => {
    
  return (
    <div className='card'>
        <div>{new Date(date).toString()}</div>
        <div>{location}</div>
        <div>{description}</div>
        <Link to={"/formation"}>
          <button type='submit'>Join</button>
        </Link>
  
    </div>
  )
}

export default Dashboardevent