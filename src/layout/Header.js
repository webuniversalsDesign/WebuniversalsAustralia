import Link from "next/link";
import { useState } from "react";
import MobileHeader from "./MobileHeader";

import  { BsPersonWorkspace } from "react-icons/bs";
import  { FiSearch, FiFacebook } from "react-icons/fi";
import  { MdSendToMobile } from "react-icons/md";
import  { IoShareSocialOutline, IoLogoGooglePlaystore } from "react-icons/io5";

import  { BsFillTelephoneFill } from "react-icons/bs";
// import  { FiFacebook } from "react-icons/io";

const Header = ({ headerExtraClass, noHeaderBg, blackLogo }) => {
  const [searchToggle, setSearchToggle] = useState(false);
  const [toggle, setToggle] = useState(false);



//  const  clickService =()=>{
//     document.getElementById('megaMenu_items').classList.toggle("height-100");
// }

  return (
    <>
       <header
      className={headerExtraClass ? headerExtraClass : ""}
      style={
        !noHeaderBg
          ? { backgroundColor: "black" }
          : { backgroundColor: "transparent" }
      }
    >
      <div className="container-fluid adj-all_screen">
        <div className="nav">
          <div className="d-flex align-items-center">
            <div className="logo">
              <Link legacyBehavior href="/">
                <a>
                  {blackLogo ? (
                    <div>
                      <img alt="logo" src="assets/img/logo/black.gif" className="logo-resp2"/>
                  
                    </div>
                    
                  ) : (
                    <div>
                      <img alt="logo" src="assets/img/logo/white.gif" className="logo-resp2"/>
            
                    </div>
                  )}
                </a>
             
              </Link>
       
            </div>
            <ul className="menu">
          

              <li>
                <Link legacyBehavior href="/">
                  Home
                </Link>
              </li>

              <li>
                <Link legacyBehavior href="about">
   About Us
                </Link>
           


              </li>

              <li >
                <Link legacyBehavior href="">
      Our Services
                </Link>

                <ul className="sub-menu">
                  <li>
                    <Link legacyBehavior href="WebsiteDesignServices">
              Website Design Service
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="WebSiteRedesign">
                      Website Redesign
                    </Link>
                  </li>

                 

                  <li>
                    <Link legacyBehavior href="e-commerce-website-development-company">
                      e-Commerce Website
                    </Link>
                  </li>

                  <li>
                    <Link legacyBehavior href="MobileAppDevelopment">
                    Mobile App
                    </Link>
                  </li>

                  <li>
                    <Link legacyBehavior href="search-engine-optimization">
                    Search Engine  Optimization 
                    </Link>
                  </li>

                  <li>
                    <Link legacyBehavior href="SocialMediaMarketing">
                   Social Media Marketing
                    </Link>
                  </li>

                  <li>
                    <Link legacyBehavior href="GoogleAds">
                 Google Ads
                    </Link>
                  </li>

                  <li>
                    <Link legacyBehavior href="FacebookAds">
                 Facebook Ads
                    </Link>
                  </li>

                </ul>
              </li>


              <li>
              <Link legacyBehavior href="">
      Graphic Design
                </Link>

                <ul className="sub-menu">
                  <li>
                    <Link legacyBehavior href="BrochureDesign">
              Brochure Design
                    </Link>
                  </li>

                  <li>
                    <Link legacyBehavior href="LogoDesign">
                      Logo Design
                    </Link>
                  </li>

                </ul>
              </li>


              {/* <li>
                <Link legacyBehavior href="blog">
                  Blog
                </Link>
              
              </li> */}

              
              <li>
                <Link legacyBehavior href="contacts">
                  Contact Us
                </Link>
              
              </li>

        

                {/* <li>
                  <Link legacyBehavior href="">
                    Online Marketing  
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link legacyBehavior href="SearchEngineOptimization">
                        Search Engine Optimization
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="SocialMediaMarketing">
                        Social Media Marketing
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link legacyBehavior href="MobileAppDevelopment">
              Mobile App Development
                  </Link>
                </li> */}

         
            </ul>
          </div>
          <div>
      

              <a href="tel:+61 08 7200 7227" className="themebtu"> <BsFillTelephoneFill style={{fontSize:"18px"}} className="mb-1"/> &nbsp;08 7200 7227 </a>
       
          </div>
          <div className="bar-menu" onClick={() => setToggle(true)}>
            <i className="fa-solid fa-bars" />
          </div>
        </div>
      </div>
      <MobileHeader toggle={toggle} close={() => setToggle(false)} />


    </header>
    <a href="tel:+61 8 7200 7227" type="button" className="btn-mod">
Call Now
</a>
    </>
   

    
  );
};
export default Header;
