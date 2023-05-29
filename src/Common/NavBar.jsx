import React, {useRef}from 'react'
import { NavLink } from 'react-router-dom'
import '../Css/NavBar.css'
import search from '../Assets/svg/search.svg'
import appleIcon from '../Assets/svg/appleLogo.svg'
import shoppingBag from '../Assets/svg/shoppingBag.svg'
import menu from '../Assets/svg/menu.svg'
import close from '../Assets/svg/close.svg'

const NavBar = () => {
    
    const navRef = useRef(null);

    const showNavbar = () => {
        if (navRef.current) {
            navRef.current.classList.toggle('responsive_nav');
          }
    }

  return (
    <div id='navbar' style={{ fontFamily: "SFProDisplayRegular" }} >

        {/* Navbar for web */}

        <ul id='nav'>
            <li className='apple-icon-web'>
                <div className="nav-icons ">
                    <img src={appleIcon} alt="" />
                </div>
            </li>

            <NavLink className='nav-link'><a>Store</a>
                 <div className="nav-content">
                    <ul>
                        <li><p>Shop</p></li>
                        <li><h2>Shop the Latest</h2></li>
                        <li><h2>Mac</h2></li>
                        <li><h2>iPad</h2></li>
                        <li><h2>iPhone</h2></li>
                        <li><h2>Apple Watch</h2></li>
                        <li><h2>Accessories</h2></li>
                    </ul>
                    <ul className=''>
                        <li><p>Quick Links</p></li>
                        <li><h2>Find a Store</h2></li>
                        <li><h2>Order Status</h2></li>
                        <li><h2>Apple Trade In</h2></li>
                        <li><h2>Financing</h2></li>
                    </ul>
                    <ul className=''>
                        <li><p>Shop Special Stores</p></li>
                        <li><h2>Certified Refurbished</h2></li>
                        <li><h2>Education</h2></li>
                        <li><h2>Business</h2></li>
                        <li><h2>Veterans and Military</h2></li>
                        <li><h2>Government</h2></li>
                    </ul>
                </div>
                
            </NavLink>

            <NavLink className='nav-link'><a>Mac</a>
                <div className="nav-content">
                    <ul>
                        <li><p>Explore Mac</p></li>
                        <li><h2>Explore All Mac</h2></li>
                        <li><h2>MacBook Air</h2></li>
                        <li><h2>MacBook Pro</h2></li>
                        <li><h2>iMac</h2></li>
                        <li><h2>Mac mini</h2></li>
                        <li><h2>Mac Studio</h2></li>
                        <li><h2>Mac Pro</h2></li>
                        <li><h2>Displays</h2></li>
                        <li><p>Compare Mac</p></li>
                        <li><p>Mac Does That</p></li>
                    </ul>
                    <ul>
                        <li><p>Shop iPad</p></li>
                        <li><h2>Shop iPad</h2></li>
                        <li><h2>iPad Accessories</h2></li>
                        <li><h2>Apple Trade In</h2></li>
                        <li><h2>Financing</h2></li>
                    </ul>
                    <ul>
                        <li><p>More from Mac</p></li>
                        <li><h2>Mac Support</h2></li>
                        <li><h2>Final Cut Pro</h2></li>
                        <li><h2>Logic Pro</h2></li>
                        <li><h2>Continuity</h2></li>
                        <li><h2>iCloud</h2></li>
                        <li><h2>Mac for Business</h2></li>
                        <li><h2>Education</h2></li>
                    </ul>
                </div>
            </NavLink>
            <NavLink className='nav-link'><a>iPad</a>
                <div className="nav-content">
                    <ul>
                        <li><p>Explore iPad</p></li>
                        <li><h2>Explore All iPad</h2></li>
                        <li><h2>iPad Pro</h2></li>
                        <li><h2>iPad Air</h2></li>
                        <li><h2>iPad</h2></li>
                        <li><h2>iPad mini</h2></li>
                        <li><h2>Apple Pencil</h2></li>
                        <li><h2>Keyboards</h2></li>
                        <li><p>Compare iPad</p></li>
                        <li><p>Why iPad</p></li>
                    </ul>
                    <ul>
                        <li><p>Shop iPad</p></li>
                        <li><h2>Shop iPad</h2></li>
                        <li><h2>iPad Accessories</h2></li>
                        <li><h2>Apple Trade In</h2></li>
                        <li><h2>Financing</h2></li>
                    </ul>
                    <ul>
                        <li><p>More from iPad</p></li>
                        <li><h2>iPad Support</h2></li>
                        <li><h2>Final Cut Pro for iPad</h2></li>
                        <li><h2>Logic Pro for iPad</h2></li>
                        <li><h2>iCloud</h2></li>
                        <li><h2>Education</h2></li>
                    </ul>
                </div>                
            </NavLink>

            <NavLink className='nav-link'><a>iPhone</a>
                <div className="nav-content">
                    <ul>
                        <li><p>Explore iPhone</p></li>
                        <li><h2>Explore All iPhone</h2></li>
                        <li><h2>iPhone 14 Pro</h2></li>
                        <li><h2>iPhone 14</h2></li>
                        <li><h2>iPhone 13</h2></li>
                        <li><h2>iPhone 12</h2></li>
                        <li><h2>iPhone SE</h2></li>
                        <li><p>Compare iPhone</p></li>
                        <li><p>Switch to iPhone</p></li>
                    </ul>
                    <ul>
                        <li><p>Shop iPhone</p></li>
                        <li><h2>Shop iPhone</h2></li>
                        <li><h2>iPhone Accessories</h2></li>
                        <li><h2>Apple Trade In</h2></li>
                        <li><h2>Carrier Deals at Apple</h2></li>
                        <li><h2>Financing</h2></li>
                    </ul>
                    <ul>
                        <li><p>More from iPhone</p></li>
                        <li><h2>iPhone Support</h2></li>
                        <li><h2>iOS 16</h2></li>
                        <li><h2>iPhone Privacy</h2></li>
                        <li><h2>iCloud</h2></li>
                        <li><h2>Wallet, Pay, Pay+, Card</h2></li>
                        <li><h2>Siri</h2></li>
                    </ul>
                </div>            
            </NavLink>

            <NavLink className='nav-link'><a>Watch</a>
                <div className="nav-content">
                    <ul>
                        <li><p>Explore Watch</p></li>
                        <li><h2>Explore All Apple Watch</h2></li>
                        <li><h2>Apple Watch Ultra</h2></li>
                        <li><h2>Apple watch series 8</h2></li>
                        <li><h2>Apple Watch SE</h2></li>
                        <li><h2>Apple Watch Nike</h2></li>
                        <li><h2>Apple Watch Hermés</h2></li>
                        <li><p>Compare Watch</p></li>
                        <li><p>Why Apple Watch</p></li>
                    </ul>
                    <ul>
                        <li><p>Shop Watch</p></li>
                        <li><h2>Shop Apple Watch</h2></li>
                        <li><h2>Apple Watch Studio</h2></li>
                        <li><h2>Apple Watch Bands</h2></li>
                        <li><h2>Apple Watch Accessories</h2></li>
                        <li><h2>Apple Trade In</h2></li>
                        <li><h2>Financing</h2></li>
                    </ul>
                    <ul>
                        <li><p>More from Watch</p></li>
                        <li><h2>Apple Watch Support</h2></li>
                        <li><h2>watchOS 9</h2></li>
                        <li><h2>Apple Fitness+</h2></li>
                    </ul>
                </div>
            </NavLink>

            <NavLink className='nav-link'><a>AirPods</a>
                <div className="nav-content">
                    <ul>
                        <li><p>Explore AirPods</p></li>
                        <li><h2>Explore All AirPods</h2></li>
                        <li><h2>AirPods 2nd generation</h2></li>
                        <li><h2>AirPods 3rd generation</h2></li>
                        <li><h2>AirPods Pro 2nd generation</h2></li>
                        <li><h2>AirPods Max</h2></li>
                        <li><p>Compare AirPods</p></li>
                    </ul>
                    <ul>
                        <li><p>Shop AirPods</p></li>
                        <li><h2>Shop AirPods</h2></li>
                        <li><h2>AirPods Accessories</h2></li>
                    </ul>
                    <ul>
                        <li><p>More from AirPods</p></li>
                        <li><h2>AirPods Support</h2></li>
                        <li><h2>Apple Music</h2></li>
                    </ul>
                </div>
            </NavLink>

            <NavLink className='nav-link'><a>TV & Home</a>
                <div className="nav-content">
                    <ul>
                        <li><p>Explore TV & Home</p></li>
                        <li><h2>Explore TV & Home</h2></li>
                        <li><h2>Apple TV 4K</h2></li>
                        <li><h2>HomePod</h2></li>
                        <li><h2>HomePod mini</h2></li>
                    </ul>
                    <ul>
                        <li><p>Shop TV & Home</p></li>
                        <li><h2>Shop Apple TV 4K</h2></li>
                        <li><h2>Shop HomePod</h2></li>
                        <li><h2>Shop HomePod mini</h2></li>
                        <li><h2>Shop Siri Remote</h2></li>
                        <li><h2>TV & Home Accessories</h2></li>
                    </ul>
                    <ul>
                        <li><p>More from TV & Home</p></li>
                        <li><h2>Apple TV Support</h2></li>
                        <li><h2>HomePod Support</h2></li>
                        <li><h2>Apple TV app</h2></li>
                        <li><h2>Apple TV+</h2></li>
                        <li><h2>Home app</h2></li>
                        <li><h2>Apple Music</h2></li>
                        <li><h2>Siri</h2></li>
                        <li><h2>AirPlay</h2></li>
                    </ul>
                </div>
            </NavLink>

            <NavLink className='nav-link'><a>Entertainment</a>
                <div className="nav-content">
                    <ul>
                        <li><p>Explore Entertainment</p></li>
                        <li><h2>Explore Entertainment</h2></li>
                        <li><h2>Apple One</h2></li>
                        <li><h2>Apple TV+</h2></li>
                        <li><h2>Apple Music</h2></li>
                        <li><h2>Apple Arcade</h2></li>
                        <li><h2>Apple Fitness+</h2></li>
                        <li><h2>Apple News+</h2></li>
                        <li><h2>Apple Podcasts</h2></li>
                        <li><h2>Apple Books</h2></li>
                        <li><h2>Apple Store</h2></li>
                    </ul>
                    <ul>
                        <li><p>Support</p></li>
                        <li><h2>Apple TV+ Support</h2></li>
                        <li><h2>Apple Music Support</h2></li>
                    </ul>
                </div>
            </NavLink>

            <NavLink className='nav-link'><a>Accessories</a>
                <div className="nav-content">
                    <ul>
                        <li><p>Shop All Accessories</p></li>
                        <li><h2>Mac</h2></li>
                        <li><h2>iPad</h2></li>
                        <li><h2>iPhone</h2></li>
                        <li><h2>Apple Watch</h2></li>
                        <li><h2>AirPods</h2></li>
                        <li><h2>TV & Home</h2></li>
                    </ul>
                    <ul>
                        <li><p>Explore Accessories</p></li>
                        <li><h2>Made by Apple</h2></li>
                        <li><h2>Beats by Dr.Dre</h2></li>
                        <li><h2>AirTag</h2></li>
                    </ul>
                </div>
            </NavLink>

            <NavLink className='nav-link'><a>Support</a>
                <div className="nav-content">
                    <ul>
                        <li><p>Explore Support</p></li>
                        <li><h2>iPhone</h2></li>
                        <li><h2>Mac</h2></li>
                        <li><h2>iPad</h2></li>
                        <li><h2>Watch</h2></li>
                        <li><h2>AirPods</h2></li>
                        <li><h2>Music</h2></li>
                        <li><h2>TV</h2></li>
                        <li><p>Explore Support</p></li>
                    </ul>
                    <ul>
                        <li><p>Get Help</p></li>
                        <li><h2>Community</h2></li>
                        <li><h2>Check Coverage</h2></li>
                        <li><h2>Repair</h2></li>
                        <li><h2>Contact Us</h2></li>
                    </ul>
                    <ul>
                        <li><p>Helpful Topics</p></li>
                        <li><h2>Get AppleCare+</h2></li>
                        <li><h2>Apple ID & Password</h2></li>
                        <li><h2>Billing & Subscriptions</h2></li>
                        <li><h2>Find My</h2></li>
                        <li><h2>Accessibility</h2></li>
                    </ul>
                </div>
            </NavLink>

            <li>
                <div className="nav-icons">
                    <img src={search} alt="" />
                </div>
            </li>

            <li>
                <div className="nav-icons ">
                    <img src={shoppingBag} alt="" />
                </div>
            </li>

        </ul>

        {/* Navbar for mobile */}

        <ul className="cta-mobile navbar-mobile">
            <li>
                <div className="nav-icons apple-icon-mobile">
                    <img src={appleIcon} alt="" />
                </div>
            </li>

            <div className="nav-mobile" ref={navRef}>
                <NavLink className='nav-link'><a>Store</a></NavLink>
                <NavLink className='nav-link'><a>Mac</a></NavLink>
                <NavLink className='nav-link'><a>iPad</a></NavLink>
                <NavLink className='nav-link'><a>iPhone</a></NavLink>
                <NavLink className='nav-link'><a>Watch</a></NavLink>
                <NavLink className='nav-link'><a>AirPods</a></NavLink>
                <NavLink className='nav-link'><a>TV & Home</a></NavLink>
                <NavLink className='nav-link'><a>Entertainment</a></NavLink>
                <NavLink className='nav-link'><a>Accessories</a></NavLink>
                <NavLink className='nav-link'><a>Support</a></NavLink>
                <div className= 'nav-icons nav-close-btn' onClick={showNavbar}>
                    <img src={close} alt="" />
                </div>  
            </div>

            <li className='flex gap-4'>
                <div className="nav-icons">
                    <img src={search} alt="" />
                </div>
                <div className="nav-icons">
                    <img src={shoppingBag} alt="" />
                </div>
                <div className="nav-icons menu-icon" onClick={showNavbar}>
                    <img src={menu} alt="" />
                </div>
            </li>
        </ul>

    </div>
  )
}

export default NavBar