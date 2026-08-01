import DirectorCard from "./DirectorCard";
import Footer from "../Footer/Footer"; 
import Navbar from "../Navbar/Navbar"; 
import { FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";
import GlobalBackground from "../GlobalBackground/GlobalBackground";
import { useEffect, useState } from "react";

const DirectorMessage = () => {
  const paragraph = `At Zyntro Software Solutions Private Limited, our leadership team is driven by vision, integrity, and a commitment to delivering long-term value. Based in the historic city of Varanasi, we blend tradition with innovation to create cutting-edge IT solutions. We believe strong leadership builds trust, fuels innovation, and shapes sustainable growth in the ever-evolving technology landscape. Our directors lead by example and ensure that every project aligns with our values of excellence and client satisfaction.`;

const [typedText, setTypedText] = useState("");

useEffect(() => {
  let index = 0;

  const interval = setInterval(() => {
    setTypedText(paragraph.slice(0, index + 1));
    index++;

    if (index >= paragraph.length) {
      clearInterval(interval);
    }
  }, 12); // fast typing

  return () => clearInterval(interval);
}, []);
  return (

    
    <div className=" min-h-screen relative  text-white">
      <GlobalBackground />
       <div className="relative z-10">
            <Navbar/>

      {/* Hero */}
      <section className="  max-w-4xl py-16  mx-auto text-center">
        
  <div className="flex items-center justify-center py-10 mt-20 gap-4 mb-2">

    <span className="inline-block h-[2px] w-16 bg-gradient-to-r from-transparent to-blue-400"></span>

    <span className="text-3xl md:text-4xl font-bold tracking-[0.25em] uppercase 
    text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
      Leadership   Message
    </span>

    <span className="inline-block h-[2px] w-16 bg-gradient-to-r from-purple-500 to-transparent"></span>

  

</div>

     <p className="mt-8 px-4 text-base leading-8 text-gray-400 sm:text-lg sm:leading-9">
  {typedText}
  <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-blue-400 align-middle" />
</p>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-10"></div>
        
      </section>
      <DirectorCard
  name="Rishabh Singh"
  designation="Director"
  message={`As Director at Zyntro Software Solutions, Rishabh Singh provides strategic vision and oversight to drive 
organizational excellence and innovation. He is committed to building lasting relationships with clients and partners while fostering a culture of transparency, integrity, and continuous improvement.

Rishabh's leadership focuses on leveraging cutting-edge technologies and talent to deliver transformative solutions that create sustainable value. His unwavering commitment to ethical business practices and operational excellence ensures Zyntro remains a trusted industry leader both in India and on the global stage.`}
/>

<DirectorCard
  reverse={true}
  name="Sunny Singh"
  designation="Director"
  message={`As Director at Zyntro Software Solutions, Sunny Singh brings strategic expertise and operational acumen to guide the company's growth trajectory. He plays a pivotal role in translating vision into actionable strategies while maintaining the highest standards of execution and client satisfaction.

Sunny is passionate about empowering teams, fostering innovation, and building sustainable partnerships that drive mutual success. His leadership philosophy centers on combining local insights with global best practices to deliver reliable, future-ready IT solutions that make a tangible difference in our clients' digital transformation journeys.`}
/>
      

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-10 flex flex-col md:flex-row justify-between items-center gap-6 transition-all duration-500 hover:translate-y-2 hover:shadow-[0_20px_60px_rgba(99,102,241,0.5)]">
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-white">
              Ready to Transform Your Business?
            </h2>

            <p className="mt-2 text-white/90">
              Let's create innovative solutions that drive your business
              forward.
            </p>
          </div>
       <Link
  to="/contact"
  className="mt-10 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/30"
>
  Contact Us
</Link>
        </div>
      </section>
      <Footer/>
    </div>
    </div>
  );
};

export default DirectorMessage;