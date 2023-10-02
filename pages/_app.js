import Preloader from "@/src/layout/Preloader";
import "@/styles/globals.css";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
const App = ({ Component, pageProps }) => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  function addProductJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org/", 
        "@type": "BreadcrumbList", 
        "itemListElemen": [{
          "@type": "ListItem", 
          "position": 1, 
          "name": "About us",
          "item": "https://webuniversals.com/about"  
        },{
          "@type": "ListItem", 
          "position": 2, 
          "name": "Contact us",
          "item": "https://webuniversals.com/contacts"  
        }]
      }`,
    };
  }

  return (
    <Fragment>
      <Head>
        <link rel="icon" href="assets/img/logo-icon.png" />
        {/* CSS only */}
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/css/bootstrap.min.css"
        />
        {/* Font Awesome 6 */}
        <link rel="stylesheet" href="assets/css/fontawesome.min.css" />
        <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="assets/css/swiper.css" />
        {/* style */}
        <link rel="stylesheet" href="assets/css/style.css" />
        {/* responsive */}
        <link rel="stylesheet" href="assets/css/responsive.css" />
        {/* color */}
        <link rel="stylesheet" href="assets/css/color.css" />

 

      </Head>


<script   type="application/ld+json" dangerouslySetInnerHTML={addProductJsonLd()} key="product-jsonld" />


      {/* <Preloader /> */} 
      {!loader && <Component {...pageProps} />}
    </Fragment>
  );
};
export default App;
