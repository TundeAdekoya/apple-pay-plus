import React from 'react'
import Home from '../Components/Home'
import PayWithPlus from '../Components/PayWithPlus'
import Benefits from '../Components/Benefits'
import '../Css/SingleScreen.css'
import WhatItDoes from '../Components/WhatItDoes'
import WhatItDoesAndMore from '../Components/WhatItDoesAndMore'
import SafeAndSecure from '../Components/SafeAndSecure.jsx'
import GetStarted from '../Components/GetStarted.jsx'

const SingleScreen = () => {
  return (
    <div id='single-screen'>
        <Home/>
        <PayWithPlus/>
        <Benefits/>
        <WhatItDoes/>
        <WhatItDoesAndMore/>
        <SafeAndSecure/>
        <GetStarted/>
    </div>
  )
}

export default SingleScreen