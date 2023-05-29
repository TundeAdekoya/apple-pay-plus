import React from 'react'
import '../Css/Footer.css'

const Footer = () => {
  return (
    <div id='footer' style={{ fontFamily: "SFProTextLight" }} >
      <section className="footer-top">
        <ol className="footer-top-numbers">
        <li>Apple Cash services are provided by Green Dot Bank, Member FDIC. Learn more about the <span>Terms and Conditions.</span> Only available in the U.S. on eligible devices. To send and receive money with an Apple Cash account, you must be 18 and a U.S. resident. If you’re under 18, your family organizer can set up Apple Cash for you as part of their Apple Cash Family account. Security checks may require more time to make funds available. Apple Cash Family accounts can send or receive up to $2000 per transaction or within a seven-day period. Sending money from Wallet requires iOS 15.5 or later.</li>
        <li>Requires iPhone Xs or later with iOS 15.5 or later. The Contactless Symbol is a trademark owned by and used with permission of EMVCo, LLC.</li>
        <li>Variable APRs for Apple Card other than ACMI range from 15.74% to 26.74% based on creditworthiness. Rates as of April 1, 2023.</li>
        </ol>

        <ul>
          <li>To use Apple Pay you need a supported card from a participating card issuer. To check if your card is compatible with Apple Pay, contact your card issuer.</li>
          <li>Apple Pay is not available in all markets. <span>View Apple Pay countries and regions.</span></li>
          <li>Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.</li>
          <li>Some features require specific hardware and software. For more information, see <span>Feature Availability</span>.</li>
          <li>To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS. Update to the latest version by going to Settings > General > Software Update. Tap Download and Install.</li>
          <li>Available for qualifying applicants in the United States. Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.</li>
        </ul>
      </section>
      <section className="footer-middle">
        
      </section>
      <section className="footer-bottom">

      </section>
    </div>
  )
}

export default Footer