import React, { useRef, useEffect } from 'react'
import '../Css/GetStarted.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GetStarted = () => {

  let title = useRef(null)

  useEffect(() => {
    gsap.to(
      title.current,
      {
        yPercent:-20, opacity:0, duration:5, ease: "back.out", 
        scale:1.3,
        scrollTrigger:{
            trigger: title.current,
            start: '0vw top',
            bottom: '100% 100vh',
            toggleActions: 'restart pause reverse reset',
            scrub: true
          },
        }
        )
  }, [])
  

  return (
    <div id='getstarted'>
      <h2 style={{ fontFamily: "SFProDisplayBold" }} ref={title}>Get started with<br/>Apple Pay Plus.</h2>
    </div>
  )
}

export default GetStarted