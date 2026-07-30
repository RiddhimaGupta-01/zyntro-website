import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PortfolioHero from "../components/Portfolio/PortfolioHero";
import CompanyStats from "../components/Portfolio/ComanyStats";
import PanIndia from "../components/Portfolio/PanIndia";
import PlatformDeliver from "../components/Portfolio/PlatFormDeliver.";

const Portfolio = () => {
  return (
    <>
      <Navbar />

      <main className="bg-[#050816] overflow-hidden">
        <PortfolioHero />
        <CompanyStats/>
        <PanIndia/>
        <PlatformDeliver/>
      </main>

      <Footer />
    </>
  );
};

export default Portfolio;