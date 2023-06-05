import React, { useRef, useEffect } from 'react'
import '../Css//WhatItDoes.css'
import whatimgforward from '../Assets/svg/whatitdoesforward.svg'
import whatitdoes1 from '../Assets/png/homepagepicture.png'
import whatitdoes2 from '../Assets/png/whatitdoes1.png'
import whatitdoes3 from '../Assets/png/whatitdoes3.png'
import mobile1 from '../Assets/png/mobile1.png'
import mobile2 from '../Assets/png/mobile2.png'
import mobile3 from '../Assets/png/mobile3.png'

import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatItDoes = () => {

    let title = useRef(null)
    let img1 = useRef(null)
    let img2 = useRef(null)
    let img3 = useRef(null)
    let imgmobile1 = useRef(null)
    let imgmobile2 = useRef(null)
    let imgmobile3 = useRef(null)
    let text1 = useRef(null)
    let text2 = useRef(null)
    let text3 = useRef(null)

    useEffect(() => {
        const whatitdoesTl = gsap.timeline({pause: true})

        whatitdoesTl.fromTo(
            title.current,
            {opacity:0, scale:1.3, yPercent: -40 },
            {yPercent:0, opacity:1, ease:'back.out', duration:5, scale:1,
            scrollTrigger:{
                trigger: title.current,
                start: 'top 100%',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        ).fromTo(
            img1.current,
            {xPercent: -60, scale:1.1, opacity:0,},
            { xPercent: 0, opacity:1, ease:'back.out', duration:3, scale:1,
            scrollTrigger:{
                trigger: img1.current,
                start: 'top 100%',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        ).fromTo(
            imgmobile1.current,
            {yPercent: -40, opacity:0, scale:1.2,},
            { yPercent: 0, opacity:1, ease:'back.out', duration:3, scale:1,
            scrollTrigger:{
                trigger: imgmobile1.current,
                start: 'top 100%',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        ).fromTo(
            imgmobile2.current,
            { yPercent: -40, opacity:0, scale:1.2,},
            { yPercent:0, opacity:1, ease:'back.out', duration:3, scale:1,
            scrollTrigger:{
                trigger: imgmobile2.current,
                start: 'top 100%',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        ).fromTo(
            imgmobile3.current,
            {yPercent: -40, opacity:0, scale:1.2,},
            { yPercent: 0, opacity:1, ease:'back.out', duration:3, scale:1,
            scrollTrigger:{
                trigger: imgmobile3.current,
                start: 'top 100%',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        ).fromTo(
            text1.current,
            {xPercent: 30, opacity:0, scale:1.1,},
            { xPercent: 0, opacity:1, ease:'back.out', duration:3, scale:1,
            scrollTrigger:{
                trigger: text1.current,
                start: 'top 100%',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        ).fromTo(
            img2.current,
            {xPercent: -60, opacity:0, scale:1.1,},
            { xPercent: 0, opacity:1, ease:'back.out', duration:3, scale:1,
            scrollTrigger:{
                trigger: img2.current,
                start: 'top 100%',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        ).fromTo(
            text2.current,
            {xPercent:30, opacity:0, scale:1.1,},
            { xPercent:0, opacity:1, ease:'back.out', duration:3, scale:1,
            scrollTrigger:{
                trigger: text2.current,
                start: 'top 100%',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        ).fromTo(
            img3.current,
            {xPercent: -60, opacity:0, scale:1.1},
            { xPercent: 0, opacity:1, ease:'back.out', duration:3, scale:1,
            scrollTrigger:{
                trigger: img3.current,
                start: 'top 100%',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        ).fromTo(
            text3.current,
            {xPercent: 30, scale:1.1, opacity:0},
            { xPercent: 0, opacity:1, ease:'back.out', duration:3, scale:1,
            scrollTrigger:{
                trigger: text3.current,
                start: 'top 100%',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        )

        whatitdoesTl.play()
    }, [])
    


  return (
    <div id='whatitdoes'>
        <h2 style={{ fontFamily: "SFProDisplayBold" }} ref={title}>It’s ready and set.<br/>Just go.</h2>


        <div className="whatitdoes-image">
            
            <div className="whatitdoesimg">
                <div className="what-img1"><img className='web' src={whatitdoes3} alt="" ref={img1} /> <img className='mobile' src={mobile1} alt="" ref={imgmobile1}/></div>
                <div className="what-text" ref={text1}>
                    <h3 style={{ fontFamily: "SFProDisplayMedium" }}>Setup in seconds. </h3>
                    <p style={{ fontFamily: "SFProTextRegular" }}>Just add your credit or debit card to the Wallet app on your iPhone and you’re ready to go.</p>
                    <span style={{ fontFamily: "SFProDisplayMedium" }}>How to add a card <img src={ whatimgforward } alt="" /></span>
                </div>
            </div>

            <div className="whatitdoesimg">
                <div className="what-img2"><img className='web' src={whatitdoes1} alt="" ref={img2} /><img className='mobile' src={mobile2} alt="" ref={imgmobile2}/></div>
                <div className="what-text" ref={text2}>
                    <h3 style={{ fontFamily: "SFProDisplayMedium" }}>Apple Pay+ is already on your device.</h3>
                    <p style={{ fontFamily: "SFProTextRegular" }}>No complicated processes to complete. No hassles.</p>
                </div>
            </div>

            <div className="whatitdoesimg">
                <div className="what-img3"><img className='web' src={whatitdoes2} alt="" ref={img3} /><img className='mobile' src={mobile3} alt="" ref={imgmobile3} /></div>
                <div className="what-text" ref={text3}>
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