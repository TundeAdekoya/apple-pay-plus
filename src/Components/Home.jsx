import React, { useRef, useEffect } from 'react'
import '../Css/Home.css'
import homePagePicture from '../Assets/svg/homepagepicture.svg'
import applepaylogo from '../Assets/svg/applepaylogo.svg'
import plus from '../Assets/svg/plus.svg'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Home = () => {
  let bghome =useRef(null)
  let img1 = useRef(null)
  let img2 = useRef(null)
  let img3 = useRef(null)
  let divImg = useRef(null)
  
  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    gsap.fromTo(img3.current,
      {yPercent: 0, scale:1,},
      { 
        scale:1.2,
        // opacity:0,
        yPercent: -45,
        duration: 3,
        ease: "back.out",
        scrollTrigger: {
          trigger: img3.current,
          start: "80% center", 
          toggleActions: 'restart pause reverse reset',
          markers:true,
          scrub: true, 
        },})

      gsap.fromTo(bghome.current,
        {backgroundColor:'#0A0A0A'},
        {backgroundColor:'#417AFF', 
        duration:2,
        ease: 'back.out',
        scrollTrigger:{
          trigger:bghome.current,
          start: 'center center',
          toggleActions: 'restart pause reverse reset',
        }})

    tl.fromTo(
      img1.current,
      { y: 30, opacity: 0,},
      { y: 0, opacity: 1, duration: 1.5 }
    ).fromTo(
      img2.current,
      { opacity: 0 },
      { opacity: 1, scale: 1, duration: 1.5 }
    ).fromTo(
      divImg.current,
      {y:-50, opacity:0},
      {y:0, opacity:1, duration:1.8}
    );

    // Play the timeline
    tl.play();


  }, []);

  return (
    <div id='home' ref={bghome}>
        <div className="home-logo">
            <img src={applepaylogo} alt="" ref={img1}/>
            <img src={plus} alt="" ref={img2} />
        </div>
        <div className="home-img" ref={divImg}>
            <img src={homePagePicture} alt="" ref={img3}/>
        </div>
    </div>
  )
}

export default Home