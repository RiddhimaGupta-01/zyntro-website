
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PortfolioHero from "../components/Portfolio/PortfolioHero";
import CompanyStats from "../components/Portfolio/ComanyStats";
import PanIndia from "../components/Portfolio/PanIndia";
import PlatformDeliver from "../components/Portfolio/PlatFormDeliver.";


const Portfolio = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">

      

      {/* Page Content */}
      <div className="relative z-10">

        <Navbar />

        <main className="overflow-hidden">
          <PortfolioHero />
          <CompanyStats />
          <PanIndia />
          <PlatformDeliver />
        </main>

        <Footer />

      </div>
    </div>
  );
};

export default Portfolio;
