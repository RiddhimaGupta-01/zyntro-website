import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import ContactHero from "../components/Contact/ContactHero";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactMap from "../components/Contact/ContactMap";
import GlobalBackground from "../components/GlobalBackground/GlobalBackground";

const Contact = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Global Background */}
      <GlobalBackground />

      {/* Page Content */}
      <div className="relative z-10">

        <Navbar />

        <main className="overflow-hidden">
          <ContactHero />
          <ContactInfo />
          <ContactMap />
        </main>

        <Footer />

      </div>
    </div>
  );
};

export default Contact;