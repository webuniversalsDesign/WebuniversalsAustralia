import Layout from "@/src/layout/Layout";
import dynamic from "next/dynamic";
const PortfolioGridIsotope = dynamic(
  () => import("@/src/components/PortfolioGridIsotope"),
  {
    ssr: false,
  }
);
const Portfolio = () => {
  return (
    <Layout noHeaderBg pageName={"Portfolio 1"}>
      <section
        className="splash-area-section"
        style={{ backgroundImage: "url(assets/img/background.jpg)" }}
      >
        <div className="container">
          <div className="splash-area">
            <h2> Our Portfolio</h2>
            <a href="#">We Love to Build Something Amazing </a>
          </div>
        </div>
      </section>
      <PortfolioGridIsotope />
    </Layout>
  );
};
export default Portfolio;
