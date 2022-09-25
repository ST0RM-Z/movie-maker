import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import "./App.css"
import Movies from './containers/Movies'
import AddMovies from './components/AddMovies'
export default function App() {
  return (
    <>
    <Header />
    <div className='App-container'>App</div>
    <Movies />
    <AddMovies />
    <Footer />
    </>

  )
}
