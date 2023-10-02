import TerioCounter from "@/src/components/TerioCounter";
import Layout from "@/src/layout/Layout";
// import { studiesswiper } from "@/src/sliderProps";
// import { Swiper, SwiperSlide } from "swiper/react";
import { blogswiper } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdLocationSearching } from 'react-icons/md';
import { TbListDetails } from 'react-icons/tb';
import { PiSirenLight } from 'react-icons/pi';
import { PiTimerLight } from 'react-icons/pi';
import { TbSettingsBolt } from 'react-icons/tb';
import { BsPeople } from 'react-icons/bs';
import Link from "next/link";
import Head from 'next/head';


const LogoDesign = () => {
  return (
    <>
    <Head>

    <title>Logo design | Webuniversals | Logo design company</title>

<meta name="description" content=" Your premier logo design company crafts iconic logos that resonate. Elevate your brand identity with our creative expertise | Webuniversals."/>
<meta name="keywords" content="logo design"/>
<link rel="canonical" href="https://webuniversals.com/LogoDesign" />

    </Head>
   <Layout noHeaderBg pageName={"Team3"}>
      <div>
        <section
          className="splash-area-section"
          style={{ backgroundImage: "url(assets/img/background.jpg)" }}
        >
          <div className="container">
            <div className="splash-area">
            <h1>
            Logo Design
            </h1>
            {/* <a href="#">The highest quality in design Within budget <br />and under the tightest deadline</a> */}
            </div>
          </div>
        </section>
        <section className="things-differently gap">
          <div className="container">
            <div className="row">
              <div className="col-xl-5">
                <div className="heading">
                  <h6>Distinctive, Timeless, and Memorable</h6>
                  <h2>
                  LOGO DESIGN 
                  <br />
                  </h2>
                  <img alt="line" src="assets/img/headingline.png" />
                  <img alt="dots" className="dots" src="assets/img/dots.png" />
                </div>
              </div>
              <div className="col-xl-7">
                <div className="signature">

                <div className="pb-4">
               <h3>Elevate Your Brand with a Captivating Logo</h3>
                  <p>A well-designed logo can elevate your brand, leaving a lasting impression on your customers. Partner with Web Universals for 
                  expert logo design services, and let us create a logo that sets your business apart from the competition.</p>
</div>

                  <p>
                  Your logo is the face of your brand, and at Web Universals, we understand the power of a well-crafted logo. As a leading logo design company, 
                  we specialize in creating distinctive, timeless, and memorable logos that make a lasting impression on your audience.
                    
                  </p>

     
                  <div className="ceo">
                   
                    <Link href="contacts" className="themebtu">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  

        <section
          className="we-deliver-results gap"
          style={{ backgroundColor: "#f2edf5" }}
        >
          <div className="container">
            <div className="heading two  pb-5">
              <h2>Why Choose Our Logo Design Services</h2>
              {/* <img alt="line" src="assets/img/headingline.png" /> */}
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-6">
                <div className="makes-us-different-text3">
                 <MdLocationSearching className="card-icons3"/>
                  <h4>Brand Identity Redefined</h4>
                  <p>
                  We believe that a logo goes beyond just a graphic; it represents your brand's identity. 
                  Our expert logo designers take the time to understand your 
                  brand's values, personality, and target audience to create a logo that encapsulates the essence of your business.
</p>     
           </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="makes-us-different-text3">
                <TbListDetails className="card-icons3"/>

                  <h4>Attention to Detail</h4>
                  <p>
                  Every element of your logo is meticulously crafted, from color choices to typography. We highlight the finest details to create a logo that exudes professionalism and craftsmanship.</p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="makes-us-different-text3">
                <PiSirenLight className="card-icons3"/>
                  <h4>Creativity & Innovation</h4>
                  <p>
                  Creativity and innovation drive our logo design process. We strive to design logos that stand out from the crowd, leaving a unique and impactful mark on your customers' minds.
</p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="makes-us-different-text3">
                <PiTimerLight className="card-icons3"/>

                  <h4>Timeless Designs</h4>
                  <p>
                  Trends come and go, but a timeless logo remains relevant for years. We create logos with enduring appeal, ensuring your brand image remains fresh and contemporary even as time passes.</p></div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="makes-us-different-text3">
                <TbSettingsBolt className="card-icons3"/>

                  <h4>Versatility & Scalability</h4>
                  <p>
                  Your logo needs to adapt to various applications, from business cards to billboards. Our logo designs are versatile and scalable, ensuring they look equally impressive in all sizes and formats. </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="makes-us-different-text3">
                <BsPeople className="card-icons3"/>

                  <h4>Client Collaboration</h4>
                  <p>
                  We believe in collaborative design processes. Our designers work closely with you, valuing your input and feedback to ensure your logo truly reflects your vision.</p> </div>
              </div>
            </div>
           
          </div>
        </section>
        <section className="how-it-works gap ">
        <div className="container">

        <div className="heading design-enjoy">
                <h2>Our Logo Design Process</h2>
                <img alt="line" src="assets/img/headingline.png" />
              </div>
            
        <img className="w-100" alt="line" src="assets/img/line.jpg" />

        
          <div className="row">
            <div className="col-xl-4 col-lg-6 pt-4 pb-4">
              <div className="strategic">
                <h2>O1/</h2>
                <div className="pl-80">
                  <h4>Discovery & Briefing</h4>
                  <p>
                  We begin by understanding your brand's story, values, and goals. Our team collaborates with you to gather essential insights that guide the design process.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 pt-4 pb-4">
              <div className="strategic">
                <h2>O2/</h2>
                <div className="pl-80">
                  <h4>Conceptualization</h4>
                  <p>
                  Armed with your brand insights, we start exploring creative concepts. Our designers tirelessly explore a multitude of ideas to create a diverse range of logo options exclusively for you.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 pt-4 pb-4">
              <div className="strategic">
                <h2>O3/</h2>
                <div className="pl-80">
                  <h4>Design Development</h4>
                  <p>
                  We refine the chosen concept by creating a visually striking and meaningful logo. Every element is thoughtfully curated to ensure coherence and harmony in the design..</p>                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 pt-4 pb-4">
              <div className="strategic">
                <h2>O4/</h2>
                <div className="pl-80">
                  <h4>Feedback & Revisions</h4>
                  <p>
                  Your feedback is crucial to the design process. We take your input seriously and make necessary revisions to perfect the logo until it aligns with your vision.</p>                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 pt-4 pb-4">
              <div className="strategic">
                <h2>O5/</h2>
                <div className="pl-80">
                  <h4>Finalization & Delivery</h4>
                  <p>
                  Once completely satisfied with the design, we finalize the logo and deliver it to you in various formats for seamless integration across all your brand assets.</p>                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


        <div className="container">
        <div className="awesome-project">
          <h4>Your Gateway to Captivating Logo Design!</h4>
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
export default LogoDesign ;
