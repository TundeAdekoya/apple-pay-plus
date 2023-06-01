import React from 'react'
import '../Css/SafeAndSecure.css'
import SafeAndSecure1 from '../Assets/svg/safeandsecure1.svg'
import SafeAndSecure2 from '../Assets/svg/safeandsecure2.svg'
import SafeAndSecure3 from '../Assets/svg/safeandsecure3.svg'

const SafeAndSecure = () => {
  return (
    <div id='safeandsecure'>
        <h2 style={{ fontFamily: "SFProDisplayMedium" }} >Safe and secure.</h2>
        <div className="safeandsecure-content">

            <div className="safeandsecure-content-one">
                <div className="safeandsecure-img">
                    <img src={SafeAndSecure1} alt="" />
                </div>
                <div className="safeandsecure-text">
                    <h3 style={{ fontFamily: "SFProDisplayMedium" }} >Personal data. Protected.</h3>
                    <p style={{ fontFamily: "SFProTextRegular" }} >When you make a purchase, Apple Pay+ uses a device-specific number and unique transaction code. So your card number is never stored on your device or on Apple servers. </p>
                </div>
            </div>

            <div className="safeandsecure-content-one">
                <div className="safeandsecure-img">
                    <img src={SafeAndSecure2} alt="" />
                </div>
                <div className="safeandsecure-text">
                    <h3 style={{ fontFamily: "SFProDisplayMedium" }} >Your purchases stay private.</h3>
                    <p style={{ fontFamily: "SFProTextRegular" }} >When you pay with a debit or credit card, Apple Pay+ doesn’t keep transaction information that can be tied back to you.</p>
                </div>
            </div>

            <div className="safeandsecure-content-one">
                <div className="safeandsecure-img">
                    <img src={SafeAndSecure3} alt="" />
                </div>
                <div className="safeandsecure-text">
                    <h3 style={{ fontFamily: "SFProDisplayMedium" }} >Tap more. Touch less. </h3>
                    <p style={{ fontFamily: "SFProTextRegular" }} >Apple Pay+ works right from your device, helping you avoid touching buttons and terminals, handling cards, and exchanging cash. </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default SafeAndSecure