import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { latestswiper, partnerswiper, projectsswiper } from "@/src/sliderProps";


const WebAustralia = () => {
  return (
    <Layout headerExtraClass={"three"} pageName={"Blog Single Post"}>
      <section>
        <div className="container">
          <div className="title-blog">
            <h2>ECOMMERCE WEBSITE AUSTRALIA</h2>
           
          </div>
          <div className="row">
            <div className="col-xl-8">
              <div className="blog-item">
                <img alt="img"  src="assets/img/latest-blog-1(1).jpg" />
                <h6>
                ECOMMERCE WEBSITE AUSTRALIA

                </h6>
                <p className="p-30">
                Posted on March 15, 2017 at 6:33 am by admin / 0<br />
                  <hr />
         
                </p>
                <p className="p-30">
                Designing an e-commerce website is a very professional job. The creation and designing of ecommerce website Australia is not the work of startup designers. It necessitates very expert and talented eCommerce website designers to design an e-commerce website that can finally become a success.
                <br/>
                So, if you desire to start a new e-commerce project or would like to upgrade your existing e-commerce website, then you should employ a capable e-commerce website designer company or person who is expert in latest e-commerce web designing techniques. Thus, you can rest certain that your e-commerce project is in the secure hands of a professional.
                <br/>
                Web Universals is a website development Australia Company with team of expert, who is capable to deliver quality results to its customers

                </p>
            
              </div>
           
            </div>
            <div className="col-xl-4 pl-60 pt-lg-5 pb-lg-5 pt-2 pb-2">
              <ul className="sidebar">
                <li>
                  <h4>RECENT POSTS </h4>
                  <hr />
                  <span><Link legacyBehavior href="#">How to Choose web design Company Australia</Link> <br />
                  <Link legacyBehavior href="#">Best website design gold coast Australia</Link> <br />
                  <Link legacyBehavior href="#">e-commerce development Brisbane</Link> <br />
                  <Link legacyBehavior href="#">Increase Customers by mean of the Website Design Services</Link> <br />
                  <Link legacyBehavior href="#">e-commerce development company</Link> <br /></span>
                </li>

                <li>
                  <h4>RECENT COMMENTS</h4>
                  <hr />
                  <span>""</span>
                </li>

                <li>
                  <h4>ARCHIVES </h4>
                  <hr />
              <span><Link legacyBehavior href="#">May 2017</Link> <br />
                  <Link legacyBehavior href="#">April 2017</Link> <br />
                  <Link legacyBehavior href="#">March 2017</Link> <br />
                  <Link legacyBehavior href="#">February 2017</Link> <br />
                  <Link legacyBehavior href="#">January 2017</Link> <br />
                  <Link legacyBehavior href="#">December 2016</Link> <br />
                  <Link legacyBehavior href="#">November 2016</Link> <br />
                  <Link legacyBehavior href="#">November 2015</Link> <br />
                  </span>
                </li>

                <li>
                  <h4>CATEGORIES</h4>
                  <hr />
                  <span>
                    <Link IlegacyBehavior href="#">Uncategorized</Link>
                    
                    </span><br/>
                    <hr />
                  <span>
                  <Link IlegacyBehavior href="#">Website design & Development</Link>
                    </span><br/>
                </li>


                <li>
                  <h4>META</h4>
                  <hr />
                  <span>
                  <Link IlegacyBehavior href="#">
                    Log in</Link>
                   </span><br/><br/>
                  <span>
                  <Link IlegacyBehavior href="#">Entries RSS</Link>
                    </span><br/><br/>
                  <span>
                  <Link IlegacyBehavior href="#">Comments RSS</Link>
                    
                    </span><br/><br/>
                  <span>
                  <Link IlegacyBehavior href="#">WordPress.org</Link>
                  </span><br/><br/>
                </li>

                <li>
                  <h4>Share post :</h4>
                  <ul className="brandicon">
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
     
      <section className="gap reaview-section">
        <div className="container">
          <div className="heading">
            <h6>Uncategorized</h6>
            <h2>RELATED POSTS</h2>
            <img alt="line" src="assets/img/headingline.png" />
          </div>
          <Swiper {...partnerswiper} className="swiper-container partnerswiper">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
              <div className="reaview">
                  <span>
                  <Link IlegacyBehavior href="#"> BEST WEBSITE DESIGN GOLD COAST AUSTRALIA</Link>
                  
                    <br />
                  </span>
                  <p>May 10, 2017 at 6:17 am admin/0</p>
                  <div className="boder"/>
                  <p>
                    “These days everyone wants to have its own site for their business. To get a&#8230;”
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
              <div className="reaview">
                  <span>
                  <Link IlegacyBehavior href="#">E-COMMERCE DEVELOPMENT BRISBANE</Link>
                  
                    <br />
                  </span>
                  <p>April 28, 2017 at 5:15 am admin/0</p>
                  <div className="boder"/>
                  <p>
                  "Most small and medium commerce are getting their e-commerce development Brisbane to take on their&#8230;”
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="reaview">
                  <span>
                  <Link IlegacyBehavior href="#">E-COMMERCE DEVELOPMENT COMPANY</Link>
                  
                    <br />
                  </span>
                  <p>March 30, 2017 at 5:32 am admin/0</p>
                  <div className="boder"/>
                  <p>
                    “There is no limit on making the website good-looking and remarkable. It all depends on&#8230;”
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
              <div className="reaview">
                  <span>
                  <Link IlegacyBehavior href="#">SEARCH ENGINE OPTIMIZATION PACKAGES SYDNEY</Link>
                  
                    <br />
                  </span>
                  <p>March 25, 2017 at 5:00 am admin/0</p>
                  <div className="boder"/>
                  <p>
                    “You obtain SOME visitor to your website but you be familiar with you could be&#8230”
                  </p>
                </div>
              </SwiperSlide>
            </div>
            <div className="swiper-button-next">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 476.213 476.213"
                style={{ enableBackground: "new 0 0 476.213 476.213" }}
                xmlSpace="preserve"
              >
                <polygon
                  points="405.606,167.5 384.394,188.713 418.787,223.106 0,223.106 0,253.106 418.787,253.106 384.394,287.5 
    405.606,308.713 476.213,238.106 "
                />
              </svg>
            </div>
            <div className="swiper-button-prev">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 476.213 476.213"
                style={{ enableBackground: "new 0 0 476.213 476.213" }}
                xmlSpace="preserve"
              >
                <polygon
                  points="405.606,167.5 384.394,188.713 418.787,223.106 0,223.106 0,253.106 418.787,253.106 384.394,287.5 
    405.606,308.713 476.213,238.106 "
                />
              </svg>
            </div>
            <div className="swiper-pagination" />
          </Swiper>
        </div>
      </section>
      <hr />

      <section className="contact-page gap">
        <div className="container">
          <div className="heading">
            <h6>Let's Talk</h6>
            <h2>LEAVE A REPLY</h2>
            <img alt="line" src="assets/img/headingline.png" />
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <form className="content-form">
                <div className="row">
                  <div className="col-lg-6">
                    <input type="text" name="name" placeholder="Your Name *" />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Company *"
                    />
                  </div>
                </div>
                <input type="text" name="name" placeholder="Your Email *" />
                <textarea placeholder="Your Message *" defaultValue={""} />
                <button className="themebtu">Submit</button>
              </form>
            </div>
            <div className="offset-lg-1 col-xl-5 col-lg-5">
              <ul className="sidebar">
                <li>
                  <h4>Address : </h4>
                  <span>
                  Ground floor, 8 Gowri Nivas, 13th Cross Rd,
                    <br />
                    1st K Block, Rajajinagar, Bengaluru, Karnataka 560010
                  </span>
                </li>
                <li>
                  <h4>Phone :</h4>
                  <a href="callto:08 8121 7826">
                    <span>08 8121 7826</span>
                  </a>
                </li>
                <li>
                  <h4>Email :</h4>
                  <a href="mailto:info@webuniversals.com">
                    <span>info@webuniversals.com</span>
                  </a>
                </li>
                <li>
                  <h4>Find us :</h4>
                  <ul className="brandicon">
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default WebAustralia;
