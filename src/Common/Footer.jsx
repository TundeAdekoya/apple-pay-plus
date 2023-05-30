import React, {useState, useRef} from 'react'
import '../Css/Footer.css'
import arrowForward from '../Assets/svg/arrowForward.svg'
import { AiFillApple} from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';


const Footer = () => {

  const [isVisible1, setIsVisible1] = useState(false)
  const [isVisible2, setIsVisible2] = useState(false)
  const [isVisible3, setIsVisible3] = useState(false)
  const [isVisible4, setIsVisible4] = useState(false)
  const [isVisible5, setIsVisible5] = useState(false)
  const [isVisible6, setIsVisible6] = useState(false)
  const [isVisible7, setIsVisible7] = useState(false)
  const [isVisible8, setIsVisible8] = useState(false)
  const [isVisible9, setIsVisible9] = useState(false)
  const [isVisible10, setIsVisible10] = useState(false)
  const [isVisible11, setIsVisible11] = useState(false)

  const linkRef1 = useRef(null);
  const linkRef2 = useRef(null);
  const linkRef3 = useRef(null);
  const linkRef4 = useRef(null);
  const linkRef5 = useRef(null);
  const linkRef6 = useRef(null);
  const linkRef7 = useRef(null);
  const linkRef8 = useRef(null);
  const linkRef9 = useRef(null);
  const linkRef10 = useRef(null);
  const linkRef11 = useRef(null);

  const toggleVisibility1 = () => {
      setIsVisible1(!isVisible1)
  }
  const toggleVisibility2 = () => {
      setIsVisible2(!isVisible2)
  }
  const toggleVisibility3 = () => {
      setIsVisible3(!isVisible3)
  }
  const toggleVisibility4 = () => {
      setIsVisible4(!isVisible4)
  }
  const toggleVisibility5 = () => {
      setIsVisible5(!isVisible5)
  }
  const toggleVisibility6 = () => {
      setIsVisible6(!isVisible6)
  }
  const toggleVisibility7 = () => {
      setIsVisible7(!isVisible7)
  }
  const toggleVisibility8 = () => {
      setIsVisible8(!isVisible8)
  }
  const toggleVisibility9 = () => {
      setIsVisible9(!isVisible9)
  }
  const toggleVisibility10 = () => {
      setIsVisible10(!isVisible10)
  }
  const toggleVisibility11 = () => {
      setIsVisible11(!isVisible11)
  }

  return (
    <div id='footer' style={{ fontFamily: "SFProTextLight" }} >
      <section className="footer-top">
        <ol className="footer-top-numbers mb-7" >
          <li className='mb-5'>1. Apple Cash services are provided by Green Dot Bank, Member FDIC. Learn more about the <span>Terms and Conditions.</span> Only available in the U.S. on eligible devices. To send and receive money with an Apple Cash account, you must be 18 and a U.S. resident. If you’re under 18, your family organizer can set up Apple Cash for you as part of their Apple Cash Family account. Security checks may require more time to make funds available. Apple Cash Family accounts can send or receive up to $2000 per transaction or within a seven-day period. Sending money from Wallet requires iOS 15.5 or later.</li>
          <li className='mb-5'>2. Requires iPhone Xs or later with iOS 15.5 or later. The Contactless Symbol is a trademark owned by and used with permission of EMVCo, LLC.</li>
          <li >3. Variable APRs for Apple Card other than ACMI range from 15.74% to 26.74% based on creditworthiness. Rates as of April 1, 2023.</li>
        </ol>

        <ul>
          <li className='mb-7'>To use Apple Pay you need a supported card from a participating card issuer. To check if your card is compatible with Apple Pay, contact your card issuer.</li>
          <li className='mb-7'>Apple Pay is not available in all markets. <span>View Apple Pay countries and regions.</span></li>
          <li className='mb-7'>Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.</li>
          <li className='mb-7'>Some features require specific hardware and software. For more information, see <span>Feature Availability</span>.</li>
          <li className='mb-7'>To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS. Update to the latest version by going to Settings {'>'} General {'>'} Software Update. Tap Download and Install.</li>
          <li className='mb-7'>Available for qualifying applicants in the United States. Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.</li>
        </ul>
      </section>
      <section className="footer-middle my-7">
        <div className="footer-middle-top">
          <AiFillApple className='apple-logo-white'/>
          <img src={arrowForward} alt="" />
          <p>Apple Pay Plus</p>
        </div>

        {/* footer-web */}

          <div className="footer-middle-bottom footer-web">
            <div className="footer-mid-content1">
                <div className="slide-down"> 
                <ul>
                  <li ><b>Shop and Learn</b></li>
                  <li>Store</li>
                  <li>Mac</li>
                  <li>iPad</li>
                  <li>iPhone</li>
                  <li>Watch</li>
                  <li>AirPods</li>
                  <li>TV & Home</li>
                  <li>AirTag</li>
                  <li>Accessories</li>
                  <li>Gift Cards</li>
                </ul>

                <ul>
                  <li><b>Apple Wallet</b></li>
                  <li>Wallet</li>
                  <li>Apple Card</li>
                  <li>Apple Pay</li>
                  <li>Apple Cash</li>
                  <li>Apple Crypto</li>
                </ul>
              </div> 
            </div>

            <div className="footer-mid-content2">
                <ul>
                  <li><b>Account</b></li>
                  <li>Manage Your Apple ID</li>
                  <li>Apple Store Account</li>
                  <li>iCloud.com</li>
                </ul>

                <ul>
                  <li><b>Entertainment</b></li>
                  <li>Apple One</li>
                  <li>Apple TV+</li>
                  <li>Apple Music</li>
                  <li>Apple Arcade</li>
                  <li>Apple Fitness+</li>
                  <li>Apple News+</li>
                  <li>Apple Podcasts</li>
                  <li>Apple Books</li>
                  <li>App Store</li>
                </ul>
            </div>

            <div className="footer-mid-content3">
              <ul>
                <li><b>Apple Store</b></li>
                <li>Find a Store</li>
                <li>Genius Bar</li>
                <li>Today at Apple</li>
                <li>Apple Camp</li>
                <li>Apple Store App</li>
                <li>Certified Refurbished</li>
                <li>Apple Trade In</li>
                <li>Financing</li>
                <li>Carrier Deals at Apple</li>
                <li>Order Status</li>
                <li>Shopping Help</li>
              </ul>
            </div>
            <div className="footer-mid-content4">
              <ul>
                <li><b>For Business</b></li>
                <li>Apple and Business</li>
                <li>Shop for Business</li>
              </ul>

              <ul>
                <li><b>For Education</b></li>
                <li>Apple and Education</li>
                <li>Shop for K-12</li>
                <li>Shop for College</li>
              </ul>

              <ul>
                <li><b>For Healthcare</b></li>
                <li>Apple in Healthcare</li>
                <li>Health on Apple Watch</li>
                <li>Health Records on iPhone</li>
              </ul>

              <ul>
                <li><b>For Government</b></li>
                <li>Shop for Government</li>
                <li>Shop for Veterans and Military</li>
              </ul>

            </div>
            <div className="footer-mid-content5">
              <ul>
                <li><b>Apple Values</b></li>
                <li>Accessibility</li>
                <li>Education</li>
                <li>Environment</li>
                <li>Inclusion and Diversity</li>
                <li>Privacy</li>
                <li>Racial Equity and Justice</li>
                <li>Supplier Responsibility</li>
              </ul> 
              <ul>
                <li><b>About Apple</b></li>
                <li>Newsroom</li>
                <li>Apple Leadership</li>
                <li>Career Opportunities</li>
                <li>Investors</li>
                <li>Ethics & Compliance</li>
                <li>Events</li>
                <li>Contact Apple</li>
              </ul>
            </div>
          </div>

          {/* footer-mobile */}

          <div className="footer-middle-bottom footer-mobile mt-7">
            <div className="footer-mid-content">
                <div className="slide-down"> 
                  <p className='flex items-center'><b onClick={toggleVisibility1} className='cursor-pointer'>Shop and Learn</b><BsChevronDown className='down-icon ml-auto' onClick={toggleVisibility1}/></p>
                  <div className="" ref={linkRef1}
                    style={{
                      height: isVisible1 ? linkRef1.current?.scrollHeight : 0,
                      opacity: isVisible1 ? 1 : 0,
                      transition: "height 0.5s ease-in-out, opacity 1s ease-in-out",
                      overflow: "hidden",
                    }}
                  >
                    <ul>
                      <li>Store</li>
                      <li>Mac</li>
                      <li>iPad</li>
                      <li>iPhone</li>
                      <li>Watch</li>
                      <li>AirPods</li>
                      <li>TV & Home</li>
                      <li>AirTag</li>
                      <li>Accessories</li>
                      <li>Gift Cards</li>
                    </ul>
                    </div>
              </div> 
            </div>

            <div className="footer-middle-bottom footer-mobile mt-7">
            <div className="footer-mid-content">
                <div className="slide-down"> 
                  <p className='flex items-center'><b onClick={toggleVisibility2} className='cursor-pointer'>Apple Wallet</b><BsChevronDown className='down-icon ml-auto' onClick={toggleVisibility2}/></p>
                  <div className="" ref={linkRef2}
                    style={{
                      height: isVisible2 ? linkRef2.current?.scrollHeight : 0,
                      opacity: isVisible2 ? 1 : 0,
                      transition: "height 0.5s ease-in-out, opacity 1s ease-in-out",
                      overflow: "hidden",
                    }}
                  >
                    <ul>
                      <li>Wallet</li>
                      <li>Apple Card</li>
                      <li>Apple Pay</li>
                      <li>Apple Cash</li>
                      <li>Apple Crypto</li>
                    </ul>
                </div>
              </div> 
            </div>
            </div>

            <div className="footer-mid-content mt-7">
              <div className="slide-down"> 
                    <p className='flex items-center'><b onClick={toggleVisibility3} className='cursor-pointer'>Account</b><BsChevronDown className='down-icon ml-auto' onClick={toggleVisibility3}/></p>
                    <div className="" ref={linkRef3}
                      style={{
                        height: isVisible3 ? linkRef3.current?.scrollHeight : 0,
                        opacity: isVisible3 ? 1 : 0,
                        transition: "height 0.5s ease-in-out, opacity 1s ease-in-out",
                        overflow: "hidden",
                      }}
                    >
                <ul>
                  <li>Manage Your Apple ID</li>
                  <li>Apple Store Account</li>
                  <li>iCloud.com</li>
                </ul>
                </div>
              </div>
            </div>

            <div className="footer-mid-content mt-7">
              <div className="slide-down"> 
                    <p className='flex items-center'><b onClick={toggleVisibility4} className='cursor-pointer'>Entertainment</b><BsChevronDown className='down-icon ml-auto' onClick={toggleVisibility4}/></p>
                    <div className="" ref={linkRef4}
                      style={{
                        height: isVisible4 ? linkRef4.current?.scrollHeight : 0,
                        opacity: isVisible4 ? 1 : 0,
                        transition: "height 0.5s ease-in-out, opacity 1s ease-in-out",
                        overflow: "hidden",
                      }}
                    >
                <ul>
                  <li>Apple One</li>
                  <li>Apple TV+</li>
                  <li>Apple Music</li>
                  <li>Apple Arcade</li>
                  <li>Apple Fitness+</li>
                  <li>Apple News+</li>
                  <li>Apple Podcasts</li>
                  <li>Apple Books</li>
                  <li>App Store</li>
                </ul>
                </div>
              </div>
            </div>

            <div className="footer-mid-content mt-7">
              <div className="slide-down"> 
                    <p className='flex items-center'><b onClick={toggleVisibility5} className='cursor-pointer'>Apple Store</b><BsChevronDown className='down-icon ml-auto' onClick={toggleVisibility5}/></p>
                    <div className="" ref={linkRef5}
                      style={{
                        height: isVisible5 ? linkRef5.current?.scrollHeight : 0,
                        opacity: isVisible5 ? 1 : 0,
                        transition: "height 0.5s ease-in-out, opacity 1s ease-in-out",
                        overflow: "hidden",
                      }}
                    >
              <ul>
                <li>Find a Store</li>
                <li>Genius Bar</li>
                <li>Today at Apple</li>
                <li>Apple Camp</li>
                <li>Apple Store App</li>
                <li>Certified Refurbished</li>
                <li>Apple Trade In</li>
                <li>Financing</li>
                <li>Carrier Deals at Apple</li>
                <li>Order Status</li>
                <li>Shopping Help</li>
              </ul>
              </div>
            </div>
            </div>
  
            <div className="footer-mid-content mt-7">
              <div className="slide-down"> 
                  <p className='flex items-center'><b onClick={toggleVisibility6} className='cursor-pointer'>For Business</b><BsChevronDown className='down-icon ml-auto' onClick={toggleVisibility6}/></p>
                  <div className="" ref={linkRef6}
                    style={{
                      height: isVisible6 ? linkRef6.current?.scrollHeight : 0,
                      opacity: isVisible6 ? 1 : 0,
                      transition: "height 0.5s ease-in-out, opacity 1s ease-in-out",
                      overflow: "hidden",
                    }}
                  >
              <ul>
                <li>Apple and Business</li>
                <li>Shop for Business</li>
              </ul>
              </div>
            </div>
            </div>

              <div className="footer-mid-content mt-7">
              <div className="slide-down"> 
                  <p className='flex items-center'><b onClick={toggleVisibility7} className='cursor-pointer'>For Education</b><BsChevronDown className='down-icon ml-auto' onClick={toggleVisibility7}/></p>
                  <div className="" ref={linkRef7}
                    style={{
                      height: isVisible7 ? linkRef7.current?.scrollHeight : 0,
                      opacity: isVisible7 ? 1 : 0,
                      transition: "height 0.5s ease-in-out, opacity 1s ease-in-out",
                      overflow: "hidden",
                    }}
                  >
              <ul>
                <li>Apple and Education</li>
                <li>Shop for K-12</li>
                <li>Shop for College</li>
              </ul>
              </div>
            </div>
            </div>
            
            <div className="footer-mid-content mt-7">
              <div className="slide-down"> 
                  <p className='flex items-center'><b onClick={toggleVisibility8} className='cursor-pointer'>For Healthcare</b><BsChevronDown className='down-icon ml-auto' onClick={toggleVisibility8}/></p>
                  <div className="" ref={linkRef8}
                    style={{
                      height: isVisible8 ? linkRef8.current?.scrollHeight : 0,
                      opacity: isVisible8 ? 1 : 0,
                      transition: "height 0.5s ease-in-out, opacity 1s ease-in-out",
                      overflow: "hidden",
                    }}
                  >
              <ul>
                <li>Apple in Healthcare</li>
                <li>Health on Apple Watch</li>
                <li>Health Records on iPhone</li>
              </ul>
              </div>
            </div>
          </div>

          <div className="footer-mid-content mt-7">
              <div className="slide-down"> 
                  <p className='flex items-center'><b onClick={toggleVisibility9} className='cursor-pointer'>For Government</b><BsChevronDown className='down-icon ml-auto' onClick={toggleVisibility9}/></p>
                  <div className="" ref={linkRef9}
                    style={{
                      height: isVisible9 ? linkRef9.current?.scrollHeight : 0,
                      opacity: isVisible9 ? 1 : 0,
                      transition: "height 0.5s ease-in-out, opacity 1s ease-in-out",
                      overflow: "hidden",
                    }}
                  >
              <ul>
                <li>Shop for Government</li>
                <li>Shop for Veterans and Military</li>
              </ul>
              </div>
            </div>
          </div>

            <div className="footer-mid-content mt-7">
              <div className="slide-down"> 
                    <p className='flex items-center'><b onClick={toggleVisibility10} className='cursor-pointer'>Apple Values</b><BsChevronDown className='down-icon ml-auto' onClick={toggleVisibility10}/></p>
                    <div className="" ref={linkRef10}
                      style={{
                        height: isVisible10 ? linkRef10.current?.scrollHeight : 0,
                        opacity: isVisible10 ? 1 : 0,
                        transition: "height 0.5s ease-in-out, opacity 1s ease-in-out",
                        overflow: "hidden",
                      }}
                    >
              <ul>
                <li>Accessibility</li>
                <li>Education</li>
                <li>Environment</li>
                <li>Inclusion and Diversity</li>
                <li>Privacy</li>
                <li>Racial Equity and Justice</li>
                <li>Supplier Responsibility</li>
              </ul>
            </div>
            </div>
          </div>
            

            <div className="footer-mid-content mt-7">
              <div className="slide-down"> 
                    <p className='flex items-center'><b onClick={toggleVisibility11} className='cursor-pointer'>About Apple</b><BsChevronDown className='down-icon ml-auto' onClick={toggleVisibility11}/></p>
                    <div className="" ref={linkRef11}
                      style={{
                        height: isVisible11 ? linkRef11.current?.scrollHeight : 0,
                        opacity: isVisible11 ? 1 : 0,
                        transition: "height 0.5s ease-in-out, opacity 1s ease-in-out",
                        overflow: "hidden",
                      }}
                    >
              <ul>
                <li>Newsroom</li>
                <li>Apple Leadership</li>
                <li>Career Opportunities</li>
                <li>Investors</li>
                <li>Ethics & Compliance</li>
                <li>Events</li>
                <li>Contact Apple</li>
              </ul>
            </div>
          </div>
        </div>

        </div>
      </section>
      
      <section className="footer-bottom">
          <div className="footer-bottom-top pb-3">
            <p>More ways to shop: <span>Find an Apple Store</span> or <span>other retailer</span> near you. Or call 1-800-MY-APPLE.</p>
          </div>

          <div className="footer-bottom-bottom mt-3">
              <p>Copyright © 2023 Apple Inc. All rights reserved.</p>
              <p className=''>Privacy Policy | Terms of Use | Sales and Refunds | Legal | Site Map</p>
              <p className=''>United States </p>
          </div>
      </section>
    </div>
  )
}

export default Footer