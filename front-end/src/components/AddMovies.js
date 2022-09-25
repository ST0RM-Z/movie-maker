import React from 'react'

export default function AddMovies() {
  return (
    <div>
    <form className='Add-Form' onSubmit={()=>{alert('Movie added')}}>
    <label>  Name </label>
    <input type='text' required />
    <label>  genre </label>
    <input type='text' required />
    <label>  Year </label>
    <input type='text' placeholder='optional' />
    <button  type='Submit'>Add Movie </button>
    </form>
    </div>
  )
}
