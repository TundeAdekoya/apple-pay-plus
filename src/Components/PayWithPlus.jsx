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

    titleTl.fromTo(
      title.current,
      {opacity:0, scale:1.3,},
      {
        yPercent:-20, opacity:0, duration:5, ease: "back.out", opacity:1,
        scale:1,
        scrollTrigger:{
            trigger: title.current,
            start: 'top 100%',
            bottom: '100% 100vh',
            toggleActions: 'restart pause reverse reset',
            scrub: true
          },
        }
        ).fromTo(
          text.current,
          {opacity:0, scale:1.1,},
          {
            yPercent:-15, opacity:1, duration:5, ease: "back.out", 
            scale:1,
            scrollTrigger:{
              trigger:text.current,
              start: 'top 100%',
              end: '100% 100vh',
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