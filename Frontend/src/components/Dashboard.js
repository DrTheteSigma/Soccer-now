import React, { useEffect, useState } from 'react'
import Dashboardevent from './Dashboardevent'
import axios from 'axios';

const Dashboard = () => {

    useEffect(() => {
      fecthData();
    },[])
    const [data, setData] = useState([]);

    const fecthData = async () => {
      const res = await axios.get("http://localhost:8080/v1/matches")
      setData(res.data);
      console.log(res.data)
    }

  return (
    <div className='Dashboard'>

    {data.map((event) =>{
        return <Dashboardevent key={event._id} _id={event._id} date={event.date} location={event.location} description={event.description}></Dashboardevent>
    })}
      </div>
    
  )
}

export default Dashboard