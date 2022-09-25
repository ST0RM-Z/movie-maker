import React from 'react'

export default function Movie(props) {
  return (
    <div className='card'>
    <div className='container'>
    <img className='card-img' src={props.image} alt="not found"/>

    <h2>{props.name}</h2>
    <h4>{props.genre} - { props.year}</h4>
    </div>
    </div>
  )
}
