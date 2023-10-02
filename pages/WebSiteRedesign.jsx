import Layout from "@/src/layout/Layout";
import Link from "next/link";


import { blogswiper } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Head from 'next/head';

const WebSiteRedesign = () => {
  return (
    <>
<Head>
<title>Website redesign service | Webuniversals </title>

<meta name="description" content="Revitalize your online presence with our website redesign service. Webuniversals transforms your site for improved performance and aesthetics"/>
<meta name="keywords" content="Website redesign service"/>
<link rel="canonical" href="https://webuniversals.com/WebSiteRedesign" />

</Head>



      <Layout noHeaderBg pageName={"About"}>
      <div>
        <section
          className="splash-area-section"
          style={{ backgroundImage: "url(assets/img/background.jpg)" }}
        >
          <div className="container">
            <div className="splash-area">

            <h1>
          Website Redesign Service
            </h1>
    {/* <a href="#">Unlock the Potential of Your Business with Web Universals <br/> Website   Design Services</a> */}
     
            </div>
          </div>
        </section>
        <section
        className="discovery gap"
        style={{ backgroundColor: "#f2edf5" }}
      >
        <div className="container">
          <div className="row ">
            <div className="col-xl-6">
              <div className="heading">
            <h6> Unlock the Potential of Your Business with Web Universals <br/> Website   Design Services</h6>
            <img alt="line" src="assets/img/headingline.png" />

<div >
             <h4>The Power of Good Website Design</h4>
                <p className="discovery-para">
                In today's digital age, a well-designed website is more than just an online presence; it's a powerful tool that can drive growth, increase brand visibility, and boost conversions. At Web Universals, we understand the importance of good website design and its impact on your business success. As a creative website design agency, we craft visually stunning and user-centric websites that make a lasting impression on your visitors.
                </p>
</div>

<div >
  <h4>Captivate Your Audience with Creative Designs</h4>
                <p className="discovery-para">
                Our team of talented designers excels at creating captivating and unique designs that reflect your brand's identity. Whether you're a creative individual looking for a portfolio website design or a business seeking to establish a robust online presence, we tailor our strategies to suit your specific needs and objectives.  </p>
</div>
                
               
              </div>
            </div>
            <div className="col-xl-6">
              <div className="discovery-img hoverstyle">
                <figure>
                  <img
                    className="w-100"
                    alt="discovery"
                    src="assets/img/webredesign.jpg"
                  />
                </figure>
                <div className="discovery-text">
                
                <a href="#">
                    <h4>Seamless Website Design & Development</h4>
                  </a>
                  <p>
                  At Web Universals, we don't just stop at design; we complement our creativity with seamless website development. Our expert developers work hand in hand with designers to bring your website to life, ensuring optimal functionality and a smooth user experience.</p>
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


 

        <section className="pt-lg-5 pb-lg-4 pt-5 pb-4 ">
        <div className="container  pb-2">
        <div className="heading pb-lg-1 pb-2">
                
               
                  <img alt="dots" className="dots" src="assets/img/dots.png" />
                </div>
       
          <Swiper {...blogswiper} className="swiper-container blogswiper">
            <SwiperSlide className="swiper-slide">
              <div className="blog-content">
                <div className="row ">
                  <div className="col-xl-6">
                    <img
                      className="w-100"
                      alt="img"
                      src="assets/img/redesign3.jpg"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="latest-blog-post">
                  
                   
                      <h3 className="pb-5">
                      Affordable Website Design Packages
                      </h3>

                      <p>A quality website design shouldn't come with a hefty price tag. Our affordable website design packages are designed to suit various budgets, offering a perfect balance between cost-effectiveness and exceptional quality.</p>
                     
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="blog-content">
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    <img
                      className="w-100"
                      alt="img"
                      src="assets/img/redesign1.jpg"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="latest-blog-post">
                    
                    <h3 className="pb-5">Local Presence, Global Reach</h3>
                      <p>
                      Based in Australia, Web Universals serves clients in our home country and across the globe. Regardless of your location, we are committed to providing top-notch website design services that transcend geographical boundaries.
                      </p>
                   
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="blog-content">
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    <img
                      className="w-100"
                      alt="img"
                      src="assets/img/redesign2.jpg"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="latest-blog-post">
<h3 className="pb-5">Your Success, Our Achievement</h3>                    
                      <p>
                      At Web Universals, we measure our success by the success of our clients. Your satisfaction is paramount, and we work tirelessly to create a website that fulfills your goals and drives tangible results for your business.
                      </p>
                   
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="blog-content">
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    <img
                      className="w-100"
                      alt="img"
                      src="assets/img/redesign2.jpg"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="latest-blog-post">
<h3 className="pb-5">Transform Your Online Presence with Web Universals</h3>                    
                      <p>
                      Ready to unleash the true potential of your business with a captivating website? Partner with Web Universals, and let us be your trusted website design and development. With our dedication to excellence and passion for creativity, we are here to take your digital journey to new heights.
                      </p>
                   
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

        
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
          </Swiper>
        </div>
      </section>
    

      <section className="how-it-works gap ">
        <div className="container">
          <div className="heading">
            {/* <h6>How It Works?</h6> */}
            <h2>How It Works?</h2>
            <img alt="line" src="assets/img/headingline.png" />
          </div>
          <div className="row pt-4">
            <div className="col-xl-4 col-lg-6">
              <div className="strategic">
                <h2>O1/</h2>
                <div className="pl-80">
                  <h4>Tailored Solutions for Small Businesses</h4>
                  <p>
                  Every business deserves a compelling online presence, regardless of its size. Our website design for small business owners is crafted to provide an affordable yet impactful solution, helping you reach your target audience and compete effectively in the digital space.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="strategic">
                <h2>O2/</h2>
                <div className="pl-80">
                  <h4>Modern, Minimalist, and Beyond</h4>
                  <p>
                  We embrace the diversity of design styles and cater to the preferences of every client. Whether you prefer a modern website design that exudes innovation or a minimalist approach that emphasizes simplicity, we have the expertise to deliver beyond your expectations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="strategic">
                <h2>O3/</h2>
                <div className="pl-80">
                  <h4>Transparent and Collaborative Approach</h4>
                  <p>
                  We believe in building solid partnerships with our clients, and transparency is at the core of our approach. We keep you informed and involved throughout the process, from the initial consultation to project delivery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="awesome-project">
          <h4>Your Gateway to Captivating Website Design &amp;
Development!</h4>
          <Link href="contacts" className="themebtu full">
   Contact Us Now
          </Link>
        </div>
      </div>

       
      </div>
    </Layout>
    </>
    
  );
};
export default WebSiteRedesign;
