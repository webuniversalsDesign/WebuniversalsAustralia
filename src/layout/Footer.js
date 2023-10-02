import Link from "next/link";
import { BsPinterest } from 'react-icons/bs'; 
import { TfiGoogle } from 'react-icons/tfi'; 


const Footer = () => {
  return (
    <>
          <footer className="gap no-bottom" style={{ backgroundColor: "#222" }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer-logo links">
            <div className="d-flex justify-content-start">
              <Link href="/">
                <img alt="img" className="logo-adjust"  src="assets/img/logo/white.gif" />
              </Link>
            </div>
             
              {/* <h6>Contact us</h6> */}
              <ul>
                <li className="mt-2 mb-2">
                  <a href="tel:+61 8 7200 7227" className="footer-links"><i class="fa-solid fa-phone"></i>  08 7200 7227</a>
                </li>
                <li className="mt-2 mb-2">
                  <a href="mailto:www.webuniversals.com" className="footer-links"><i class="fa-solid fa-envelope"></i> info@webuniversals.com</a>
                </li>
                <li className="mt-2 mb-2">
                  <a href="https://webuniversals.com/" target="_blank" rel="noopener" className="footer-links"><i class="fa-solid fa-globe"></i> www.webuniversals.com</a>
                </li>
           
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="links">
              <h6>Quick links</h6>
              <ul>
                <li>
                  <Link legacyBehavior href="/about">
                  About us
                </Link>
                </li>
                <li>
                <Link legacyBehavior href="/portfolio">
                Portfolio
                </Link>
                </li>
                <li>
                  {/* <a href="team.html">team</a> */}
                  <Link legacyBehavior href="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/e-commerce">
                    E-commerce
                  </Link>
                </li>
                <li className="pb-0">
                  <a href="contacts.html"></a>
                  <Link legacyBehavior href="/contacts">
                  Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 mt-1 mb-1">
            <div className="links">
              <h6>TAGS</h6>
              <ul>
                <li>
                  {/* <a href="about.html">About us</a> */}
                  <Link legacyBehavior href="/">
Website Design Company Australia
                </Link>
                </li>
                <li>
                <Link legacyBehavior href="/">
                Website Design Gold Coast Australia
                </Link>
                </li>
                <li>
                  {/* <a href="team.html">team</a> */}
                  <Link legacyBehavior href="/">
                  e-Commerce Development Brisbane
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/">
                  e-Commerce Website Australia
                  </Link>
                </li>
                <li>
                  {/* <Link legacyBehavior href="#"></Link> */}
                  <Link legacyBehavior href="/">
                  e-Commerce Development Company
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="links">
              <h6>Social Media</h6>
              <ul>
            <li>
              <a  href="http://www.facebook.com/sharer.php?u=https://webuniversals.com/&images=https://webuniversals.com/wp-content/uploads/2014/07/homepage2-94x150.png" target="_blank">
                <i className="fa-brands fa-facebook-f" />&nbsp;Facebook
              </a> 
            </li>
            <li>
              <a  href="https://twitter.com/webuniaustralia" target="_blank">
                <i className="fa-brands fa-twitter" />&nbsp;Twitter
              </a> 
            </li>
            <li>
              <a  href="https://in.pinterest.com/webuniaustralia/" target="_blank">
                <BsPinterest/>&nbsp;Pinterest
              </a> 
            </li>
            <li>
              <a  href="https://www.instagram.com/webuniversalsaus/" target="_blank">
              <i class="fa-brands fa-instagram"></i>&nbsp;Instagram
              </a>
            </li>
            <li>
              <a  href="http://plus.google.com/share?url=https://webuniversals.com/&title=" target="_blank">
              <i class="fa-brands fa-youtube"></i>&nbsp;YouTube
              </a> 
            </li>
          </ul>
            </div>
            
          </div>
        </div>
        <div className="footer-bottom text-center">
          <p>© 2011-23 All Rights Reserved | Web Universals</p>
          <ul>
          <li>
              <Link legacyBehavior href="WebsiteDesignOffer">
                Website Design Offer
              </Link>
          </li>
            <li>
              <Link legacyBehavior href="PrivacyAndPolicy">
                Privacy Policy
              </Link>
            </li>
            <li >
              <Link legacyBehavior href="Refund">
              Refund Policy
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="TermsAndCondition">
            T & C
              </Link>
            </li>
          
          </ul>
        
        </div>
      </div>

      

    </footer>
    </>

  );
};
export default Footer;
