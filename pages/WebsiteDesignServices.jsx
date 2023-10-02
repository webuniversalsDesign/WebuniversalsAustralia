// import BrandSlider from "@/src/components/BrandSlider";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import Head from 'next/head';

import { SiAntdesign } from 'react-icons/si';



const WebDesignService = () => {
  return (
<>
<Head>
<title>Web development company | Webuniversals | web design</title>

<meta name="description" content="Transform your online presence with our premier web development company | We bring expertise, innovation, and quality to your project. "/>
<meta name="keywords" content="Web development company"/>
<link rel="canonical" href="https://webuniversals.com/WebsiteDesignServices" />
</Head>


   <Layout noHeaderBg pageName={"Team"}>
      <section
        className="splash-area-section"
        style={{ backgroundImage: "url(assets/img/background.jpg)" }}
      >
        <div className="container">
          <div className="splash-area">
            {/* <h2>
           Website 
            <br/>
            Design
            </h2> */}
            {/* <h2>Crafting Your <br />Digital Identity</h2> */}
            {/* <a href="#">Meet The Team</a> */}
            <h1>
                  {" "}
                  Web Development Company
                </h1>
          </div>
        </div>
      </section>
      <section className="gap">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="heading">
                <h6>Web development company</h6>
                
                <h3>
                  {" "}
                  Adapt. Engage. Impress. Crafting Websites that Look Stunning on Any Device
                </h3>
                {/* <img alt="line" src="assets/img/headingline.png" /> */}
                <img alt="dots" className="dots" src="assets/img/dots.png" />

              </div>
            </div>
            <div className="offset-xl-1 col-xl-6">
              <div className="team-welcome-text">
               <p>At Web Universals, we specialize in creating stunning and functional websites that leave a lasting 
                impression on your audience. As a top-notch website design company, we offer 
                diverse services to cater to businesses of all sizes and industries. Whether you
                 need a simple portfolio website or a feature-rich e-commerce platform, our team of 
                 expert designers is here to bring your digital vision to life.</p>
                {/* <p>
                For each and every other company In Australia, the most important thing to be created and maintained 
                is nothing but a proper Cost effective website design with various products and services being listed 
                and updated for the convenience of the consumers. These days every consumer in Australia tend to visit 
                the website of a particular company in order to find out things on their own regarding various products 
                and services along with customer feedbacks associated with it. <br/><br/>So if you are not being able to put 
                up an active website for your company, the impression shall tend to suffer a lot leaving you quite 
                behind in this competitive market. Now for example you have a website but it is not getting the amount
                 of exposure you are expecting; well this kind of situations often take place in case the website is not 
                responsive enough due to several reasons related to it.
                </p> */}
                <Link href="contacts" className="themebtu">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        
        </div>
      </section>
     
      <section
        className="discovery gap no-bottom"
        style={{ backgroundColor: "#f2edf5" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="heading heading1">
                {/* <h6>Web Design Sydney</h6> */}
                {/* <h2> 100% Satisfaction<br/> Guarantee</h2> */}
                <h2>Why Choose Us for Website Design</h2>
                <img alt="line" src="assets/img/headingline.png" />
                {/* <p>
                Our web design sydney and techies know some efficient remedial measures for such pain points. We here 
                at Web Universals Australia, concentrates on designing websites in such a way which shall ensure faster 
                loading, better display, look and feel and the way it works, which shall be responsive enough. Clients 
                mainly deal with such for several reasons such as timely delivery of job, 
                cost effective website works, 100% satisfaction guarantee, one point of contact and no surprises.
                </p> */}
<br/>
<br/>

                <h4>Website Design & Development</h4>
                    <p>
                    We don't just stop at design; our team of skilled developers complements our
                     services with seamless website development, ensuring your website performs as
                      brilliantly as it looks.
                      </p>

               <h4>Expertise in WordPress</h4>
               <p>
              Our skilled WordPress website designers have mastered the art of creating visually 
              appealing and user-friendly websites on this popular platform. We harness the power 
              of WordPress to deliver websites that are easy to manage and update.
              </p>
              <h4>Best-in-Class Design</h4>
              <p>
               We take pride in being at the forefront of delivering the best website design 
               solutions. Our team updates the latest design trends to ensure your website stands 
               out.
               </p>
              <h4>Customer-Centric Approach</h4>
              <p>
             Your satisfaction is our priority. As a website design agency, we listen to your ideas
              and requirements to create a website that aligns perfectly with your brand and
               business goals.
               </p>
              <h4>Local Presence, Global Reach</h4>
              <p>
              Whether you're searching for a "website designer near me" or looking for a reliable
               website design company, we have a global reach and serve clients from various corners.
              </p>
              <h4>Portfolio Showcase</h4>
              <p>
              We understand the importance of showcasing your work. Our portfolio website design
               services enable you to present your projects visually, compellingly, and organized.
               </p>
              
                {/* <Link href="contacts" className="themebtu full">
                  Contact Us
                </Link> */}
              <br />
              <br />
             
          
              </div>
            </div>
            <div className="col-xl-6">
              <div className="discovery-img hoverstyle">
                <figure>
                  <img
                    className="w-100"
                    alt="discovery"
                    src="assets/img/whywebsitedesign.jpg"
                  />
                </figure>
                <div className="discovery-text">
                <SiAntdesign/>
                    <h4 className="head">Tailored Solutions for Small Businesses</h4>
                    <p>
                    We believe in empowering small businesses with an impactful online presence. Our 
                    website design for small business owners is affordable yet powerful enough to make a solid digital statement.
                    </p>
                   

                    <h4 className="head">Transparent Pricing</h4>
                    <p>
                    We believe in transparent communication, and our website design cost is competitive without 
                    compromising quality. Our website design packages are designed to suit various budgets and
                    requirements.
                    </p>
                   
 
                    <h4 className="head">Comprehensive Design Services</h4>
                    <p>
                     We cover all design styles, from creative website design to minimalist and 
                     modern aesthetics. Our custom website design services ensure your website
                      truly represents your brand essence.
                    </p>
                   

                    <h4 className="head">Affordable & High-Quality</h4>
                    <p>
                    Quality web design shouldn't break the bank. Our cheap website design services offer 
                    exceptional value without compromising the final product's quality.
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



      <div className="container  mt-5">
        <div className="awesome-project">
          <h4>Your Gateway to Captivating Website Design & Development!</h4>
          <Link href="contacts" className="themebtu full">
            Contact Us 
          </Link>
        </div>
      </div>
      {/* <div className="brands-we-work gap">
        <div className="container">
          <h6>Brands We Work With.</h6>
          <BrandSlider />
        </div>
      </div> */}
      
    </Layout>
</>

   
  );
};
export default WebDesignService;
