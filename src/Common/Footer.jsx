import React from 'react'
import '../Css/Footer.css'
import appleLogoWhite from '../Assets/svg/appleLogoWhite.svg'
import arrowForward from '../Assets/svg/arrowForward.svg'

const Footer = () => {
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
          <li className='mb-7'>To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS. Update to the latest version by going to Settings > General > Software Update. Tap Download and Install.</li>
          <li className='mb-7'>Available for qualifying applicants in the United States. Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.</li>
        </ul>
      </section>
      <section className="footer-middle my-7">
        <div className="footer-middle-top">
          <img src={appleLogoWhite} alt="" />
          <img src={arrowForward} alt="" />
          <p>Apple Pay Plus</p>
        </div>
          <div className="footer-middle-bottom">
            <div className="footer-mid-content1">
              <ul>
                <li><b>Shop and Learn</b></li>
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
      </section>
      <section className="footer-bottom">
          <div className="footer-bottom-top pb-3">
            <p>More ways to shop: <span>Find an Apple Store</span> or <span>other retailer</span> near you. Or call 1-800-MY-APPLE.</p>
          </div>

          <div className="footer-bottom-bottom mt-3">
              <p>Copyright © 2023 Apple Inc. All rights reserved.</p>
              <p className='ml-8'>Privacy Policy | Terms of Use | Sales and Refunds | Legal | Site Map</p>
              <p className='ml-auto'>United States </p>
          </div>
      </section>
    </div>
  )
}

export default Footer