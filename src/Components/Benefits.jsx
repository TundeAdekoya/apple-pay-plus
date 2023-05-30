import React from 'react'
import '../Css/Benefits.css'
import AppleCard from '../Common/AppleCard'

const Benefits = () => {
  return (
    <div id='benefit'>
        <div className="benefit-text" style={{ fontFamily: "SFProDisplayMedium" }}>
            <p>Faster and easier than using cards, cash or crypto</p>
            <p>Privacy and security built in.</p>
            <p>Accepted on millions of websites and apps.</p>
            <p>Checkout is easier online with Apple Pay plus.</p>
        </div>
        <AppleCard />
    </div>
  )
}

export default Benefits