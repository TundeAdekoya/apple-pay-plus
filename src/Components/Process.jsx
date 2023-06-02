import React, { useState, useRef, useEffect } from 'react';
import '../Css/Process.css'
import { gsap } from 'gsap';

const Process = () => {
    const cardRef = useRef(null);

    useEffect(() => {
      const cardElement = cardRef.current;
  
      gsap.to(cardElement, {
        duration: 2,
        rotationY: 360,
        repeat: 0,
        ease: 'power1.inOut',
      });
    }, []);

  return (
    <div ref={cardRef} className="card">Card Content</div>
  )
}

export default Process