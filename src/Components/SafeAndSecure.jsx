import React, { useRef, useEffect } from 'react'
import '../Css/SafeAndSecure.css'
import SafeAndSecure1 from '../Assets/svg/safeandsecure1.svg'
import SafeAndSecure2 from '../Assets/svg/safeandsecure2.svg'
import SafeAndSecure3 from '../Assets/svg/safeandsecure3.svg'

import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SafeAndSecure = () => {

    let title = useRef(null)
    let img1 = useRef(null)
    let img2 = useRef(null)
    let img3 = useRef(null)

    
    useEffect(() => {
        const safeandsecureTl = gsap.timeline({pause: true})

        safeandsecureTl.to(
            title.current,
            {yPercent: -40, opacity:0, ease:'back.out', duration:5, scale:1.3,
            scrollTrigger:{
                trigger: title.current,
                start: 'top top',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        ).to(
            img1.current,
            {xPercent: -40, opacity:0, ease:'back.out', duration:3, scale:1.2,
            scrollTrigger:{
                trigger: img1.current,
                start: '60% top',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        ).to(
            img2.current,
            {yPercent: -40, opacity:0, ease:'back.out', duration:3, scale:1.2,
            scrollTrigger:{
                trigger: img2.current,
                start: '60% top',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        ).to(
            img3.current,
            {xPercent: 40, opacity:0, ease:'back.out', duration:3, scale:1.2,
            scrollTrigger:{
                trigger: img3.current,
                start: '60% top',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        )
        
        safeandsecureTl.play()

    }, [])
    

  return (
    <div id='safeandsecure'>
        <h2 style={{ fontFamily: "SFProDisplayMedium" }} ref={title}>Safe and secure.</h2>
        <div className="safeandsecure-content">

            <div className="safeandsecure-content-one" ref={img1}>
                <div className="safeandsecure-img">
                    <img src={SafeAndSecure1} alt="" />
                </div>
                <div className="safeandsecure-text">
                    <h3 style={{ fontFamily: "SFProDisplayMedium" }} >Personal data. Protected.</h3>
                    <p style={{ fontFamily: "SFProTextRegular" }} >When you make a purchase, Apple Pay+ uses a device-specific number and unique transaction code. So your card number is never stored on your device or on Apple servers. </p>
                </div>
            </div>

            <div className="safeandsecure-content-one" ref={img2}>
                <div className="safeandsecure-img">
                    <img src={SafeAndSecure2} alt="" />
                </div>
                <div className="safeandsecure-text">
                    <h3 style={{ fontFamily: "SFProDisplayMedium" }} >Your purchases stay private.</h3>
                    <p style={{ fontFamily: "SFProTextRegular" }} >When you pay with a debit or credit card, Apple Pay+ doesn’t keep transaction information that can be tied back to you.</p>
                </div>
            </div>

            <div className="safeandsecure-content-one" ref={img3}>
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