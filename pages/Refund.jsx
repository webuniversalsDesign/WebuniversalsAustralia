import TerioCounter from "@/src/components/TerioCounter";
import Layout from "@/src/layout/Layout";
import { studiesswiper } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const Refund = () => {
  return (
    <Layout noHeaderBg pageName={"Refund"}>
      <div>
        <section
          className="splash-area-section"
          style={{ backgroundImage: "url(assets/img/background.jpg)" }}
        >
          <div className="container">
            <div className="splash-area">
              <h2>
               Refunds 
              </h2>
              {/* <a href="#">Refund Us</a> */}
            </div>
          </div>
        </section>
        <section className="gap no-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="welcome">
                <img alt="img" src="assets/img/Refund1.png" />
                <img
                  alt="img"
                  className="img-welcome"
                  src="assets/img/Refund2.png"
                />
                <img alt="dots" className="dots" src="assets/img/dots.png" />
              </div>
            </div>
            <div className="col-xl-6 pl-75">
            <div className="heading design-enjoy">
           
           <h2>Payment & Refunds</h2>
           <img alt="line" src="assets/img/headingline.png" />
         </div>
       
        <ul className="list-items-head">
          <li className="list-items1 pt-1 pb-2">All quotes are conveyed in AUD and Excludes GST unless mentioned otherwise</li>
          <li className="list-items1 pt-1 pb-2">Milestone payments need to be done inside 5 working days of each milestone. All pending payments and dues have to be cleared before the project is launched/released/ goes live.</li>
          <li className="list-items1 pt-1 pb-2">Payment made construes the automatic acceptance of quote, terms and conditions, budget, and schedule</li>
          <li className="list-items1 pt-1 pb-2">Below is the breakup of refund allowed on cancellation
          <ul className="list-items-head pt-2 pb-2">
                <li className="list-items-num pt-1 pb-1">75% refund in case work hasn’t started</li>
                <li className="list-items-num pt-1 pb-1">50% refund in case work has started
                </li>
                <li className="list-items-num pt-1 pb-1">0% refund in case more than 50% of the work is done <br/>
                All cancellation requests need to be put in writing and not verbally.
                </li>

          </ul>
          </li>
          <li className="list-items1 pt-1 pb-2">Payment for minor updates needs to be made in advance or in line with payment terms. You need to inform in writing (or via emails) in case you need the terms to be updated.</li>
          <li className="list-items1 pt-1 pb-2"><b>Due date :</b> is the date when the invoices are due to be paid as per the payment terms / proposal</li>
          <li className="list-items1 pt-1 pb-2"><b>Outstanding invoice : </b>an invoice to be paid becomes outstanding when it hasn’t been repaid for more than 14 days after the due date.</li>
         
        </ul>

            </div>
          </div>
        </div>
      </section>


<section className="container pt-5 pb-5">
<ul className="list-items-head">
<li className="list-items1 pt-1 pb-2">In case you see a delay on the invoice to be paid it is advised to get in touch with the account manager ASAP</li>
          <li className="list-items1 pt-1 pb-2">Any payment made for registration or renewal of domain name, hosting to third party, or using third party software or tools needs to be paid as per their quote and is totally non-refundable.
           </li>

</ul>
</section>

      </div>
    </Layout>
  );
};
export default Refund;
