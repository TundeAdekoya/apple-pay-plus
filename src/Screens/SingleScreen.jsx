import React from 'react'
import Home from '../Components/Home'
import PayWithPlus from '../Components/PayWithPlus'
import Benefits from '../Components/Benefits'
import '../Css/SingleScreen.css'

const SingleScreen = () => {
  return (
    <div id='single-screen'>
        <Home/>
        <PayWithPlus/>
        <Benefits/>
    </div>
  )
}

export default SingleScreen