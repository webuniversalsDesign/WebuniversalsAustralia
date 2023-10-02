import TerioCounter from "@/src/components/TerioCounter";
import Layout from "@/src/layout/Layout";

import { blogswiper } from "@/src/sliderProps";

import { Swiper, SwiperSlide } from "swiper/react";
const TermsAndCondition = () => {
  return (
    <Layout noHeaderBg pageName={"About"}>
      <div>
        <section
          className="splash-area-section"
          style={{ backgroundImage: "url(assets/img/background.jpg)" }}
        >
          <div className="container">
            <div className="splash-area">
            <h2>
              Terms & Conditions
            </h2>
         
            </div>
          </div>
        </section>
    


        <section className="gap no-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="welcome">
                <img alt="img" src="assets/img/terms.jpg" />
                <img
                  alt="img"
                  className="img-welcome"
                  src="assets/img/condition.jpg"
                />
                <img alt="dots" className="dots" src="assets/img/dots.png" />
              </div>
            </div>
            <div className="col-xl-6 pl-75">
              <div className="heading design-enjoy">
           
                <h2>Project Terms & Conditions</h2>
                <img alt="line" src="assets/img/headingline.png" />
              </div>
              <div className="welcome-text">
            
                <h5>Annual Maintenance Package Terms:</h5>
                <p>
                All Maintenance Package run for a minimum of 12 months. They are billed monthly and yearly. The mode of payment will be a direct debit on the 1st week of the month. It includes costs towards basic website hosting, email hosting, and DNS hosting. It doesn’t include costs for large scale updates that require significant time and effort. All support requests need to be sent through email to helpdesk@webuniversals.com or  support@webuniversals.com. Any urgent activity will be costed separately. The maintenance package has to be renewed every year.
                </p>
                <p>Website Design Credit: We shall mention about the Website Designed / Hosted / Maintained / Powered by Web Universals for which we offer year of free maintenance and in the event if a client choose us not to mention or to do a white label in such circumstance the maintenance would be an additional cost (optional). We shall charge on as is basis without any discount.</p>
               
               
                <h5>Payment terms:</h5>
                <p>
                All payments for monthly packages need to be cleared before the 15th of every month. No refund is allowed on the monthly packages.
                </p>
           
              </div>
            </div>
          </div>
        </div>
   
      </section>

      <section className="container">

      <div className="content pt-lg-5 pb-lg-2 pt-2 pb-2">
      <h5>Termination:</h5>
      <p>If you want to cancel auto annual renewal, you need to inform us atleast a month before the renewal date in advance.</p>
      <p><b>Ongoing term:</b> if you decide to terminate an on-going maintenance package for any reason, you would be required to pay the balance amount for the residual months. Our company reserves the sole right to end the annual maintenance at any time with written notice to the Client.</p>
      </div>

      <div className="content pt-4 pb-4">
        <h5>Payments and refunds:</h5>
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
          <li className="list-items1 pt-1 pb-2">In case you see a delay on the invoice to be paid it is advised to get in touch with the account manager ASAP</li>
          <li className="list-items1 pt-1 pb-2">Any payment made for registration or renewal of domain name, hosting to third party, or using third party software or tools needs to be paid as per their quote and is totally non-refundable.
</li>
        </ul>


        <p><b>Disputes, Liability, and Indemnity</b></p>
        <p>In case of a dispute, Web Universals reserves the sole right to charge the client in full for the work done. 
        They will also be charged for the resources utilized in managing the dispute. In such a situation, Web Universals 
        reserves the right to charge the client without honouring any discounts that were previously honoured in good faith. Under no 
        situation will Web Universals be held liable for any damages arising from misrepresentation or misinformation.</p>
        <p>We reserve the sole right to disallow any service to any client if they do not commensurate with our business policies & principles.

</p>
<br/>
<p>Web Universals provides its services as is, without any guarantees on security or other issues leading to loss of data, sale or reputation. We make it a point to protect our systems and serves to the best of our ability. However, we will not be held liable for any disruption of services if such a scenario materializes.

</p>
<br/>
<p>Web Universals professes an independent relationship with its suppliers, sub-contractors, partners, and suppliers. None of the parties have any right or authority to interfere or bind the other or assume or create any obligation or responsibility, whether expressed or implied, on behalf of the other or in the other’s name.

</p>
<br/>

<p>The client will agree to indemnify and hold Web Universals, its licensors, content providers, service providers, employees, agents, officers, directors, contractors and sub-contractors (the “Indemnified Parties”) harmless from the breach of any of these Terms and Conditions or any other terms, conditions, policies or procedures herein, including, without limitation, any use of content other than as expressly authorized in these Terms and Conditions.</p>
      
      <br/>

      <p>The client agrees that the indemnified parties will have no liability in any such breach or unauthorized use, and you agree to indemnify and hold harmless the Indemnified Parties from all resulting loss, damages, judgments, awards, costs, expenses, and attorneys’ fees in connection therewith. You will also agree to indemnify and hold the Indemnified Parties harmless from and against any claims brought by third parties arising out of your use of the information obtained from Web Universals.

</p>

<br/>

<p>Web Universals is not liable for a breach of the agreement resulting from a scenario a matter beyond its reasonable control. Such pointers include but not limited to Act of God, fire, lightning, explosion, war, disorder, flood, earth quake, industrial disputes (whether involving their employees), extremely severe weather, or acts of local or central government or other competent authorities.

</p>
      </div>


      <div className="content pt-4 pb-4">
        <h5>Hosting Terms:</h5>
        <p>Hosting is a yearly payment done in advance for the entire year. This holds true for all cases except if the client is bound by one of our Maintenance packages.</p>
        <br/>
        <p>The onus is on the client to get the hosting renewed well before the expiry date. Any failure in this regard may result in loss of data, files, emails, backups etc. Any unpaid hosting is deactivated or deleted from the server.

</p>
<br/>
<p>All renewals due must be cleared within 7 working days before the expiry date. Web Universals will not be responsible for issues resulting from delayed payment.</p>
<br/>
<p>Hosting is done on shared and non-shared servers hosted via third party providers. At Web Universals we make certain to protect our systems and servers from hackers, viruses, intruders and other online and offline problems. However, we are not to be held liable for any disruption of services if such a scenario comes up.

</p>

<br/>
<p>Client is solely responsible for the content stored on and served by the hosting service bought and the activity of any scripts or email services created under that hosting service. The Customer must maintain the security of all account passwords and applications or scripts. He must make sure that all scripts under the hosting service are free from malicious content that may harm any part of the Server, or disrupt on-going services. If the servers do face the dangers of a malware attack, then Web Universals reserves the sole right to delete the files without any prior intimation.

</p>



      </div>

<div className="content pt-4 pb-4">
<ul className="list-items-head">

  <li className="list-items1  pt-1 pb-2">The quotation and estimates provided correlate directly with the briefing provided at the time of project initiation. Any scope creep including micro-improvements would lead to cost revisions. It is important to provide as much information as possible in a face to face meeting Or thorough project requirement document to avoid cost overruns
</li>
  <li className="list-items1  pt-1 pb-2">When you provide approval to the quote you agree to accept the terms and conditions of Web Universals. You can convey your acceptance via an electronic medium, by project payment or by signing a quote
</li>
  <li className="list-items1  pt-1 pb-2">You would need to check that all information and requirement is included in the proposal or quote. They need to send clear guidelines at all milestones needed during the execution. In the absence of these guidelines, we will proceed as per our understanding and domain experience. In this case, if there is a discrepancy then this may lead to scope creep and potential cost revisions. To avoid this scenario it is crucial to provide all aspect of project requirement so that we can present an accurate quote to you.
</li>
  <li className="list-items1  pt-1 pb-2">All complexities arising in the project but not known to us at Web Universals will be considered scope creep. We operate under good faith and depend on the client to share full information beforehand. If scope creep happens due to unclear requirement then the additional costs will have to be borne by clients.
</li>
  <li className="list-items1  pt-1 pb-2">All resources aligned to the project (including the project manager, developers, and analyst) operate under pre-allocated man-hours. If any request can be accommodated within these man-hours, then we will definitely try to get it done.
</li>
  <li className="list-items1  pt-1 pb-2">We are committed to prompt project delivery. However the schedule may be re-visited in case there are modifications or changes to specifications.
</li>
  <li className="list-items1  pt-1 pb-2">Any delay from client end may result in revision to ETA and costs.
</li>
  <li className="list-items1  pt-1 pb-2">All error or bugs reported at the time of development or immediately post development will not incur additional costs.
</li>
  <li className="list-items1  pt-1 pb-2">All re-work done on an already completed/approved task will incur extra costs. Similarly any changes to design or specifications post approval will incur extra costs.
</li>
  <li className="list-items1  pt-1 pb-2">All changes or updates requested post the go-live or at time of development will incur extra costs. These additional work will be charged separately. Web Universals will not be held liable for any delays arising due to the modification of project brief.
</li>
  <li className="list-items1  pt-1 pb-2">We will need website/application content and other related materials within one/two weeks. If materials aren’t provided by this timeframe then the delay may cause extra charges.
</li>
  <li className="list-items1  pt-1 pb-2">We would need to know in advance about which browsers you need the application to be tested on. We use near recent versions of popular browsers like IE, Firefox, Chrome, and Safari on PCs
</li>
  <li className="list-items1  pt-1 pb-2">In case the site is not hosted on our servers, then there might be extra costs associated with server outage or delays in the third party servers. This will be charged separately as they aren’t a part of the original quote.
</li>
  <li className="list-items1  pt-1 pb-2">In case you need the source code then transferring the code ownership will incur extra cost. They cannot be re-sold or duplicated under any circumstances.
</li>
  <li className="list-items1  pt-1 pb-2">We use a commercial grade web server or similar server for deploying the website of applications. You need to factor in the load capacity of the application before you choose to deploy it in a routine office network environment.
</li>
  <li className="list-items1  pt-1 pb-2">As per the project specifications, we may need to integrate third party solutions like SSL certifications or payment gateways. We try our best to assess the security of these applications. But in case any issue arises out of these third-party applications then Web Universals will not be held liable. Also, the costs of purchase, subscriptions, licenses etc. will not be a part of the original quote unless mentioned explicitly.
</li>
  <li className="list-items1  pt-1 pb-2">We will not be held responsible for the performance of open source products like Open Source carts or WordPress. The onus is on the client to update all components and third-party software. We h4ly recommend going for regular backups so that there is no downtime.
</li>
  <li className="list-items1  pt-1 pb-2">All third party solutions are governed by the terms and conditions of the third party providers. In case any updates are made to these, it may impact the services or costing on our projects.
</li>
  <li className="list-items1  pt-1 pb-2">It is important to note that some unforeseen situations may disrupt the development process. This is especially in case of third party integration. At Web Universals, we will try our best to mitigate the delay and deliver the project on time. If it is within a reasonable timeframe, the client will agree to not penalize us for the genuine delays.
</li>
  <li className="list-items1  pt-1 pb-2">Domain registration and renewal are out of scope of the proposal quote unless mentioned explicitly. If you do need a quote for this, we can send it out separately.
</li>
  <li className="list-items1  pt-1 pb-2">Hosting charges are out of scope of the proposal quote unless mentioned explicitly. If you do need a quote for this, we can send it out separately. If you arrange for your own hosting then we need to be apprised of the same. This will help us assess if it is a right fit for our development and deployment needs. It is important to note that we will need total access to the same for our testing and deployment purposes. Additionally we will not be liable for the delays or issues resulting from any direct or indirect action of the hosting company.
</li>
  <li className="list-items1  pt-1 pb-2">Typically we build and test applications on our own servers. We will be unable to provide access to third party servers. You can get the website/application transferred to a pre-decided server only after all payments and dues have been cleared.
</li>
  <li className="list-items1  pt-1 pb-2">In the absence of any provision to the contrary, we will grant an unconditional license to the client upon payment of all outstanding invoices and dues. Under this license, the client can reproduce, publish, communicate, or use any graphics, text, images used in the website. Please note that this will not include the IP related to development, strategies, programming, coding, front end or back end structures.
</li>
  <li className="list-items1  pt-1 pb-2">All communication will be typically done via emails. It is important for the client to keep us updated with the relevant email addresses.
</li>
</ul>
</div>

<div className="content pt-4 pb-4">
  <h5>Cancellation or Termination:</h5>

  <p>All requests for cancelling the hosting services need to be communicated in writing or via emails. The request needs to reach us at least one month before the renewal date of the hosting services.

</p>
<br/>
<p>It is important to note that once the hosting has been renewed, it cannot be cancelled and hence the charges for the renewal must be paid in full for the entire year.</p>
<br/>

<p>If a hosting has been cancelled / disabled then all files, emails, databases and backups will be deleted from the server without any prior intimation to the client.
</p>
</div>


<div className="content pt-4 pb-4">
  <h5>Emails</h5>

  <p>The client needs to download all email communications from time to time on his computer or local server. There would be pre-defined quotas allocated to email boxes. The email accounts need to be cleaned up so that storage space is optimized for best performance.
</p>
<br/>

<p>The client agrees not use to emails to transmit or share objectionable, illegal, or inappropriate content. This may result in attacks through spams or hacks. In case such a situation arises, immediate action will be taken to protect the integrity and confidentiality of the email servers and the required files and data will be deleted without any prior intimation.
</p>
<br/>

<p>Web Universals offer packages in co-ordination with third party providers. Changes modifications to the third-party provider’s rules and policies may ultimately effect the services we provide or the terms and conditions herein.
</p>
<br/>

<p>Hosting are on shared and non-shared servers hosted via third party providers. Web Universals takes concrete steps to protect the network, systems, and servers from hackers, viruses, intruders and other online and offline problems. However we will not be held liable for any disruption of services if such a scenario arises.
</p>
<br/>



</div>

<div className="content pt-4 pb-4">
  <h5>Intellectual Property:</h5>

  <p>All content including text, graphics, files, codes, and multimedia of this website is a property of Web Universals unless otherwise specified. We reserve the sole right to modify the content or policies without providing any intimation to anyone in any form.
</p>
<br/>

<p>All copyrights related to a particular project can be transferred to the client at extra costs. This will be done only after all outstanding dues and payments have been cleared by the client and on signing the Certificate of Acceptance. We reserve the rights to disallow any transfer of ownership if any irregular or unplanned situation arises.
</p>
<br/>


<p>In the event of a Webmaster change, site owners are not allowed to display the credits to the new website, unless such time that the website functionality and appearance is changed by over 50% of our original work.
</p>
<br/>

<p>“Web Universals – Your Choice Website” is a trade mark of Web Universals, along with the symbol which consists of a ‘globe’ surrounded by the ‘Company name’ and also the logo “Web Universals – Your Choice Websites: Logo – Web Design – SEO & SMM – Mobile Application”. Clients, Partners, Suppliers, Sub-contractors and any other 3rd party organisation or individual are prevented from utilizing the Web Universals trademarks including the name, logo and symbol in any way shape or form without written consent from us.
</p>
<br/>

<p><b>Please note that Web Universals reserves the right to modify the terms and conditions without sending any prior notice in any form. Your continued usage of the website or applications, our services, or any form of communication automatically implies that you have read the updated terms and conditions and agree to abide by all terms laid down in this document.

</b></p>

</div>

      </section>

     
      </div>
    </Layout>
  );
};
export default TermsAndCondition;
