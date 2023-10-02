import { useState } from "react";
import TerioCounter from "@/src/components/TerioCounter";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { latestswiper, partnerswiper, projectsswiper } from "@/src/sliderProps";


import { blogswiper } from "@/src/sliderProps";
import Head from 'next/head';

import { Swiper, SwiperSlide } from "swiper/react";
const UploadBlog = () => {

const formBlog=(e)=>{
        e.preventDefault();
    }

    const [counter, setCounter] = useState(1);

    const handleClickADD = () => {
      setCounter(counter + 1);
    //   console.log(counter);
    };

    const handleClickREMOVE = () => {
        setCounter(counter - 1);
        // console.log(counter);
      };

  return (

    <>

    <Head>
<title>Timely & Cost-effective Web Solutions | Web Universals</title>

<meta name="description" content="Our Mission & Vision - Delivering Timely & Cost-effective Web Solutions"/>
<meta name="keywords" content="website design company, website design services, website designer, website development, affordable website design, website design agency, creative website design, website design and development, web design company, professional website design, website design packages, web design services, custom website design, modern website design, minimalist website design, responsive web design, business website design, e-commerce website design, website redesign, mobile app development, logo design, social media marketing, SEO services, Google Ads PPCa"/>

</Head>
       <Layout noHeaderBg pageName={"About"}>
      <div>
        <section
          className="splash-area-section"
          style={{ backgroundImage: "url(assets/img/background.jpg)" }}
        >
          <div className="container">
            <div className="splash-area">
            <h2>
            Blog Upload
            </h2>
          
            </div>
          </div>
        </section>


         
        
    <section className="container pt-5 pb-5 mt-5">
    <form onSubmit={formBlog}>
    <div className="row">

        <div className="col-lg-6 col-md-6 col-sm-12 pt-2 pb-2">
        <label for="blog_name" class="form-label">Blog Title</label>
<input type="text" className="form-control" placeholder="Blog Title" name="blog_name"/>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 pt-2 pb-2">
        <label for="blog_Img" class="form-label">Blog Picture</label>
<input type="file" className="form-control" name="blog_Img"/>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 pt-2 pb-2">

        <label for="blog">Select Blog Type</label>

<select name="blog" id="blogs" className="form-select">
  <option value="">Select Catagory</option>
  <option value="categorized">Categorized</option>
  <option value="uncategorized">Uncategorized</option>
</select>
</div>

<div className="col-lg-6 col-md-6 col-sm-12 pt-2 pb-2">
<label for="blog_comment">Add Comment's</label>
<input type="text" className="form-control" placeholder="Comments" name="blog_comment"/>
</div>

<div className="d-flex justify-content-center pt-5 pb-5">

<button onClick={handleClickADD} className="btn btn-primary">Add</button>

&nbsp;
&nbsp;
&nbsp;
        <button onClick={handleClickREMOVE} className="btn btn-primary">Remove</button>
</div>


{Array.from(Array(counter)).map((c, index) => {
  return(<>
  <input key={c} type="text" className="form-control mt-2 mb-2" placeholder="Blog Discription Title"/> 
  <textarea cols="10" rows="10" key={c} type="text" className="form-control mt-2 mb-2" placeholder="Blog Discription"></textarea>
<hr/>
  </>) 
})}

    </div>
    <input type="submit" value="Submit" className="btn btn-primary mt-5"/>
  </form>
    </section>
     
      <div className="container">
        <div className="awesome-project">
          <h4>Let's Start An Awesome Project Now!</h4>
          <Link href="contacts" className="themebtu full">
            Get Started
          </Link>
        </div>
      </div>
      </div>
    </Layout>
    </>
   
  );
};
export default UploadBlog;
