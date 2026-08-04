import { lazy, Suspense } from "react";

import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero.jsx";


// Below-the-fold components
const Services = lazy(() =>
  import("../components/Services/Services.jsx")
);

const Technologies = lazy(() =>
  import("../components/Technologies/Technologies.jsx")
);

const WhyChooseUs = lazy(() =>
  import("../components/WhyChooseUs/WhyChooseUs.jsx")
);

const HomePortfolio = lazy(() =>
  import("../components/Home/HomePortfolio.jsx")
);

const HomeContact = lazy(() =>
  import("../components/Home/HomeContact.jsx")
);

const Footer = lazy(() =>
  import("../components/Footer/Footer.jsx")
);

const Home = () => {
  return (
    <>
   

      <Navbar />

      <Hero />

      <Suspense fallback={null}>
        <Services />
        <Technologies />
        <WhyChooseUs />
        <HomePortfolio />
        <HomeContact />
        <Footer />
      </Suspense>
    </>
  );
};

export default Home;


