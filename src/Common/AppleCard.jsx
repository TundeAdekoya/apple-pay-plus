import React, { useRef, useEffect } from 'react'
import '../Css/AppleCard.css'
import { IoIosArrowForward } from 'react-icons/io';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const AppleCard = () => {
  let card = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      card.current,
      {opacity:0},
      { opacity:1, ease:'back.out', duration:5,
      scrollTrigger:{
        trigger: card.current,
        start: 'top 100%',
        bottom: 'bottom bottom',
        toggleActions: 'restart pause reverse reset',
        scrub: true
      },}
    )
  
  }, [])
  


  return (
    <div id='applecard' style={{ fontFamily: "SFProDisplayRegular" }} ref={card}>
        <p>Use Apple Card with Apple Pay and get 2% Daily Cash back on every purchase. <span>Learn more about Apple Card</span> <IoIosArrowForward className='applecard-svg' /></p>
    </div>
  )
}

export default AppleCard