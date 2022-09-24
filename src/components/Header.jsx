import React from 'react'


export default function Header() {
  return (
    <div className='topnav'>
    <a className='logo' href='/'>Movie maker</a>
    <div className='search-container'>
    <form>
    <a href='/'>Add Movie</a>
    <input type='text' placeholder='Search...' name="search"/>
    <button type='submit'>submit</button>
    </form>
    </div>
    </div>
    
  )
}
