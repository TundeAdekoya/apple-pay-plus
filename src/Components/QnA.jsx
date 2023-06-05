import React, { useState, useRef, useEffect } from 'react';
import { CgAdd } from 'react-icons/cg';
import '../Css/QnA.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const QnA = () => {

    let title = useRef(null)
    let qOne = useRef(null)
    let qTwo = useRef(null)
    let qThree = useRef(null)
    let qFour = useRef(null)
    let qFive = useRef(null)
    let qSix = useRef(null)
    let qSeven = useRef(null)
    let qEight = useRef(null)
    let qNine = useRef(null)

    useEffect(() => {
        const qnaTl = gsap.timeline({pause:true})

        qnaTl.to(
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
            qOne.current,
            {yPercent:-20, opacity:0, ease:'back.out', duration:3,
            scrollTrigger:{
                trigger: qOne.current,
                start: 'top top',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        ).to(
            qTwo.current,
            {yPercent:-20, opacity:0, ease:'back.out', duration:3,
            scrollTrigger:{
                trigger: qTwo.current,
                start: 'top top',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        ).to(
            qThree.current,
            {yPercent:-20, opacity:0, ease:'back.out', duration:3,
            scrollTrigger:{
                trigger: qThree.current,
                start: 'top top',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        ).to(
            qFour.current,
            {yPercent:-20, opacity:0, ease:'back.out', duration:3,
            scrollTrigger:{
                trigger: qFour.current,
                start: 'top top',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        ).to(
            qFive.current,
            {yPercent:-20, opacity:0, ease:'back.out', duration:3,
            scrollTrigger:{
                trigger: qFive.current,
                start: 'top top',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        ).to(
            qSix.current,
            {yPercent:-20, opacity:0, ease:'back.out', duration:3,
            scrollTrigger:{
                trigger: qSix.current,
                start: 'top top',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        ).to(
            qSeven.current,
            {yPercent:-20, opacity:0, ease:'back.out', duration:3,
            scrollTrigger:{
                trigger: qSeven.current,
                start: 'top top',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        ).to(
            qEight.current,
            {yPercent:-20, opacity:0, ease:'back.out', duration:3,
            scrollTrigger:{
                trigger: qEight.current,
                start: 'top top',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        ).to(
            qNine.current,
            {yPercent:-20, opacity:0, ease:'back.out', duration:3,
            scrollTrigger:{
                trigger: qNine.current,
                start: 'top top',
                bottom: 'bottom bottom',
                toggleActions: 'restart pause reverse reset',
                scrub: true
              },}
        )

        qnaTl .play()
    }, [])
    

    const [isVisible1, setIsVisible1] = useState(false)
    const linkRef1 = useRef(null);
    const toggleVisibility1 = () => {
        setIsVisible1(!isVisible1)
    }

    const [isVisible2, setIsVisible2] = useState(false)
    const linkRef2 = useRef(null);
    const toggleVisibility2 = () => {
        setIsVisible2(!isVisible2)
    }

    const [isVisible3, setIsVisible3] = useState(false)
    const linkRef3 = useRef(null);
    const toggleVisibility3 = () => {
        setIsVisible3(!isVisible3)
    }

    const [isVisible4, setIsVisible4] = useState(false)
    const linkRef4 = useRef(null);
    const toggleVisibility4 = () => {
        setIsVisible4(!isVisible4)
    }

    const [isVisible5, setIsVisible5] = useState(false)
    const linkRef5 = useRef(null);
    const toggleVisibility5 = () => {
        setIsVisible5(!isVisible5)
    }

    const [isVisible6, setIsVisible6] = useState(false)
    const linkRef6 = useRef(null);
    const toggleVisibility6 = () => {
        setIsVisible6(!isVisible6)
    }

    const [isVisible7, setIsVisible7] = useState(false)
    const linkRef7 = useRef(null);
    const toggleVisibility7 = () => {
        setIsVisible7(!isVisible7)
    }

    const [isVisible8, setIsVisible8] = useState(false)
    const linkRef8 = useRef(null);
    const toggleVisibility8 = () => {
        setIsVisible8(!isVisible8)
    }

    const [isVisible9, setIsVisible9] = useState(false)
    const linkRef9 = useRef(null);
    const toggleVisibility9 = () => {
        setIsVisible9(!isVisible9)
    }

  return (
    <div id='questionandanswer'>
        <h2 style={{ fontFamily: "SFProDisplayBold" }} ref={title}>Questions? Answers.</h2>
        <section className="qna-content">

            <div className='qna' ref={qOne}>
                <div className='qna-top'>
                    <h3 style={{ fontFamily: "SFProDisplayMedium" }} 
                    onClick={toggleVisibility1} 
                    >How do I use Apple Pay Plus?</h3>
                    <div onClick={toggleVisibility1} ><CgAdd className='qna-logo'/></div>
                </div>
                <div className='qna-bottom' 
                style={{ 
                    fontFamily: "SFProTextRegular",
                    height: isVisible1 ? linkRef1.current?.scrollHeight : 0,
                    opacity: isVisible1 ? 1 : 0,
                    transition: "height 0.5s ease-in-out, opacity 1s ease-in-out",
                    overflow: "hidden",
                 }}
                ref={linkRef1}>
                    <p>You can use Apple Pay+ to make purchases in stores, on websites, and in apps. It’s widely accepted, simple, safe, secure, and private.</p>
                </div>
            </div>

            <div className='qna' ref={qTwo}>
                <div className='qna-top'>
                    <h3 style={{ fontFamily: "SFProDisplayMedium" }} 
                    onClick={toggleVisibility2} >How secure is Apple Pay Plus?</h3>
                    <div onClick={toggleVisibility2} ><CgAdd className='qna-logo'/></div>
                </div>
                <div className='qna-bottom' 
                style={{ 
                    fontFamily: "SFProTextRegular",
                    height: isVisible2 ? linkRef2.current?.scrollHeight : 0,
                    opacity: isVisible2 ? 1 : 0,
                    transition: "height 0.5s ease-in-out, opacity 1s ease-in-out",
                    overflow: "hidden",
                    }}
                ref={linkRef2}>
                    <p>Apple Pay+ is safer than using a physical credit, debit, or prepaid card. Face ID, Touch ID, or your passcode are required for purchases on your iPhone, Apple Watch, Mac, or iPad. Your card number and identity aren’t shared with merchants, and your actual card numbers aren’t stored on your device or on Apple servers.</p><br/>
                    <p>When you pay in stores, neither Apple nor your device will send your actual card number to merchants. When you pay online in Safari or in apps, the merchant will only receive information you authorize to fulfill your order — such as your name, email address, and billing and shipping addresses.</p><br/>
                    <p>When you pay with a debit or credit card, Apple doesn’t keep transaction information that can be tied back to you. And when you use Apple Cash, information is stored only for troubleshooting, fraud prevention, and regulatory purposes.</p>
                </div>
            </div>

            <div className='qna' ref={qThree}>
                <div className='qna-top'>
                    <h3 style={{ fontFamily: "SFProDisplayMedium" }} 
                    onClick={toggleVisibility3}>How do I use Apple Pay Plus?</h3>
                    <div
                    onClick={toggleVisibility3}><CgAdd className='qna-logo'/></div>
                </div>
                <div className='qna-bottom' 
                    style={{ 
                        fontFamily: "SFProTextRegular",
                        height: isVisible3 ? linkRef3.current?.scrollHeight : 0,
                        opacity: isVisible3 ? 1 : 0,
                        transition: "height 0.5s ease-in-out, opacity 1s ease-in-out",
                        overflow: "hidden",
                        }}
                    ref={linkRef3}
                >
                    <p>It’s simple. Just add a credit, debit, or prepaid card to the Wallet app on your iPhone. And remember to add your cards to any other Apple devices you want to use with Apple Pay. It works on iPhone, Apple Watch, Mac, and iPad.</p>
                </div>
            </div>

            <div className='qna' ref={qFour}>
                <div className='qna-top'>
                    <h3 style={{ fontFamily: "SFProDisplayMedium" }} 
                    onClick={toggleVisibility4} >Which banks support Apple Pay Plus?</h3>
                    <div onClick={toggleVisibility4} ><CgAdd className='qna-logo'/></div>
                </div>
                <div className='qna-bottom' 
                    style={{ 
                        fontFamily: "SFProTextRegular",
                        height: isVisible4 ? linkRef4.current?.scrollHeight : 0,
                        opacity: isVisible4 ? 1 : 0,
                        transition: "height 0.5s ease-in-out, opacity 1s ease-in-out",
                        overflow: "hidden",
                        }}
                    ref={linkRef4}
                >
                    <p>Apple Pay works with major credit and debit cards from banks around the world, with more added all the time. You can see all the banks that support Apple Pay here. If your card does not yet support Apple Pay, contact your bank for more information.</p>
                </div>
            </div>

            <div className='qna' ref={qFive}>
                <div className='qna-top'>
                    <h3 style={{ fontFamily: "SFProDisplayMedium" }} 
                     onClick={toggleVisibility5} >Does it cost extra to use Apple Pay Plus?</h3>
                    <div onClick={toggleVisibility5} ><CgAdd className='qna-logo'/></div>
                </div>
                <div className='qna-bottom' 
                style={{ 
                    fontFamily: "SFProTextRegular",
                    height: isVisible5 ? linkRef5.current?.scrollHeight : 0,
                    opacity: isVisible5 ? 1 : 0,
                    transition: "height 0.5s ease-in-out, opacity 1s ease-in-out",
                    overflow: "hidden",
                    }}
                ref={linkRef5}
                >
                    <p>No. Apple does not charge any fees when you use Apple Pay — in stores, online, or in apps.</p>
                </div>
            </div>

            <div className='qna' ref={qSix}>
                <div className='qna-top'>
                    <h3 style={{ fontFamily: "SFProDisplayMedium" }} 
                     onClick={toggleVisibility6} >Can I use Apple Pay Plus abroad?</h3>
                    <div onClick={toggleVisibility6} ><CgAdd className='qna-logo'/></div>
                </div>
                <div className='qna-bottom' 
                    style={{ 
                        fontFamily: "SFProTextRegular",
                        height: isVisible6 ? linkRef6.current?.scrollHeight : 0,
                        opacity: isVisible6 ? 1 : 0,
                        transition: "height 0.5s ease-in-out, opacity 1s ease-in-out",
                        overflow: "hidden",
                        }}
                    ref={linkRef6}
                >
                    <p>Apple Pay works in countries and regions that support contactless payments. Confirm with your bank, and ask about any fees they may charge for overseas usage.</p>
                </div>
            </div>

            <div className='qna' ref={qSeven}>
                <div className='qna-top'>
                    <h3 style={{ fontFamily: "SFProDisplayMedium" }} 
                     onClick={toggleVisibility7} >How can my business accept Apple Pay Plus?</h3>
                    <div onClick={toggleVisibility7} ><CgAdd className='qna-logo'/></div>
                </div>
                <div className='qna-bottom' 
                style={{ 
                    fontFamily: "SFProTextRegular",
                    height: isVisible7 ? linkRef7.current?.scrollHeight : 0,
                    opacity: isVisible7 ? 1 : 0,
                    transition: "height 0.5s ease-in-out, opacity 1s ease-in-out",
                    overflow: "hidden",
                    }}
                ref={linkRef7}
                >
                    <p>If your business already accepts credit and debit cards, simply contact your payment provider to start accepting Apple Pay. If you want to accept Apple Pay on your website or in your app, visit Apple Pay for developers.</p>
                </div>
            </div>

            <div className='qna' ref={qEight}>
                <div className='qna-top'>
                    <h3 style={{ fontFamily: "SFProDisplayMedium" }} 
                     onClick={toggleVisibility8} >Does my business need any special equipment to accept Apple Pay Plus?</h3>
                    <div
                     onClick={toggleVisibility8} ><CgAdd className='qna-logo'/></div>
                </div>
                <div className='qna-bottom' 
                style={{ 
                    fontFamily: "SFProTextRegular",
                    height: isVisible8 ? linkRef8.current?.scrollHeight : 0,
                    opacity: isVisible8 ? 1 : 0,
                    transition: "height 0.5s ease-in-out, opacity 1s ease-in-out",
                    overflow: "hidden",
                    }}
                ref={linkRef8}
                >
                    <p>With Tap to Pay on iPhone, you can use an iPhone to accept contactless payments through an app supported by any of the participating payment service providers. No extra terminal or hardware is required.2 If you already have a payment terminal, contact your payment service provider to find out if it accepts contactless payments.</p>
                </div>
            </div>

            <div className='qna' ref={qNine}>
                <div className='qna-top'>
                    <h3 style={{ fontFamily: "SFProDisplayMedium" }} 
                     onClick={toggleVisibility9} >How do I let my customers know I accept Apple Pay Plus?</h3>
                    <div
                     onClick={toggleVisibility9} ><CgAdd className='qna-logo'/></div>
                </div>
                <div className='qna-bottom' 
                style={{ 
                    fontFamily: "SFProTextRegular",
                    height: isVisible9 ? linkRef9.current?.scrollHeight : 0,
                    opacity: isVisible9 ? 1 : 0,
                    transition: "height 0.5s ease-in-out, opacity 1s ease-in-out",
                    overflow: "hidden",
                    }}
                ref={linkRef9}
                >
                    <p>Download the Apple Pay mark to use within email, on your terminal screen, on your website, and in your app. You can also order Apple Pay decals to put on your storefront window and register.</p>
                </div>
            </div>

        </section>
    </div>
  )
}

export default QnA