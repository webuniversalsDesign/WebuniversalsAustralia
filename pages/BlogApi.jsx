import TerioCounter from "@/src/components/TerioCounter";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { latestswiper, partnerswiper, projectsswiper } from "@/src/sliderProps";


import { blogswiper } from "@/src/sliderProps";

import { Swiper, SwiperSlide } from "swiper/react";

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
  
    return {
      props: {
        data,
      },
    };
  };

const BlogApi = ({data}) => {
  return (
    <Layout noHeaderBg pageName={"blog"}>

     <h1 className="pt-5 mt-5">Hellow I am fetching Api</h1>
      
     {data.map((curElem) => {
        return (

            <div className="container">

                 <div key={curElem.id}>
            <h3>{curElem.id}</h3>
           
           <Link href={`/blog/${curElem.id}`}>
           <h2>{curElem.title}</h2>
           </Link>
          
          </div>
            </div>
         
        );
      })}
    </Layout>
  );
};
export default BlogApi;
