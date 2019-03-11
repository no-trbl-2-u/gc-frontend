import React, { useState, useEffect } from 'react'
import './ScoreEntryForm.css'

const ScoreEntryForm = props => {
  // STATE
  const [nameInput, setNameInput] = useState("")

  // FUNCTIONS
  const handleNameInput = ({ target }) => {
    setNameInput(target.value)
  }

  // TODO: write validateForm()...
  // TODO: inside of submitForm() ...

  // HOOKS
  useEffect(() => console.log(nameInput))

  return (
    <>
      <h1 className="ScoreEntry-Header">Add Entry</h1>
      <section className="ScoreEntryForm-Container">

        {/* Name */}
        <input 
          type="text" 
          value={ nameInput }
          onChange={ handleNameInput }
          placeholder="Enter Name or Moniker here"
        />

        {/* Name */}
        <input 
          type="text" 
          value=""
          placeholder="Enter Score Here"
        />

        {/* Email */}
        <input 
          type="text" 
          value=""
          placeholder="Enter Email Here"
        />
      </section>
    </>
  )
}

export default ScoreEntryForm
