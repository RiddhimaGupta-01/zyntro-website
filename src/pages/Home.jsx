import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Services from "../components/Services/Services.jsx";
import About from "../components/About/About.jsx";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs.jsx";

import Footer from "../components/Footer/Footer.jsx";
import Technologies from "../components/Technologies/Technologies.jsx";
import HomeContact from "../components/Home/HomeContact";
import Portfolio from "./Portfolio.jsx";
import HomePortfolio from "../components/Home/HomePortfolio.jsx";

import PageTransition from "../components/Animations/PageTransition";



const Home = () => {
  return (
    <>
    <PageTransition />
      <Navbar />
      <Hero />
      <Services />
      <Technologies />
      <WhyChooseUs />
      <HomePortfolio/>
      <HomeContact />
      <Footer />
    </>
  );
};

export default Home;
