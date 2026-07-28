import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import ContactHero from "../components/Contact/ContactHero";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactMap from "../components/Contact/ContactMap";
import ContactForm from "../components/Contact/ContactForm";
import WhyContact from "../components/Contact/WhyContact";

const Contact = () => {
  return (
    <>
      <Navbar />

      <main className="bg-[#050816] overflow-hidden">
        <ContactHero />
        <ContactInfo />
        <ContactMap />
      
        <WhyContact />
      </main>

      <Footer />
    </>
  );
};

export default Contact;