import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


export default function CreatingGame() {
    const [date, setDate] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')

    const navigate = useNavigate();

    const createMatch = async () => {  
      await axios.post("http://localhost:8080/v1/matches/create", {
          date, location
      })
      navigate("/", {replace: true});
  }

  return (

    <div className="create-game-background">
      <div>
          <h1 className='create-game-title'>Create Game</h1>
          <div className='flex'>
            <form className='form-background'>
                <label>Date</label> 
                <input onChange={(e) => {setDate(e.target.value)}} type="datetime-local"></input>
                <br/>
                <label>Field Location</label> 
                <input onChange={(e) => {setLocation(e.target.value)}} type="location"></input>
                <br/>
                <label>Description</label> 
                <textarea onChange={(e) => {setDescription(e.target.value)}}></textarea>
                <br></br>
                <button onClick={createMatch} type='button'>Submit</button>
            </form>
          </div>
          
      </div>
    </div>
  )
}
