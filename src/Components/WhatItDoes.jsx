import React from 'react'
import '../Css//WhatItDoes.css'
import whatimgforward from '../Assets/svg/whatitdoesforward.svg'

const WhatItDoes = () => {
  return (
    <div id='whatitdoes'>
        <h2 style={{ fontFamily: "SFProDisplayBold" }}>It’s ready and set.<br/>Just go.</h2>


        <div className="whatitdoes-image">
            
            <div className="whatitdoesimg">
                <div className="what-img1"></div>
                <div className="what-text">
                    <h3 style={{ fontFamily: "SFProDisplayMedium" }}>Setup in seconds. </h3>
                    <p style={{ fontFamily: "SFProTextRegular" }}>Just add your credit or debit card to the Wallet app on your iPhone and you’re ready to go.</p>
                    <span style={{ fontFamily: "SFProDisplayBold" }}>How to add a card <img src={ whatimgforward } alt="" /></span>
                </div>
            </div>

            <div className="whatitdoesimg">
                <div className="what-img2"></div>
                <div className="what-text">
                    <h3 style={{ fontFamily: "SFProDisplayMedium" }}>Apple Pay+ is already on your device.</h3>
                    <p style={{ fontFamily: "SFProTextRegular" }}>No complicated processes to complete. No hassles.</p>
                </div>
            </div>

            <div className="whatitdoesimg">
                <div className="what-img3"></div>
                <div className="what-text">
                    <h3 style={{ fontFamily: "SFProDisplayMedium" }}>Use Apple Cash and Crypto with Apple Pay+. </h3>
                    <p style={{ fontFamily: "SFProTextRegular" }}>Use Apple Cash with Apple Pay. Apple Cash is a digital card that lives in Wallet - it stores the cash you receive or want to send. </p>
                    <span  style={{ fontFamily: "SFProDisplayBold" }}>How to send money and crypto  <img src={ whatimgforward } alt="" /></span><br/>
                    <span style={{ fontFamily: "SFProDisplayBold" }}>Learn more about Apple Cash <img src={ whatimgforward } alt="" /></span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default WhatItDoes