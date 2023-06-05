import React, { useRef, useEffect } from 'react'
import '../Css/GetStarted.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GetStarted = () => {

  let title = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      title.current,
      {yPercent:-20, opacity:0, scale:1.3,},
      {
        yPercent:0, opacity:1, duration:5, ease: "back.out", scale:1,
        scrollTrigger:{
            trigger: title.current,
            start: 'top 100%',
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