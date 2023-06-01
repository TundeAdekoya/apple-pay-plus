import React from 'react'
import '../Css//WhatItDoes.css'
import whatimgforward from '../Assets/svg/whatitdoesforward.svg'
import whatitdoes1 from '../Assets/png/homepagepicture.png'
import whatitdoes2 from '../Assets/png/whatitdoes1.png'
import whatitdoes3 from '../Assets/png/whatitdoes3.png'
import mobile1 from '../Assets/png/mobile1.png'
import mobile2 from '../Assets/png/mobile2.png'
import mobile3 from '../Assets/png/mobile3.png'

const WhatItDoes = () => {
  return (
    <div id='whatitdoes'>
        <h2 style={{ fontFamily: "SFProDisplayBold" }}>It’s ready and set.<br/>Just go.</h2>


        <div className="whatitdoes-image">
            
            <div className="whatitdoesimg">
                <div className="what-img1"><img className='web' src={whatitdoes3} alt="" /> <img className='mobile' src={mobile1} alt="" /></div>
                <div className="what-text">
                    <h3 style={{ fontFamily: "SFProDisplayMedium" }}>Setup in seconds. </h3>
                    <p style={{ fontFamily: "SFProTextRegular" }}>Just add your credit or debit card to the Wallet app on your iPhone and you’re ready to go.</p>
                    <span style={{ fontFamily: "SFProDisplayMedium" }}>How to add a card <img src={ whatimgforward } alt="" /></span>
                </div>
            </div>

            <div className="whatitdoesimg">
                <div className="what-img2"><img className='web' src={whatitdoes1} alt="" /><img className='mobile' src={mobile2} alt="" /></div>
                <div className="what-text">
                    <h3 style={{ fontFamily: "SFProDisplayMedium" }}>Apple Pay+ is already on your device.</h3>
                    <p style={{ fontFamily: "SFProTextRegular" }}>No complicated processes to complete. No hassles.</p>
                </div>
            </div>

            <div className="whatitdoesimg">
                <div className="what-img3"><img className='web' src={whatitdoes2} alt="" /><img className='mobile' src={mobile3} alt="" /></div>
                <div className="what-text">
                    <h3 style={{ fontFamily: "SFProDisplayMedium" }}>Use Apple Cash and Crypto with Apple Pay+. </h3>
                    <p style={{ fontFamily: "SFProTextRegular" }}>Use Apple Cash with Apple Pay. Apple Cash is a digital card that lives in Wallet - it stores the cash you receive or want to send. </p>
                    <span  style={{ fontFamily: "SFProDisplayMedium" }}>How to send money and crypto  <img src={ whatimgforward } alt="" /></span><br/>
                    <span style={{ fontFamily: "SFProDisplayMedium" }}>Learn more about Apple Cash <img src={ whatimgforward } alt="" /></span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default WhatItDoes