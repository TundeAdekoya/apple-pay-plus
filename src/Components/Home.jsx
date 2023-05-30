import React from 'react'
import '../Css/Home.css'
import homePagePicture from '../Assets/png/homepagepicture.png'
import applepaylogo from '../Assets/png/applepaylogo.png'
import plus from '../Assets/png/plus.png'


const Home = () => {
  return (
    <div id='home'>
        <div className="home-logo">
            <img src={applepaylogo} alt="" />
            <img src={plus} alt="" />
        </div>
        <div className="home-text" style={{ fontFamily: "SFProDisplayRegular" }} >
            <p>Money.</p>
            <p>Crypto.</p>
            <p>Card.</p>
            <p>Wallet.</p>
        </div>
        <div className="home-img">
            <img src={homePagePicture} alt="" />
        </div>
    </div>
  )
}

export default Home