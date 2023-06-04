import React, { useRef, useEffect } from 'react'
import '../Css/PayWithPlus.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);


const PayWithPlus = () => {
  let title  = useRef(null);
  let text  = useRef(null);

  useEffect(() => {
    const titleTl = gsap.timeline({pause: true});

    titleTl.to(
      title.current,
      {
        yPercent:-20, opacity:0, duration:5, ease: "back.out", 
        scale:1.2,
        scrollTrigger:{
            trigger: title.current,
            start: '0vw top',
            bottom: '100% 100vh',
            toggleActions: 'restart pause reverse reset',
            scrub: true
          },
        }
        ).to(
          text.current,
          {
            yPercent:-15, opacity:0, duration:5, ease: "back.out", 
            scale:1.1,
            scrollTrigger:{
              trigger:text.current,
              start: '0vh top',
              end: '100% 100vh',
              // markers:true,
              toggleActions: 'restart pause reverse reset',
          scrub:true
        }
      }
    )

    titleTl.play();

  }, []);

  return (
    <div id='paywithplus'>
        <div  className="main-title"  ref={title} style={{ fontFamily: "SFProDisplayBold" }}>
            <h2>Pay With Plus</h2>    
        </div>
        <div className="main-text" style={{ fontFamily: "SFProDisplayMedium" }} ref={text}>
            <p>Apple Pay Plus is the one way to pay. It replaces your physical cards, crypto and cash with an easier,  safer, more secure, and private payment method - whether you’re in a store,  online, sending cash or cryptocurrency to friends or family. It’s money,  made modern.</p>    
        </div>
    </div>
  )
}

export default PayWithPlus