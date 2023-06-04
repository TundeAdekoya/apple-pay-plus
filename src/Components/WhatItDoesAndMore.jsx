import React, { useRef, useEffect } from 'react'
import '../Css/WhatItDoesAndMore.css'
import coffee from '../Assets/svg/coffee.svg'
import music from '../Assets/svg/music.svg'
import train from '../Assets/svg/train.svg'
import chocolatebar from '../Assets/svg/chocolatebar.svg'
import broccoli from '../Assets/svg/broccoli.svg'
import payplusicon from '../Assets/svg/payplusicon.svg'
import applewallet from '../Assets/svg/applewallet.svg'
import whatitdoeslaptopImg from '../Assets/svg/whatitdoeslaptopImg.svg'

import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatItDoesAndMore = () => {
    
    let title = useRef(null)
    let text1 = useRef(null)
    let text2 = useRef(null)
    let text3 = useRef(null)
    let text4 = useRef(null)
    let text5 = useRef(null)
    let text6 = useRef(null)
    let text7 = useRef(null)
    let img1 = useRef(null)
    let text8 = useRef(null)
    let text9 = useRef(null)

    useEffect(() => {
        const doesandmoreTl = gsap.timeline({pause:true})

        doesandmoreTl.to(
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
            text1.current,
            {yPercent:-20, opacity:0, ease:'back.out', duration:3,
            scrollTrigger:{
                trigger: text1.current,
                start: 'top top',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        ).to(
            text2.current,
            {yPercent:-20, opacity:0, ease:'back.out', duration:3,
            scrollTrigger:{
                trigger: text2.current,
                start: 'top top',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        ).to(
            text3.current,
            {yPercent:-20, opacity:0, ease:'back.out', duration:3,
            scrollTrigger:{
                trigger: text3.current,
                start: 'top top',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        ).to(
            text4.current,
            {yPercent:-20, opacity:0, ease:'back.out', duration:3,
            scrollTrigger:{
                trigger: text4.current,
                start: 'top top',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        ).to(
            text5.current,
            {yPercent:-20, opacity:0, ease:'back.out', duration:3,
            scrollTrigger:{
                trigger: text5.current,
                start: 'top top',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        ).to(
            text6.current,
            {yPercent:-20, opacity:0, ease:'back.out', duration:3,
            scrollTrigger:{
                trigger: text6.current,
                start: 'top top',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        ).to(
            text7.current,
            {yPercent:-20, opacity:0, ease:'back.out', duration:3,
            scrollTrigger:{
                trigger: text7.current,
                start: 'top top',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        ).to(
            text8.current,
            {yPercent:-20, opacity:0, ease:'back.out', duration:3,
            scrollTrigger:{
                trigger: text8.current,
                start: 'top top',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        ).to(
            text9.current,
            {yPercent:-20, opacity:0, ease:'back.out', duration:3,
            scrollTrigger:{
                trigger: text9.current,
                start: 'top top',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        ).to(
            img1.current,
            {yPercent:-40, opacity:0, ease:'back.out', duration:5,
            scrollTrigger:{
                trigger: img1.current,
                start: 'center top',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        )



        doesandmoreTl.play()
    }, [])
    


  return (
    <div id='WhatItDoesAndMore'>
        <h2 style={{ fontFamily: "SFProDisplayBold" }} ref={title}>Plus does it all and more.</h2>    

        <div className="WhatItDoesAndMore-content" style={{ fontFamily: "SFProDisplayMedium" }}>
            <p ref={text1}>Grab coffee <img src={coffee} alt="" className='whatitdoesandmore-img'/></p>
            <p ref={text2}>Subscribe to <img src={music} alt="" className='whatitdoesandmore-img'/></p>
            <p ref={text3}>Load up your <img src={train} alt="" className='whatitdoesandmore-img'/> app</p>
            <p ref={text4}>Get <img src={chocolatebar} alt="" className='whatitdoesandmore-img'/> from a vending machine.</p>
            <p ref={text5}>Get <img src={broccoli} alt="" className='whatitdoesandmore-img'/> from the supermarket.</p>
            <p ref={text6}>Just look for <img src={payplusicon} alt="" className='whatitdoesandmore-img'/></p>
            <p ref={text7}>or <img src={applewallet} alt="" className='whatitdoesandmore-img'/> when you check out.</p>
        </div>   

        <div className="whatitdoesandmore-bottom">
            <div className="whatitdoesandmoreimg" ref={img1}>
                <img src={whatitdoeslaptopImg} alt="" />
            </div>
            <div className="whatitdoesandmore-text">
                <div ref={text8} className="">
                    <h3 style={{ fontFamily: "SFProDisplayMedium" }} >At stores and more.</h3>
                    <p style={{ fontFamily: "SFProTextRegular" }}>Apple Pay+ is accepted at over 85 percent of retailers in the U.S., so you can likely use it wherever and however you want. If you’re not sure, just ask.</p>
                </div>
                <div ref={text9} className="whatitdoesandmore-text-bottom">
                    <h3 style={{ fontFamily: "SFProDisplayMedium" }} >In apps and online.</h3>
                    <p style={{ fontFamily: "SFProTextRegular" }}>Use Apple Pay+ for purchases in Safari on your iPhone, iPad, or Mac. You can skip the lengthy checkout forms and pay with just a touch or a glance.</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default WhatItDoesAndMore