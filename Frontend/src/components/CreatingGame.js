import React, { useState } from 'react'

export default function CreatingGame() {
    const [date, setDate] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')


  return (
    <div className="create-game-background">
      <div>
          <h1 className='create-game-title'>Create Game</h1>
          <div className='flex'>
            <form className='form-background'>
                <label>Date</label> 
                <input onClick={(e) => {setDate(e.target.value)}} type="datetime-local"></input>
                <br/>
                <label>Field Location</label> 
                <input onClick={(e) => {setLocation(e.target.value)}} type="location"></input>
                <br/>
                <label>Description</label> 
                <textarea onClick={(e) => {setDescription(e.target.value)}}></textarea>
            </form>
          </div>
          
      </div>
    </div>
  )
}
