import React from 'react'
import '../Css/AppleCard.css'
import { IoIosArrowForward } from 'react-icons/io';

const AppleCard = () => {
  return (
    <div id='applecard' style={{ fontFamily: "SFProDisplayRegular" }} >
        <p>Use Apple Card with Apple Pay and get 2% Daily Cash back on every purchase. <span>Learn more about Apple Card</span> <IoIosArrowForward className='applecard-svg' /></p>
    </div>
  )
}

export default AppleCard