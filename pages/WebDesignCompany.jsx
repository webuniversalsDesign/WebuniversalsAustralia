import Layout from "@/src/layout/Layout";
import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { latestswiper, partnerswiper, projectsswiper } from "@/src/sliderProps";


const WebDesignCompany = () => {
  return (
    <Layout headerExtraClass={"three"} pageName={"Blog Single Post"}>
      <section>
        <div className="container">
          <div className="title-blog">
            <h2>WEB DESIGN COMPANY AUSTRALIA</h2>
            {/* <a href="#">Blog Single Post</a> */}
          </div>
          <div className="row">
            <div className="col-xl-8">
              <div className="blog-item">
                <img alt="img"  src="assets/img/Tag-image.png" />
                <h6>
                HOW TO CHOOSE WEB DESIGN COMPANY AUSTRALIA
                </h6>
                <p className="p-30">
                Posted on May 22, 2017 at 7:39 am by admin / 0 <br />
                  <hr />
                Steps for finding the correct web design Company Australia for you
                </p>
                <h6>Assess your requirements:</h6>
                <p>An expert Web design company will work with you rather than for you.
                   It will assist you in defining your association supplies. And make sure about your requirement
                   <br />
                   Ask your Social Circle and relations:
                   <br />
                   Ask your associates, colleagues, and family which web Design Company provides those services
                    and at what rates. Also confirm about the services that they get in the selected package
                   </p>
                   <h6>Short List</h6>
                   <p>Shortlist of 4-5 web design firms that are most excellent suited for your project</p>
                   <h6>Assess their work:</h6>
                   <p>When it’s said assess, it means you have to estimate their portfolio, sort of websites they have designed.
                     It is necessary that you investigate a web design firm’s work so you can appraise their potential and quality standards.</p>
                   <h6>Get Proposals</h6>
                   <p>Good web design firm will for all time be ready to submit a proposal for your
                     website along with defined timeline, deliverables,
                     and terms & conditions. When assessing proposal, look how they 
                     talk with you using their website and digital documents.</p>
                   <h6>Assess Proposals</h6>
                   <p>After your association has expected all proposals, review and evaluate 
                    them with each other. How do they fare in terms of presentation? Do they
                     present improve paths for your project, going beyond the requirements of 
                      the instant goals outlined? So by doing the above mention steps you can 
                      easily choose the best web designing firm</p>
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
export default WebDesignCompany;
