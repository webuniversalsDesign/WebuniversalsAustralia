import Link from "next/link";
import { useState } from "react";
const MobileHeader = ({ toggle, close }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeSubMenu = (value) => (value == activeMenu ? "active" : "");
  return (
    <div
      className={`mobile-nav ${toggle ? "open" : "hmburger-menu"}`}
      id="mobile-nav"
      style={{ display: "block" }}
    >
      <div className="res-log">
        <Link href="/">
          <img src="assets/img/logo/white.gif" alt="Responsive Logo" style={{height:"50px",width:"auto", marginLeft:"-25px"}}/>
        </Link>

      </div>
      <ul>
        <li>
                <Link legacyBehavior href="/">
                  Home
                </Link>
              </li>


              <li>
                <Link legacyBehavior href="/About">
                  About Us
                </Link>
              </li>

    

        <li className={`menu-item-has-children ${activeSubMenu("webDesign")}`}>
          <a href="JavaScript:void(0)" onClick={() => active("webDesign")}>
       Our Services
          </a>
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
                    <Link legacyBehavior href="E-commerce">
                      e-Commerce Website
                    </Link>
                  </li>

                  <li>
                    <Link legacyBehavior href="WebsiteDesignOffer">
                      Website Design Offer
                    </Link>
                  </li>

                  <li>
                    <Link legacyBehavior href="MobileAppDevelopment">
                    Mobile App
                    </Link>
                  </li>

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

        <li className={`menu-item-has-children ${activeSubMenu("online")}`}>
          <a href="JavaScript:void(0)" onClick={() => active("online")}>
          Graphic Design
          </a>
          <ul className="sub-menu">
                  <li>
                    <Link legacyBehavior href="">
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


        <li>
                <Link legacyBehavior href="MobileAppDevelopment">
             Mobile App Development
                </Link>
              </li>

        {/* <li>
                <Link legacyBehavior href="blog">
                  Blog
                </Link>
              
              </li> */}

        <li>
          <Link legacyBehavior href="contacts">
            contacts
          </Link>
        </li>
      </ul>
      <a href="JavaScript:void(0)" id="res-cross" onClick={() => close()} />
    </div>
  );
};
export default MobileHeader;
