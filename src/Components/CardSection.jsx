import React from 'react'
import '../Css/CardSection.css'
import applecard from '../Assets/svg/applecard.svg'
import applecash from '../Assets/svg/applecash.svg'
import applecrypto from '../Assets/svg/applecrypto.svg'
import applewalletcardsection from '../Assets/svg/applewalletcardsection.svg'
import arrowForwardblack from '../Assets/svg/arrowForwardblack.svg'
import arrowForwardwhite from '../Assets/svg/arrowForwardwhite.svg'
import appleblack from  '../Assets/svg/applelogoblacksmall.svg'
import applewhite from  '../Assets/svg/applelogowhitesmall.svg'

const CardSection = () => {
  return (
    <div id='cardsection'>

        <div className="cardsection-content">
        <div className="one">
            <div className="cash-cardsection">
                <h2 style={{ fontFamily: "SFProDisplayMedium" }}><img src={applewhite} alt="" />Cash</h2>
                <img src={applecash} alt="" />
                <p style={{ fontFamily: "SFProDisplayRegular" }}>Use it to send and receive money, and spend wherever Apple Pay is accepted.</p>
                <span style={{ fontFamily: "SFProDisplayMedium" }}>Learn more <img src={arrowForwardwhite} alt="" /></span>
            </div>
            <div className="crypto-cardsection">
                <h2 style={{ fontFamily: "SFProDisplayMedium" }}><img src={applewhite} alt="" />Crypto</h2>
                <img src={applecrypto} alt="" />
                <p style={{ fontFamily: "SFProDisplayRegular" }}>Use it to send and receive crypto, and spend wherever Apple Pay Plus is accepted.</p>
                <span style={{ fontFamily: "SFProDisplayMedium" }}>Learn more <img src={arrowForwardwhite} alt="" /></span>
            </div>
        </div>
        <div className="two">  
            <div className="card-cardsection">
                <h2 style={{ fontFamily: "SFProDisplayMedium" }}><img src={appleblack} alt="" />Card</h2>
                <img src={applecard} alt="" />
                <p style={{ fontFamily: "SFProDisplayRegular" }}>The credit card reimagined —with no fees, unlimited Daily Cash back, and helpful financial tools.</p>
                <span style={{ fontFamily: "SFProDisplayMedium" }}>Learn more <img src={arrowForwardblack} alt="" /></span>
            </div>
            <div className="wallet-cardsection">
                <h2 style={{ fontFamily: "SFProDisplayMedium" }}>Wallet</h2>
                <img src={applewalletcardsection} alt="" />
                <p style={{ fontFamily: "SFProDisplayRegular" }}>All your credit and debit cards, transit cards, boarding passes, and more. All in one place.</p>
                <span style={{ fontFamily: "SFProDisplayMedium" }}>Learn more <img src={arrowForwardblack} alt="" /></span>
            </div>
        </div>  
        </div>
    </div>
  )
}

export default CardSection