import React from 'react'
import '../Css/WhatItDoesAndMore.css'
import coffee from '../Assets/svg/coffee.svg'
import music from '../Assets/svg/music.svg'
import train from '../Assets/svg/train.svg'
import chocolatebar from '../Assets/svg/chocolatebar.svg'
import broccoli from '../Assets/svg/broccoli.svg'
import payplusicon from '../Assets/svg/payplusicon.svg'
import applewallet from '../Assets/svg/applewallet.svg'
import whatitdoeslaptopImg from '../Assets/svg/whatitdoeslaptopImg.svg'

const WhatItDoesAndMore = () => {
  return (
    <div id='WhatItDoesAndMore'>
        <h2 style={{ fontFamily: "SFProDisplayBold" }}>Plus does it all and more.</h2>    

        <div className="WhatItDoesAndMore-content" style={{ fontFamily: "SFProDisplayMedium" }}>
            <p>Grab coffee <img src={coffee} alt="" className='whatitdoesandmore-img'/></p>
            <p>Subscribe to <img src={music} alt="" className='whatitdoesandmore-img'/></p>
            <p>Load up your <img src={train} alt="" className='whatitdoesandmore-img'/> app</p>
            <p>Get <img src={chocolatebar} alt="" className='whatitdoesandmore-img'/> from a vending machine.</p>
            <p>Get <img src={broccoli} alt="" className='whatitdoesandmore-img'/> from the supermarket.</p>
            <p>Just look for <img src={payplusicon} alt="" className='whatitdoesandmore-img'/></p>
            <p>or <img src={applewallet} alt="" className='whatitdoesandmore-img'/> when you check out.</p>
        </div>   

        <div className="whatitdoesandmore-bottom">
            <div className="whatitdoesandmoreimg">
                <img src={whatitdoeslaptopImg} alt="" />
            </div>
            <div className="whatitdoesandmore-text">
                <div className="">
                    <h3 style={{ fontFamily: "SFProDisplayMedium" }} >At stores and more.</h3>
                    <p style={{ fontFamily: "SFProDisplayRegular" }}>Apple Pay+ is accepted at over 85 percent of retailers in the U.S., so you can likely use it wherever and however you want. If you’re not sure, just ask.</p>
                </div>
                <div className="whatitdoesandmore-text-bottom">
                    <h3 style={{ fontFamily: "SFProDisplayMedium" }} >In apps and online.</h3>
                    <p style={{ fontFamily: "SFProDisplayRegular" }}>Use Apple Pay+ for purchases in Safari on your iPhone, iPad, or Mac. You can skip the lengthy checkout forms and pay with just a touch or a glance.</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default WhatItDoesAndMore