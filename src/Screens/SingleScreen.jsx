import React from 'react'
import Home from '../Components/Home'
import PayWithPlus from '../Components/PayWithPlus'
import Benefits from '../Components/Benefits'
import '../Css/SingleScreen.css'
import WhatItDoes from '../Components/WhatItDoes'
import WhatItDoesAndMore from '../Components/WhatItDoesAndMore'

const SingleScreen = () => {
  return (
    <div id='single-screen'>
        <Home/>
        <PayWithPlus/>
        <Benefits/>
        <WhatItDoes/>
        <WhatItDoesAndMore/>
    </div>
  )
}

export default SingleScreen