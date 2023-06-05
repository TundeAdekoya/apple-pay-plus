import React, { useRef, useEffect } from 'react'
import '../Css/Benefits.css'
import AppleCard from '../Common/AppleCard'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  let text1 = useRef(null)
  let text2 = useRef(null)
  let text3 = useRef(null)
  let text4 = useRef(null)

  useEffect(() => {
    
    const benefitTl = gsap.timeline({pause: true})

    benefitTl.fromTo(
      text1.current,
      {opacity:0, scale:1.2},
      {yPercent: -40, opacity:1, ease:'back.out', duration:5, scale:1,
      scrollTrigger:{
        trigger: text1.current,
        start: 'top 100%',
        bottom: 'bottom bottom',
        toggleActions: 'restart pause reverse reset',
        scrub: true
      },}
    )
    
    .fromTo(
      text2.current,
      {opacity:0, scale:1.2},
      {yPercent: -40, opacity:1, ease:'back.out', duration:5, scale:1, delay:10,
      scrollTrigger:{
        trigger: text2.current,
        start: 'top 100%',
        bottom: 'bottom bottom',
        toggleActions: 'restart pause reverse reset',
        scrub: true
      },}
      )
      
      .fromTo(
        text3.current,
        {opacity:0, scale:1.2},
        {yPercent: -40, opacity:1, ease:'back.out', duration:5, scale:1,
        scrollTrigger:{
        trigger: text3.current,
        start: 'top 100%',
        bottom: 'bottom bottom',
        toggleActions: 'restart pause reverse reset',
        scrub: true
      },}
    )

    .fromTo(
      text4.current,
      {opacity:0, scale:1.2},
      {yPercent: -40, opacity:1, ease:'back.out', duration:5, scale:1,
      scrollTrigger:{
        trigger: text4.current,
        start: 'top 100%',
        bottom: 'bottom bottom',
        toggleActions: 'restart pause reverse reset',
        scrub: true
      },}
    )

    benefitTl.play()
  
  }, [])
  
  return (
    <div id='benefit'>
        <div className="benefit-text" style={{ fontFamily: "SFProDisplayMedium" }}>
            <p ref={text1}>Faster and easier than using cards, cash or crypto</p>
            <p ref={text2}>Privacy and security built in.</p>
            <p ref={text3}>Accepted on millions of websites and apps.</p>
            <p ref={text4}>Checkout is easier online with Apple Pay plus.</p>
        </div>
        <AppleCard />
    </div>
  )
}

export default Benefits