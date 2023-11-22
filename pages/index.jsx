import TerioCounter from "@/src/components/TerioCounter";
import Layout from "@/src/layout/Layout";
import { partnerswiper, studiesswiper } from "@/src/sliderProps";
import Link from "next/link";
import { HiOutlineLightBulb } from 'react-icons/hi';
import { GiArcheryTarget, GiTeamIdea, GiCyberEye } from 'react-icons/gi';
import { CgWebsite } from 'react-icons/cg';
import { BiCartAlt } from 'react-icons/bi';
import { MdOutlineEnergySavingsLeaf } from 'react-icons/md';
// import {GiCyberEye} from 'react-icons/md';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { Swiper, SwiperSlide } from "swiper/react";
import Head from 'next/head';
import FormHome from "./FormHome";


const Index3 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_33d2bgh', 'template_i07hxug', form.current, '0qpfXzVciq8YilctV')
      .then((result) => {
        console.log(result.text);
        console.log("message Sent successfully :)")


      }, (error) => {
        console.log(error.text);
        console.log("message not sent email failed :(")

      });
  };

  return (

    <>
      <Head>
        <title>Website design company australia | webuniversals</title>

        <meta name="description" content="Transform your brand's online presence with our top-tier website design services in Australia. Engaging, responsive, and results-driven solutions await." />
        <meta name="keywords" content="Website design company australia" />

        <link rel="canonical" href="https://webuniversals.com/" />

      </Head>

      <Layout noHeaderBg headerExtraClass={"two"} blackLogo pageName={"Home 3"}>
        <section>

          <Swiper className="swiper-container herotwoswiper"
            loop={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false
            }}
          >
            <div className="swiper-wrapper">

              <SwiperSlide className="swiper-slide">
                <div
                  className="hero-section-one two"
                  style={{ background: "rgba(0, 0, 0, 0.5) url(assets/img/hero-img-2.jpg)", backgroundPosition: "center", position: "relative", backgroundBlendMode: "darken", backgroundRepeat: "no-repeat", width: "100%", height: "844px" }}
                >
                  <div className="container">
                    <div className="heading-boder">
                      <h2>
                        Experience the Brilliance of <span>Web Universals </span>
                      </h2>
                      <p>Your Gateway to Digital Excellence, Your Partner in Unforgettable Journeys</p>
                      <br />
                      <br />
                      <Link href="contacts" className="themebtu full">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div
                  className="hero-section-one two"
                  style={{ backgroundImage: "url(assets/img/banner4.jpg)", height: "844px", width: "100%" }}

                >
                  <div className="container">
                    <div className="heading-boder">
                      <h2>
                        UI/UX Design <span>Services </span>
                      </h2>
                      <p>User-Centric Experiences That Leave a Lasting Impression</p>
                      <br />
                      <br />
                      <Link href="contacts" className="themebtu full">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div
                  className="hero-section-one two"
                  style={{ background: "rgba(0, 0, 0, 0.5) url(assets/img/banner1.jpg)", backgroundPosition: "center", position: "relative", backgroundBlendMode: "darken", height: "844px", width: "100%" }}
                >
                  <div className="container">
                    <div className="heading-boder">
                      <h2 >
                        Website Redesign <span>Services </span>
                      </h2>
                      <p >Revamp. Refresh. Reignite. Unleashing the Power of Renewed Online Presence</p>
                      <br />
                      <br />
                      <Link href="contacts" className="themebtu full">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div
                  className="hero-section-one two"
                  style={{ background: "rgba(0, 0, 0, 0.5) url(assets/img/banner2.jpg)", position: "relative", backgroundBlendMode: "darken", height: "844px", width: "100%" }}
                >
                  <div className="container">
                    <div className="heading-boder">
                      <h2>
                        From Vision  <br /><span>to Viral</span>
                      </h2>
                      <p> Elevating Your Brand with Strategic Digital Magic</p>
                      <br />
                      <br />
                      <Link href="contacts" className="themebtu full">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div
                  className="hero-section-one two"
                  style={{ background: "rgba(0, 0, 0, 0.5) url(assets/img/banner3.jpg)", position: "relative", backgroundBlendMode: "darken", height: "844px", width: "100%" }}
                >
                  <div className="container">
                    <div className="heading-boder">
                      <h2>
                        Branding & Identity <span>Development</span>
                      </h2>
                      <p>Shaping Brands That Speak Stand Out, and Stay in Hearts Forever</p>
                      <br />
                      <br />
                      <Link href="contacts" className="themebtu full">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>





            </div>
            <div className="swiper-pagination" />
          </Swiper>
        </section>


        {/* ---------------------------------------------------------- */}


        <section className="gap services-two no-bottom">
          <div className="container">
            <div className="row">


              <div className="col-xl-6">
                <div className="heading">
                  {/* <h6 className="">Different. Relevant. Focused.</h6> */}
                  {/* <img
                  alt="line"
                  className="mb-4"
                  src="assets/img/headingline.png"
                /> */}
                </div>
                <div className="welcome-text">
                  <h1 style={{ fontSize: "35px" }}>Website Design Company Australia  </h1>
                  <br />

                  <h3> Discover the Essence of Online Excellence</h3>
                  <p>
                    Are you looking for a website that reflects the true spirit of your business
                    and captures the hearts of your Australian audience? Look no further! Since 2010,
                     Web Universals has been crafting awe-inspiring web solutions with an Australian 
                     touch that resonates with businesses and their customers.
                  </p>

                  <h3>Australia's Premier <br /> Website Design Company </h3>
                  <p>
                    At Web Universals, we take immense pride in being a trailblazer in Australia's website design and development. Our passion for crafting visually stunning, highly functional, and user-friendly websites has earned us the reputation of being Australia's top website design company.
                  </p>

                  <h3>Best in Class Web Solutions </h3>
                  <p>
                    Being Australia's best website design company comes with great responsibility, and we deliver excellence on every front. From bespoke website designs that align with your brand identity to seamless e-commerce platforms that drive sales, our services cater to every business need.
                  </p>




                </div>



              </div>
              <div className="offset-xl-1 col-xl-5">


                <div className="welcome two">
                  <img alt="img" src="assets/img/welcome-3.jpg" />
                  <img
                    alt="img"
                    className="img-welcome"
                    src="assets/img/welcome-4.jpg"
                  />
                </div>


              </div>
            </div>
          </div>
          <div className="tp-hero__shapes">
            <div className="style-shapes-4">
              <img alt="dots1" src="assets/img/dots1.png" />
            </div>
            <div className="style-shapes-5">
              <img alt="dots1" src="assets/img/shap-3.png" />
            </div>
            <div className="style-shapes-6">
              <img alt="dots1" src="assets/img/shap-2.png" />
            </div>
            <div className="style-shapes-7">
              <img alt="dots1" src="assets/img/shap-5.png" />
            </div>
          </div>
        </section>




        <section
          className="makes-us-different  mt-5"
          style={{ backgroundColor: "#f2edf5" }}
        >
          <div className="container">
            <div className="heading">
              {/* <h6>How It Works?</h6> */}
              <h2>What Makes Us Different?</h2>
              <img alt="line" src="assets/img/headingline.png" />
            </div>
            <div className="row pt-lg-2 pb-lg-2 pt-2 pb-2">


              <div className="col-xl-3 col-lg-6 pt-1 pb-1">
                <div className="makes-us-different-text1">
                  <GiArcheryTarget className="card-icons" />
                  <h4>Your Success is Our Priority  </h4>
                  <p>
                    At Web Universals, we believe in delivering timely and cost-effective services without compromising quality. Your satisfaction is paramount, and we strive to exceed your expectations at every step of the journey. </p>

                  <div className="card-btn">
                    <Link href="SearchEngineOptimization" className="themebtu full " style={{ padding: '8px 25px' }}>
                      Know More
                    </Link>
                  </div>

                </div>
              </div>


              <div className="col-xl-3 col-lg-6 pt-1 pb-1">
                <div className="makes-us-different-text1">
                  <GiTeamIdea className="card-icons" />
                  <h4>Tailored Solutions for Every Business  </h4>
                  <p>
                    Whether you're a small local enterprise or a large corporation, Web Universals has the perfect website design solution. Our talented designers and developers work collaboratively to create custom websites that make your brand stand out.</p>

                  <div className="card-btn">
                    <Link href="WebsiteDesignServices" className="themebtu full " style={{ padding: '8px 25px' }}>
                      Know More
                    </Link>
                  </div>
                </div>
              </div>





              <div className="col-xl-3 col-lg-6 pt-1 pb-1">
                <div className="makes-us-different-text1 mb-0">
                  <CgWebsite className="card-icons" />
                  <h4>Redesign, Revamp, Reimagine </h4>
                  <p>
                    If your website needs a facelift, our website redesign services are here to breathe new life into your online presence. Stay ahead of the curve with a refreshed, modern website that engages your audience. </p>

                  <div className="card-btn">
                    <Link href="WebSiteRedesign" className="themebtu full " style={{ padding: '8px 25px' }}>
                      Know More
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-6 pt-1 pb-1">
                <div className="makes-us-different-text1 mb-0">
                  <BiCartAlt className="card-icons" />
                  <h4>Elevate Your E-commerce Experience </h4>
                  <p>
                    Unlock the potential of online retail with our unparalleled e-commerce website design services. We empower your business with cutting-edge features and a seamless shopping experience that keeps customers returning for more.
                  </p>

                  <div className="card-btn">
                    <Link href="E-commerce" className="themebtu full " style={{ padding: '8px 25px' }}>
                      Know More
                    </Link>
                  </div>
                </div>
              </div>

            </div>

            <div className="row pt-lg-2 pb-lg-2 pt-2 pb-2">

              <div className="col-xl-4 col-lg-6 pt-1 pb-1">
                <div className="makes-us-different-text2">
                  <MdOutlineEnergySavingsLeaf className="card-icons" />
                  <h4>Amplify Your Digital Presence  </h4>
                  <p>
                    As a leading website design and development company in Australia, we understand the significance of digital marketing in today's competitive landscape. With our expert SEO, SMM, Google Ads PPC, and Facebook Ads & lead generation services, we ensure your business achieves the online visibility it deserves.</p>

                  <div className="card-btn">
                    <Link href="SocialMediaMarketing" className="themebtu full " style={{ padding: '8px 25px' }}>
                      Know More
                    </Link>
                  </div>
                </div>
              </div>



              <div className="col-xl-4 col-lg-6 pt-1 pb-1">
                <div className="makes-us-different-text2">
                  <GiCyberEye className="card-icons" />
                  <h4>From Vision to Reality </h4>
                  <p>
                    Your business deserves a unique identity, and our services extend beyond website design. Our expert team crafts captivating logos and brochures that embody your brand's essence, leaving a lasting impression on your customers.</p>

                  <div className="card-btn">
                    <Link href="LogoDesign" className="themebtu full " style={{ padding: '8px 25px' }}>
                      Know More
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6 pt-1 pb-1">
                <div className="makes-us-different-text2">
                  <HiOutlineLightBulb className="card-icons" />
                  <h4>Where Innovation Meets Mobility </h4>
                  <p>
                    In the fast-paced digital age, a mobile app is essential for connecting with your audience on the go—partner with our proficient mobile app development team to transform your ideas into innovative and engaging apps.</p>

                  <div className="card-btn">
                    <Link href="MobileAppDevelopment" className="themebtu full " style={{ padding: '8px 25px' }}>
                      Know More
                    </Link>
                  </div>
                </div>
              </div>

            </div>
            <div className="counter-style gap">
              <TerioCounter className="card-icons" />
            </div>
          </div>
        </section>


        <section className="case-studies gap">
          <div className="container">
            <div className="row">
              <div className="col-xl-5">
                <div className="heading-boder">
                  <h2>
                    Recently
                    Completed

                    <span>Projects</span>
                  </h2>
                  <p>
                    We Help You Build An Online Brand
                  </p>
                  {/* <a href="" className="themebtu full">
                  View More Works
                </a> */}
                </div>
              </div>
              <div className="col-xl-7">
                <Swiper
                  {...studiesswiper}
                  className="swiper-container studiesswiper"
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="case-studies-project">
                        <a href="https://townsvillealuminiumtrestles.com.au/" target="_blank">
                          <img alt="img" src="assets/img/websitescreenshots/WebsitImg1.png" />
                        </a>
                        <h4> Townsville Aluminium Trestles & Planks</h4>

                        <a href="https://townsvillealuminiumtrestles.com.au/" target="_blank">View Project</a>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                      <div className="case-studies-project">
                        <a href="http://residentialrentalproperties.com.au/" target="_blank">
                          <img alt="img" src="assets/img/websitescreenshots/WebsitImg2.png" />
                        </a>
                        <h4>Residential Rental Properties</h4>

                        <a href="http://residentialrentalproperties.com.au/" target="_blank">View Project</a>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                      <div className="case-studies-project">
                        <a href="https://www.northsuburbanplumbing.com.au/" target="_blank">
                          <img alt="img" src="assets/img/websitescreenshots/WebsitImg3.png" />
                        </a>
                        <h4>North Suburban Plumbing</h4>

                        <a href="https://www.northsuburbanplumbing.com.au/" target="_blank">View Project</a>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                      <div className="case-studies-project">
                        <a href="https://generalmowers.com.au/" target="_blank">
                          <img alt="img" src="assets/img/websitescreenshots/WebsitImg4.png" />
                        </a>
                        <h4>General Mowers & Power Equipment</h4>

                        <a href="https://generalmowers.com.au/" target="_blank">View Project</a>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                      <div className="case-studies-project">
                        <a href="https://newmarketcarcare.com.au/" target="_blank">
                          <img alt="img" src="assets/img/websitescreenshots/WebsitImg5.png" />
                        </a>
                        <h4>Newmarket Car Care</h4>
                        <a href="https://newmarketcarcare.com.au/" target="_blank">View Project</a>
                      </div>
                    </SwiperSlide>

                  </div>
                  <div className="swiper-pagination" />
                </Swiper>
              </div>
            </div>
          </div>
          <div className="tp-hero__shapes">
            <div className="style-shapes-1"></div>
            <div className="style-shapes-2">
              <img alt="shap-4" src="assets/img/shap-b-2.png" />
            </div>
            <div className="style-shapes-3"></div>
          </div>
        </section>
        <hr /><br /><br />

        <section className="why-choose-us">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-5">
                <div className="heading-boder">

                </div>

                <div className="why-choose-text pt-4 pb-4">
                  <h3>
                    Seamless Communication,<br /> <span> Unmatched Support </span>
                  </h3>

                  <p>At Web Universals, we prioritize clear and open communication with our clients. Our dedicated support team is always just a call or email away, ready to address your queries and provide timely assistance throughout the project.</p>
                </div>

                <div className="why-choose-text pt-4 pb-4">
                  <h3>
                    Embracing Diversity, <span> Delivering Globally </span>
                  </h3>

                  <p>While we proudly call Australia our home, our reach extends far beyond. We serve clients from diverse industries and geographical locations, ensuring our expertise reaches every corner of the globe.</p>
                </div>

                <div className="why-choose-text pt-4 pb-4">
                  <h3>
                    Collaborate for <span> Success </span>
                  </h3>

                  <p>We believe in the power of collaboration and view our clients as valued partners. By understanding your unique goals and challenges, we forge a strong partnership that fosters growth and success.</p>
                </div>

                <div className="why-choose-text pt-4 pb-4">
                  <h3>
                    Results-Driven <span> Approach  </span>
                  </h3>

                  <p>With a laser focus on results, Web Universals employs data-driven strategies to optimize your online presence. We meticulously analyze performance metrics, allowing us to fine-tune our efforts for maximum impact.</p>
                </div>

              </div>
              <div className="col-xl-4 col-sm-6">
                <div className="choose-us-img">
                  <figure>
                    <img alt="img" src="assets/img/choose-us-1.jpg" />
                  </figure>
                  <div className="choose-us-img-text">

                    <h5>
                      Recognitions and
                      <br />
                      Accolades
                    </h5>
                    <p className="card-text2">Our unwavering commitment to excellence has earned us numerous accolades and recognition in the industry. </p>
                    {/* <p>We are humbled by the trust our clients place in us and continuously strive to raise the bar of excellence.</p> */}
                  </div>
                </div>
                <div className="choose-us-img">
                  <figure>
                    <img alt="img" src="assets/img/choose-us-2.jpg" />
                  </figure>
                  <div className="choose-us-img-text">
                    {/* <MdOutlineBroadcastOnPersonal/> */}
                    <h5>
                      Decade of Expertise,<br /> Century of Creativity

                    </h5>
                    <p className="card-text2">With over a decade of experience in website design and development, Web Universals brings a wealth of knowledge to every project. </p>
                    {/* <p>We blend this expertise with boundless creativity to craft digital masterpieces.</p> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="choose-us-img">
                  <figure>
                    <img alt="img" src="assets/img/choose-us-3.jpg" />
                  </figure>
                  <div className="choose-us-img-text">
                    {/* <SiAntdesign/> */}

                    <h5>
                      Growing with
                      <br />
                      Technology
                    </h5>
                    <p className="card-text2">The digital landscape is ever-evolving, and we pride ourselves on staying ahead. </p>
                    {/* <p>Our team has the latest tools and techniques to ensure your website is cutting-edge and future-proof.</p> */}
                  </div>
                </div>
                <div className="choose-us-img">
                  <figure>
                    <img alt="img" src="assets/img/choose-us-4.jpg" />
                  </figure>
                  <div className="choose-us-img-text">
                    {/* <GiPayMoney/> */}
                    <h5>
                      Your Vision, Our Mission
                    </h5>
                    <p className="card-text2">At Web Universals, we believe in transforming your vision into a reality. </p>
                    {/* <p>We take the time to understand your aspirations and weave them into a digital masterpiece that exceeds your expectations.</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="discovery gap "
          style={{ backgroundColor: "#f2edf5" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-6">

                <div className="heading">
                  {/* <h6>Web Design Sydney</h6> */}
                  <h5> Inspired by the Australian Spirit </h5>
                  {/* <img alt="line" src="assets/img/headingline.png" /> */}
                  <p>
                    Web Universals draws inspiration from the vast landscapes and rich culture of Australia. Our designs embody the essence of the land down under, creating websites that resonate with the Australian spirit.
                  </p>
                </div>

                <div className="heading">
                  {/* <h6>Web Design Sydney</h6> */}
                  <h5>Join Our Satisfied Clientele </h5>
                  {/* <img alt="line" src="assets/img/headingline.png" /> */}
                  <p>
                    Join the ranks of our satisfied clientele who have experienced the magic of Web Universals firsthand. Our success stories are a testament to our dedication and the value we deliver to businesses across Australia.
                  </p>
                </div>

                <div className="heading">
                  {/* <h6>Web Design Sydney</h6> */}
                  <h5>Embrace Limitless Possibilities </h5>
                  {/* <img alt="line" src="assets/img/headingline.png" /> */}
                  <p >
                    In the vast online realm, opportunities are boundless. Partner with Web Universals to unlock the full potential of your business and embark on a journey of growth and prosperity.
                  </p>
                </div>


                <Link href="contacts" className="themebtu full">
                  Contact Us
                </Link>
              </div>
              <div className="col-xl-6">
                <div className="discovery-img hoverstyle">
                  <figure>
                    <img
                      className="w-100"
                      alt="discovery"
                      src="assets/img/newweb.jpg"
                    />
                  </figure>
                  <div className="discovery-text">
                    <i>
                      <svg
                        id="Layer_5"
                        enableBackground="new 0 0 64 64"
                        height={512}
                        viewBox="0 0 64 64"
                        width={512}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m33 19v-2h3v-3c0-1.654-1.346-3-3-3h-2c-.552 0-1-.449-1-1v-1h3c.552 0 1 .449 1 1h2c0-1.654-1.346-3-3-3v-2h-2v2h-3v3c0 1.654 1.346 3 3 3h2c.552 0 1 .449 1 1v1h-3c-.552 0-1-.449-1-1h-2c0 1.654 1.346 3 3 3v2z" />
                        <path d="m62.618 47-5-10h-13.974c2.044-1.651 3.356-4.174 3.356-7v-1h-7c-2.826 0-5.349 1.312-7 3.356v-9.406c5.598-.508 10-5.222 10-10.95 0-6.065-4.935-11-11-11s-11 4.935-11 11c0 5.728 4.402 10.442 10 10.949v5.406c-1.651-2.043-4.174-3.355-7-3.355h-7v1c0 4.962 4.037 9 9 9h5v2h-1.382-3.236-20l-5 10h3.618v16h52v-16zm-36.618-14c-3.521 0-6.442-2.612-6.929-6h4.929c3.521 0 6.442 2.612 6.929 6zm14-2h4.929c-.486 3.388-3.408 6-6.929 6h-4.929c.487-3.388 3.408-6 6.929-6zm-17-19c0-4.962 4.037-9 9-9s9 4.038 9 9-4.037 9-9 9-9-4.038-9-9zm8 27h7 18.382l3 6h-26.764l-3-6zm-23.382 0h18.764l-3 6h-18.764zm-.618 8h17.618l2.382-4.764v18.764h-20zm48 14h-26v-18.764l2.382 4.764h23.618z" />
                        <path d="m53 53h-15v6h15zm-2 4h-11v-2h11z" />
                        <path d="m9 53h2v2h-2z" />
                        <path d="m9 57h2v2h-2z" />
                        <path d="m9 49h2v2h-2z" />
                        <path d="m49 33h2v-19h-2.233l4.233-7.056 4.233 7.056h-2.233v9h2v-7h3.767l-7.767-12.944-7.767 12.944h3.767z" />
                        <path d="m55 25h2v2h-2z" />
                        <path d="m55 29h2v2h-2z" />
                        <path d="m6 23h2v-9h-2.233l4.233-7.056 4.233 7.056h-2.233v19h2v-17h3.767l-7.767-12.944-7.767 12.944h3.767z" />
                        <path d="m6 25h2v2h-2z" />
                        <path d="m6 29h2v2h-2z" />
                        <path d="m46 41h2v2h-2z" />
                        <path d="m50 41h2v2h-2z" />
                        <path d="m54 41h2v2h-2z" />
                        <path d="m8 41h2v2h-2z" />
                        <path d="m12 41h2v2h-2z" />
                        <path d="m16 41h2v2h-2z" />
                      </svg>
                    </i>
                    <a href="#">
                      <h4>Get Started Today! </h4>
                    </a>
                    <p>
                      Contact us now and take the first step toward digital excellence. Together, we'll craft a remarkable online experience that leaves a lasting impression on your customers.
                      <br />
                      Experience the brilliance of Web Universals - Your Trusted Web Design Partner in Australia!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-hero__shapes">
            <div className="style-shapes-4">
              <img alt="dots1" src="assets/img/dots1.png" />
            </div>
            <div className="style-shapes-5">
              <img alt="dots1" src="assets/img/shap-2.png" />
            </div>
            <div className="style-shapes-6">
              <img alt="dots1" src="assets/img/shap-1.png" />
            </div>
            <div className="style-shapes-7">
              <img alt="dots1" src="assets/img/shap-5.png" />
            </div>
          </div>
        </section>


        <section className="blog-posts gap no-top pt-5">
          <div className="container">

            <div className="heading pt-5 pb-5">
              <h6>What our client say?</h6>
              <h2>Our Testimonials</h2>
              <img alt="line" src="assets/img/headingline.png" />
            </div>

            <Swiper {...partnerswiper} className="swiper-container partnerswiper">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="blog-posts-text2">
                    {/* <a href="#">
                      <i className="fa-regular fa-clock" />
                      <span>August 10, 2023</span>
                    </a> */}
                    {/* <h4>
                    <a href="blog-single-post.html">
                      Suspendisse mauris. Fusce accumsan mollis eros.
                    </a>
                  </h4> */}
                    <p>
                      I am thrilled with the website design services offered by Web Universals! Their affordable packages
                      allowed me to get a professional website for my business without breaking the bank. The quality of their
                      work is outstanding, and I couldn&#39;t be happier with the value I received.
                    </p>
                    <span style={{ fontWeight: "500", marginTop: "10px" }} className="testimonials-names">John Kaley</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="blog-posts-text2">

                    <p>
                      Web Universals truly stands out in their commitment to delivering on time. Not only did they complete
                      our website within the agreed-upon timeframe, but their customer support throughout the process was
                      impeccable. They were always available to address our queries promptly.
                    </p>
                    <span style={{ fontWeight: "500", marginTop: "10px" }} className="testimonials-names">Maree Moore</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="blog-posts-text2">


                    <p>
                      Working with Web Universals was a breeze! We needed some changes to our website design, and they
                      gladly accommodated our requests without any additional charges or hourly fees. Their willingness to
                      make revisions until we were delighted was impressive.
                    </p>
                    <span style={{ fontWeight: "500", marginTop: "10px" }} className="testimonials-names">Steve Schoclan</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="blog-posts-text2">


                    <p>
                      I had my reservations about hidden costs and surprises during website development, but with Web
                      Universals, that was never an issue. They provided a fixed price for the entire project, and their pricing
                      was honest and transparent from start to finish.
                    </p>
                    <span style={{ fontWeight: "500", marginTop: "10px" }} className="testimonials-names">Charles Cheel</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="blog-posts-text2">


                    <p>
                      Web Universals made us feel like a priority from day one. Their team was always available to answer our
                      questions and provide updates. The response time was remarkable, and they ensured our project
                      moved forward seamlessly.
                    </p>
                    <span style={{ fontWeight: "500", marginTop: "10px" }} className="testimonials-names">John O&#39;Keefe</span>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="blog-posts-text2">


                    <p>
                      I am delighted with the website designed by Bronson from Web Universals. His attention to detail and
                      creativity truly shines through in the final product. He has an eye for design, and it&#39;s evident in the way
                      our website turned out.
                    </p>
                    <span style={{ fontWeight: "500", marginTop: "10px" }} className="testimonials-names">Darren Portia</span>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="blog-posts-text2">


                    <p>
                      Bronson&#39;s expertise was pivotal in getting our website to meet our specific requirements. He understood
                      and translated our vision into a functional and visually appealing website. We couldn&#39;t be happier with
                      the result!
                    </p>
                    <span style={{ fontWeight: "500", marginTop: "10px" }} className="testimonials-names">Sunny Ping Wang</span>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="blog-posts-text2">


                    <p>
                      Bronson&#39;s cooperation during the project was exceptional. He accommodated additional modules and
                      points we requested, and the best part was that there were no surprise charges. Web Universals truly
                      goes the extra mile to ensure their clients&#39; satisfaction.
                    </p>
                    <span style={{ fontWeight: "500", marginTop: "10px" }} className="testimonials-names">Gary Metcalf</span>
                  </div>
                </SwiperSlide>

              </div>
              <div className="swiper-pagination" />
            </Swiper>
          </div>
        </section>



        <FormHome />

      </Layout>

    </>

  );
};
export default Index3;
