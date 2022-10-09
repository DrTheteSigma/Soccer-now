import React, { useState } from 'react'
import Dashboardevent from './Dashboardevent'

const Dashboard = () => {

    const ar21 = [{_id: 0 , date: "tom", location: "USF soccer", description: "Lorem ipsum" }, {_id: 1 , date: "today", location: "USF soccer2", description: "Lorem ipsum dasd sadas das sad sds" }]

    const [arra, Setarra] = useState([{_id: 0 , date: "tom", location: "USF soccer", description: "Lorem ipsum" }, {_id: 1 , date: "today", location: "USF soccer2", description: "Lorem ipsusadsad sad sda   sm" }])

  return (
    <div className='Dashboard'>

    {arra.map((event) =>{
        return <Dashboardevent key={event._id} _id={event._id} date={event.date} location={event.location} description={event.description}></Dashboardevent>
    })}
      </div>

  )
}

export default Dashboard