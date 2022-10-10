import React from 'react'

const Dashboardevent = ({_id, date, location, description}) => {
    
  return (
    <div className='card'>
        <div>{new Date(date).toString()}</div>
        <div>{location}</div>
        <div>{description}</div>
  
    </div>
  )
}

export default Dashboardevent