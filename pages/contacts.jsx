import Layout from "@/src/layout/Layout";
import { studiesswiper } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import  React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {TiTickOutline} from 'react-icons/ti';
import Head from 'next/head';



const Contacts = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_33d2bgh', 'template_i07hxug', form.current, '0qpfXzVciq8YilctV')
      .then((result) => {
          console.log(result.text);
          console.log("message Sent successfully :)")
          
document.getElementById('successMsg').classList.add('popupvisiable');

      }, (error) => {
          console.log(error.text);
          console.log("message not sent email failed :(")

      });
  };

  
  const hidePop = ()=>{
    document.getElementById("successMsg").classList.add('popuphidden');
      }

  return (

    <>
<Head>
<title>Contact | Top Web development company and Experts</title>

<meta name="description" content="Connect with the top web development experts at Webuniversals. Reach out to us for all your web-related needs today"/>
<meta name="keywords" content="Website design company australia"/>

<link rel="canonical" href="https://webuniversals.com/contacts" />


</Head>

        <Layout noHeaderBg pageName={"Contact"}>
      <section
        className="splash-area-section position-relative"
        style={{ backgroundImage: "url(assets/img/background.jpg)" }}
      >
        <div className="container">
          <div className="splash-area">
            <h1>Contact us</h1>
            <a href="#">Let Us Know What You're Looking For</a>
          </div>
        </div>
      </section>
      <section className="contact-page gap">
        <div className="container">
          <div className="heading">
            <h6>Get in touch</h6>
            <h2>CONTACT FORM</h2>
            <img alt="line" src="assets/img/headingline.png" />
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <form className="content-form" ref={form} onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-lg-6">
                    <input type="text" name="from_name" placeholder="Your Name *" required/>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="user_subject"
                      placeholder="Subject *"
                      required
                    />
                  </div>

                  <div className="col-lg-6">
                <input type="number" name="user_mobileno" placeholder="Your Mobile Number*" required/>
                </div>
                <div className="col-lg-6">
                <input type="email" name="user_email" placeholder="Your Email *" required/>
                </div>
                </div>

               

                <textarea placeholder="Your Message " name="message" defaultValue={""} required/>
                <input type="submit" className="themebtu" value="Submit"/>
              </form>
            </div>
            <div className="offset-lg-1 col-xl-5 col-lg-5">
            <h3>CONTACT INFO</h3>
              
              <ul className="sidebar">
                <li>
                  <h4>Address : </h4>
                  <span>
                 South Australia
      
                  </span>
                </li>
                <li>
                  <h4>Phone :</h4>
                  <a href="tel:+61 8 7200 7227">
                    <span>08 7200 7227</span>
                  </a>
                </li>
                <li>
                  <h4>Email :</h4>
                  <a href="mailto:www.webuniversals.com" className="footer-links"><i class="fa-solid fa-envelope"></i> info@webuniversals.com</a>

                </li>
                <li>
                  <h4>Find us :</h4>
                  <ul className="brandicon">
                    <li>
                      <a href="http://www.facebook.com/sharer.php?u=https://webuniversals.com/&images=https://webuniversals.com/wp-content/uploads/2014/07/homepage2-94x150.png" target="_blank">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/webuniaustralia" target="_blank">
                        <i className="fa-brands fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/webuniversalsaus/" target="_blank">
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="http://plus.google.com/share?url=https://webuniversals.com/&title=" target="_blank">
                        <i className="fa-brands fa-youtube" />
                      </a>
                    </li>

                    <li>
                      <a href="https://in.pinterest.com/webuniaustralia/" target="_blank">
                        <i className="fa-brands fa-pinterest" />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="map">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13924197.196521623!2d124.37171398494617!3d-31.566370704618578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6aa7589e5be8c7f3%3A0xdb7e79993dfad0d8!2sSouth%20Australia%2C%20Australia!5e0!3m2!1sen!2sin!4v1690524409240!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        
        <div className="message-sent" id="successMsg">

<div className="card-message">

  <div className="d-flex justify-content-center">
<TiTickOutline className="messagetick-mark"/>
</div>

  <p className="successMsgTest">Thank you so much for taking the time to fill out the form! We truly appreciate your interest in our services. 
  Your inquiry is valuable to us, and our team shall get back to you soon.</p>

  <div className="d-flex justify-content-center pt-5 pb-1">
    <button type="button" className="btn btn-primary" onClick={hidePop}>Go Back</button>
  </div>

</div>


</div>

      </div>

    </Layout>
    </>
  
  );
};
export default Contacts;
