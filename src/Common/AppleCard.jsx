import React, {useEffect, useState,useRef} from 'react'
import '../Css/NavBar.css'
import search from '../Assets/svg/search.svg'
import appleIcon from '../Assets/svg/appleLogo.svg'
import shoppingBag from '../Assets/svg/shoppingBag.svg'

const NavBar = () => {
    const [isVisibleStore, setIsVisibleStore] = useState(false)
    const [isVisibleMac, setIsVisibleMac] = useState(false)

    const linkRefStore = useRef(null);
    const HandleHover= () => {
        setIsVisibleStore(true)
    }
    const HandleMouseLeave= () => {
        setIsVisibleStore(false)
    }

    const linkRefMac= useRef(null);
    const HandleHoverMac= () => {
        setIsVisibleMac(true)
    }
    const HandleMouseLeaveMac= () => {
        setIsVisibleMac(false)
    }

  return (
    <div id='navbar' style={{ fontFamily: "SFProDisplayRegular" }}>
        <div className="nav-icons">
            <img src={appleIcon} alt="" />
        </div>
        <div className='nav-text' onMouseEnter={HandleHover} onMouseLeave={HandleMouseLeave}>
            <p>Store</p>
            <div className="nav-text-content" ref={linkRefStore}
            style={{
                height: isVisibleStore ? linkRefStore.current?.scrollHeight : 0,
                opacity: isVisibleStore ? 1 : 0,
                transition: "height 1s ease-in-out, opacity 1s ease-in-out",
                overflow: "none",
                // display:'none',
                }}>
                  <div className="nav-text-content1">
                        <p>Shop</p>
                        <h2>Shop the Latest</h2>
                        <h2>Mac</h2>
                        <h2>iPad</h2>
                        <h2>iPhone</h2>
                        <h2>iPhone</h2>
                        <h2>Apple Watch</h2>
                        <h2>Accessories</h2>
                    </div>  
                  <div className="nav-text-content2">
                        <p>Quick Links</p>
                        <h2>Find a Store</h2>
                        <h2>Order Status</h2>
                        <h2>Apple Trade In</h2>
                        <h2>Financing</h2>
                    </div>  
                  <div className="nav-text-content3">
                        <p>Shop Special Stores</p>
                        <h2>Certified Refurbished</h2>
                        <h2>Education</h2>
                        <h2>Business</h2>
                        <h2>Veterans and Military</h2>
                        <h2>Government</h2>
                    </div>  
            </div>
        </div>
        <div className='nav-text' onMouseEnter={HandleHoverMac} onMouseLeave={HandleMouseLeaveMac}>
            <p>Mac</p>
            <div className="nav-text-content" ref={linkRefMac}
            style={{
                height: isVisibleMac ? linkRefMac.current?.scrollHeight : 0,
                opacity: isVisibleMac ? 1 : 0,
                transition: "height 1s ease-in-out, opacity 1s ease-in-out",
                overflow: "none",
                // display:'none',
                }}>
                  <div className="nav-text-content1">
                        <p>Shop</p>
                        <h2>Shop the Latest</h2>
                        <h2>Mac</h2>
                        <h2>iPad</h2>
                        <h2>iPhone</h2>
                        <h2>iPhone</h2>
                        <h2>Apple Watch</h2>
                        <h2>Accessories</h2>
                    </div>  
                  <div className="nav-text-content2">
                        <p>Quick Links</p>
                        <h2>Find a Store</h2>
                        <h2>Order Status</h2>
                        <h2>Apple Trade In</h2>
                        <h2>Financing</h2>
                    </div>  
                  <div className="nav-text-content3">
                        <p>Shop Special Stores</p>
                        <h2>Certified Refurbished</h2>
                        <h2>Education</h2>
                        <h2>Business</h2>
                        <h2>Veterans and Military</h2>
                        <h2>Government</h2>
                    </div>  
            </div>
        </div>
        {/* <p className='nav-text'>Mac</p> */}
        <p className='nav-text'>iPad</p>
        <p className='nav-text'>iPhone</p>
        <p className='nav-text'>Watch</p>
        <p className='nav-text'>AirPods</p>
        <p className='nav-text'>TV & Home</p>
        <p className='nav-text'>Entertainment</p>
        <p className='nav-text'>Accessories</p>
        <p className='nav-text'>Support</p>
        <div className="nav-icons">
            <img src={search} alt="" />
        </div>
        <div className="nav-icons">
            <img src={shoppingBag} alt="" />
        </div>
    </div>
  )
}

export default NavBar