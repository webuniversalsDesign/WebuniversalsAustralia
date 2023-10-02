import TerioCounter from "@/src/components/TerioCounter";
import Layout from "@/src/layout/Layout";
import { partnerswiper, studiesswiper } from "@/src/sliderProps";
import Link from "next/link";
import {TiTickOutline} from 'react-icons/ti';
// import {GiCyberEye} from 'react-icons/md';
import  React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { Swiper, SwiperSlide } from "swiper/react";
import Head from 'next/head';


const FormHome = () => {
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

      <section className=" position-relative resp-screen">
        <div className="container">
             
        <h2 className="text-center pb-5">Your Trusted Web Design Partner in Australia!</h2>
          <div className="row">
            <div className="col-xl-6">
              <div className="heading">
                <h6>Contact Us Today</h6>
                <img alt="line" src="assets/img/headingline.png" />
                <p style={{color:"black", fontWeight:"500"}}>Ready to embark on an unforgettable digital journey with Australia's top website design company? Reach out to us, and let's create something extraordinary together! <br/> <br/>
                </p>

            
              </div>
              <form className="touch two" ref={form} onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-lg-6">
                    <input type="text" name="from_name" placeholder="Your name *" 
                      required
                    />
                  </div>
                
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="user_subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="col-lg-6 pt-lg-5">
                  <input
                      type="number"
                      name="user_mobileno"
                      placeholder="Mobile Number"
                      required
                    />
                  </div>
                  <div className="col-lg-6 pt-lg-5">
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Email address *"
                      required
                    />
                  </div>
                  <div className="col-xl-12">
                    <textarea placeholder="Your message *" name="message" defaultValue={""} required/>
                  </div>
                  <div className="btugap pb-5">
                    <input type="submit" value="Send Message" className="themebtu full" style={{color:"white", width:"200px" , backgroundColor:"blue"}} required/>
                  
                  </div>
                </div>
              </form>
            </div>
            <div className="offset-xl-1 col-xl-5">
              <div className="map">
              <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13924197.196521623!2d124.37171398494617!3d-31.566370704618578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6aa7589e5be8c7f3%3A0xdb7e79993dfad0d8!2sSouth%20Australia%2C%20Australia!5e0!3m2!1sen!2sin!4v1690524409240!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
              </div>
            </div>
          </div>
        </div>


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
      </section>

  </>

  );
};
export default FormHome;
