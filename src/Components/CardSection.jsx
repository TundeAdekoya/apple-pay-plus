import React, { useRef, useEffect } from 'react'
import '../Css/CardSection.css'
import applecard from '../Assets/svg/applecard.svg'
import applecash from '../Assets/svg/applecash.svg'
import applecrypto from '../Assets/svg/applecrypto.svg'
import applewalletcardsection from '../Assets/svg/applewalletcardsection.svg'
import arrowForwardblack from '../Assets/svg/arrowForwardblack.svg'
import arrowForwardwhite from '../Assets/svg/arrowForwardwhite.svg'
import appleblack from  '../Assets/svg/applelogoblacksmall.svg'
import applewhite from  '../Assets/svg/applelogowhitesmall.svg'

import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CardSection = () => {

    let img1 = useRef(null)
    let img2 = useRef(null)
    let img3 = useRef(null)
    let img4 = useRef(null)

    useEffect(() => {
        const cardsectionTl = gsap.timeline({pause: true})

        cardsectionTl.fromTo(
            img1.current,
            {xPercent: -60, opacity:0, scale:1.2},
            { xPercent: 0, opacity:1, ease:'back.out', duration:3, scale:1,
            scrollTrigger:{
                trigger: img1.current,
                start: '10% 100%',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        ).fromTo(
            img2.current,
            {xPercent: 60, opacity:0, scale:1.2},
            { xPercent: 0, opacity:1, ease:'back.out', duration:3, scale:1,
            scrollTrigger:{
                trigger: img2.current,
                start: '10% 100%',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        ).fromTo(
            img3.current,
            {xPercent: -60, opacity:0, scale:1.2},
            { xPercent: 0, opacity:1, ease:'back.out', duration:3, scale:1,
            scrollTrigger:{
                trigger: img3.current,
                start: '10% 100%',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        ).fromTo(
            img4.current,
            {xPercent: 60, opacity:0, scale:1.2},
            { xPercent: 0, opacity:1, ease:'back.out', duration:3, scale:1,
            scrollTrigger:{
                trigger: img4.current,
                start: '10% 100%',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        )

        cardsectionTl.play()
    }, [])
    

  return (
    <div id='cardsection'>

        <div className="cardsection-content">
        <div className="one">
            <div className="cash-cardsection" ref={img1}>
                <h2 style={{ fontFamily: "SFProDisplayMedium" }}><img src={applewhite} alt="" />Cash</h2>
                <img src={applecash} alt="" />
                <p style={{ fontFamily: "SFProDisplayRegular" }}>Use it to send and receive money, and spend wherever Apple Pay is accepted.</p>
                <span style={{ fontFamily: "SFProDisplayMedium" }}>Learn more <img src={arrowForwardwhite} alt="" /></span>
            </div>
            <div className="crypto-cardsection" ref={img2}>
                <h2 style={{ fontFamily: "SFProDisplayMedium" }}><img src={applewhite} alt="" />Crypto</h2>
                <img src={applecrypto} alt="" />
                <p style={{ fontFamily: "SFProDisplayRegular" }}>Use it to send and receive crypto, and spend wherever Apple Pay Plus is accepted.</p>
                <span style={{ fontFamily: "SFProDisplayMedium" }}>Learn more <img src={arrowForwardwhite} alt="" /></span>
            </div>
        </div>
        <div className="two">  
            <div className="card-cardsection" ref={img3}>
                <h2 style={{ fontFamily: "SFProDisplayMedium" }}><img src={appleblack} alt="" />Card</h2>
                <img src={applecard} alt="" />
                <p style={{ fontFamily: "SFProDisplayRegular" }}>The credit card reimagined —with no fees, unlimited Daily Cash back, and helpful financial tools.</p>
                <span style={{ fontFamily: "SFProDisplayMedium" }}>Learn more <img src={arrowForwardblack} alt="" /></span>
            </div>
            <div className="wallet-cardsection" ref={img4}>
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