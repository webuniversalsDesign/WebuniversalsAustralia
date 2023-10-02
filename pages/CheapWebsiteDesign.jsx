import Layout from "@/src/layout/Layout";
import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { latestswiper, partnerswiper, projectsswiper } from "@/src/sliderProps";


const CheapWebsiteDesign = () => {
  return (
    <Layout headerExtraClass={"three"} pageName={"Blog Single Post"}>
      <section>
        <div className="container">
          <div className="title-blog">
            <h2 >CHEAP WEBSITE DESIGN</h2>
            {/* <a href="#">Blog Single Post</a> */}
          </div>
          <div className="row">
            <div className="col-xl-8">
              <div className="blog-item">
                <img alt="img"  src="assets/img/Tag-image.png" />
                <h6>
                WHY DO YOU NEED A WEBSITE? AND HOW WEB UNIVERSALS CAN HELP YOU GET ONLINE
                </h6>
                <p className="p-30">
                Posted on November 30, 2015 at 4:02 am by admin / 0<br />
                </p>
                <hr />

                <p>Do you want immense fame in terms of your business? 
                  Absolutely you all deserve to have that. But for having 
                  that it is necessary to have a good website where you
                   could popularize your trade name or product. In this
                    respect, it is fine enough to focus on the designing 
                    of the site. As you could see that nowadays the internet is the best
                     form of publicizing. Indeed, it is essential to keep an 
                     enduring impression on the audience who would be attracted t
                     owards your site. That is why you need to select the right 
                     website design for small business.
                </p>
                <br />
                <p>Always remember that a wonderful website builds on the best way could definitely 
                  make your site exceptional from others. Being a small group does not have any kind
                   of apprehensions because a well developed website could leave same effect just 
                   like the larger organizations. You have to know the accurate ways of marketing 
                   your business, for that internet is the most unbeatable platform indeed.</p>
                   <br />
                   <p>No doubt it is essential to have a good website through which you could get 
                    the victory for your business. In addition to this, remember that an expert look
                     is very necessary to popularize your online presence. Moreover, you should try 
                     to get an ideal logo, which has a professional touch. Ensure that you could use
                      that both online along with offline.</p>
                      <br />
                   <p>One more thing you have to remember is that only building a site would never 
                    put an end to your task. While preparing the site you have to think the targeted
                     viewers. Moreover, being an owner of the site you have to focus on the
                      requirements and demands of customers.</p>
                      <br />
                   <p>In order to be perfect, make sure to do some research online which would help
                     you to get some new facts which you could incorporate in your site as well. Thus,
                      small business website design should be prepared keeping all these things in mind.</p>
                      <br />
                   <p>Web Universals are a professional, full service website design and development company 
                    that concentrates on providing total tailored solutions to assist you and your business
                     get an online presence , and make it easier for your brand to succeed in the relative 
                     area of business.</p>
                     <br />
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
      <br />
      <br />
    </Layout>
  );
};
export default CheapWebsiteDesign;
