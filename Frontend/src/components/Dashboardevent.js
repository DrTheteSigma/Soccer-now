import React from 'react'

const Dashboardevent = ({_id, date, location, description}) => {
    
  return (
    <div className='card'>
        <div>{date}</div>
        <div>{location}</div>
        <div>{description}</div>
        
    
    </div>
  )
}

export default Dashboardevent