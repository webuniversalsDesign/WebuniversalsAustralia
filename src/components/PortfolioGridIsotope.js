import Isotope from "isotope-layout";
import { useCallback, useEffect, useRef, useState } from "react";
const PortfolioGridIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".grid", {
        itemSelector: ".col-lg-4",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".col-lg-4",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    // return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) =>
    value === filterKey ? "active-work is-checked" : "";

  return (
    <section className="gap no-bottom">
      <div className="container">
        <div className="row">
          <div className="portfolios">
            <div className="filters portfolio-controllers-container">
              <div
                className=" portfolio-controllers wow fadeLeft button-group js-radio-button-group"
                data-wow-duration="1s"
                data-wow-delay=".1s"
                data-filter-group="color"
              >
                <button
                  type="button"
                  className={`c-pointer ${activeBtn("*")}`}
                  onClick={handleFilterKeyChange("*")}
                  data-filter
                >
                  All
                </button>
                <button
                  type="button"
                  className={`c-pointer ${activeBtn("Graphic")}`}
                  onClick={handleFilterKeyChange("Graphic")}
                  data-filter=".Design"
                >
                  Graphic Design  Portfolio
                </button>
                <button
                  type="button"
                  className={`c-pointer ${activeBtn("Logo")}`}
                  onClick={handleFilterKeyChange("Logo")}
                  data-filter=".Branding"
                >
                  Logo Design Portfolio
                </button>
                <button
                  type="button"
                  className={`c-pointer ${activeBtn("Development")}`}
                  onClick={handleFilterKeyChange("Development")}
                  data-filter=".Development"
                >
                  Web Design Portfolio
                </button>
              </div>
            </div>

            <div className="grid row align-items-center">
          
              {/* Graphic Cards Section */}
              <div className="col-lg-4 col-md-6 col-sm-6 UX/UI UI-Design Graphic ">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/logoDesign.png"
                        />
                      </a>
                    </figure>
                    <h3>
                      <a href="">Logo Design</a>
                    </h3>
                    <span>Your logo is the face of your brand, and we understand the importance of making a memorable first impression.</span>
                    <a href="">Contact Us</a>
                  </div>
                </div>
              </div>


              <div className="col-lg-4 col-md-6 col-sm-6 UX/UI UI-Design Graphic ">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/letterHead.jpg"
                        />
                      </a>
                    </figure>
                    <h3>
                      <a href="">Letterhead Design</a>
                    </h3>
                    <span>Make your correspondence stand out with professionally designed letterheads.</span>
                    <a href="">Contact Us</a>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-6 col-sm-6 UX/UI UI-Design Graphic ">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/visitingCard.jpg"
                        />
                      </a>
                    </figure>
                    <h3>
                      <a href="">Visiting Card Design</a>
                    </h3>
                    <span>Leave a lasting impression on potential clients and business associates with our professionally designed visiting cards.</span>
                    <a href="">Contact Us</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 UX/UI UI-Design Graphic ">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/flyerDesign.jpg"
                        />
                      </a>
                    </figure>
                    <h3>
                      <a href="">Flyer Design</a>
                    </h3>
                    <span>Promote your products, services, or events with eye-catching flyers that grab attention.</span>
                    <a href="">Contact Us</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 UX/UI UI-Design Graphic ">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/boacher.jpg"
                        />
                      </a>
                    </figure>
                    <h3>
                      <a href="">Brochure Design</a>
                    </h3>
                    <span>Tell your brand’s story in a visually compelling way with our brochure design services.</span>
                    <a href="">Contact Us</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 UX/UI UI-Design Graphic ">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/voucher.jpg"
                        />
                      </a>
                    </figure>
                    <h3>
                      <a href="">Voucher Design</a>
                    </h3>
                    <span>Reward your customers with beautifully designed vouchers that make them feel special.</span>
                    <a href="">Contact Us</a>
                  </div>
                </div>
              </div>

              {/* Logo design Section */}

              <div className="col-lg-4 col-md-6 col-sm-6 UX/UI UI-Design Logo ">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/logocardDesignImg.jpg"
                        />
                      </a>
                    </figure>
                    <h3>
                      <a href="">Logo Design 1</a>
                    </h3>
                    <span>Logo Design content</span>
                    <a href="">Contact Us</a>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-6 col-sm-6 UX/UI UI-Design Logo ">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/logocardDesignImg.jpg"
                        />
                      </a>
                    </figure>
                    <h3>
                      <a href="">Logo Design 2</a>
                    </h3>
                    <span>Logo Design content</span>
                    <a href="">Contact Us</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 UX/UI UI-Design Logo ">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/logocardDesignImg.jpg"
                        />
                      </a>
                    </figure>
                    <h3>
                      <a href="">Logo Design 3</a>
                    </h3>
                    <span>Logo Design content</span>
                    <a href="">Contact Us</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 UX/UI UI-Design Logo ">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/logocardDesignImg.jpg"
                        />
                      </a>
                    </figure>
                    <h3>
                      <a href="">Logo Design 4</a>
                    </h3>
                    <span>Logo Design content</span>
                    <a href="">Contact Us</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 UX/UI UI-Design Logo ">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/logocardDesignImg.jpg"
                        />
                      </a>
                    </figure>
                    <h3>
                      <a href="">Logo Design 5</a>
                    </h3>
                    <span>Logo Design content</span>
                    <a href="">Contact Us</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 UX/UI UI-Design Logo ">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="logocardDesignImg">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/logocardDesignImg.jpg"
                        />
                      </a>
                    </figure>
                    <h3>
                      <a href="logocardDesignImg">Logo Design 6</a>
                    </h3>
                    <span>Logo Design content</span>
                    <a href="logocardDesignImg">Contact Us</a>
                  </div>
                </div>
              </div>

              {/* Web Design Section */}

              <div className="col-lg-4 col-md-6 col-sm-6 UX/UI UI-Design Development ">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="portfolio-single-v2.html">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/project1.png"
                        />
                      </a>
                    </figure>
                    <h3>
                      <a href="portfolio-single-v2.html">Amma Constructions India Pvt Ltd</a>
                    </h3>
                 
                    <a href="portfolio-single-v2.html">Contact Us</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 UX/UI UI-Design Development ">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="portfolio-single-v2.html">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/project2.png"
                        />
                      </a>
                    </figure>
                    <h3>
                      <a href="portfolio-single-v2.html">Campus Continents</a>
                    </h3>
              
                    <a href="portfolio-single-v2.html">Contact Us</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 UX/UI UI-Design Development ">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="portfolio-single-v2.html">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/project3.png"
                        />
                      </a>
                    </figure>
                    <h3>
                      <a href="portfolio-single-v2.html">Endo Medical Systems</a>
                    </h3>
                    <a href="portfolio-single-v2.html">Contact Us</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 UX/UI UI-Design Development ">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="portfolio-single-v2.html">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/project4.png"
                        />
                      </a>
                    </figure>
                    <h3>
                      <a href="portfolio-single-v2.html">Energy Tech World</a>
                    </h3>
                    
                    <a href="portfolio-single-v2.html">Contact Us</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 UX/UI UI-Design Development ">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="portfolio-single-v2.html">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/project5.png"
                        />
                      </a>
                    </figure>
                    <h3>
                      <a href="portfolio-single-v2.html">Flowtech Pumps & Motors</a>
                    </h3>
                    <a href="portfolio-single-v2.html">Contact Us</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 UX/UI UI-Design Development ">
                <div className="portfolio-detail">
                  <div className="portfolio-img hoverstyle">
                    <figure>
                      <a href="portfolio-single-v2.html">
                        <img
                          className="w-100"
                          alt="profile img"
                          src="assets/img/project6.png"
                        />
                      </a>
                    </figure>
                    <h3>
                      <a href="portfolio-single-v2.html">Lakeview Milk Bar</a>
                    </h3>
                    <a href="portfolio-single-v2.html">Contact Us</a>
                  </div>
                </div>
              </div>
              
            

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PortfolioGridIsotope;
