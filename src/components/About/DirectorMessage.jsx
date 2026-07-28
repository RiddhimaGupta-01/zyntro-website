import DirectorCard from "./DirectorCard";
import Footer from "../Footer/Footer"; 
import Navbar from "../Navbar/Navbar"; 
import director1 from "../../assets/director1.jpg";
import director2 from "../../assets/director2.jpg";

const DirectorMessage = () => {
  return (

    
    <div className="bg-[#2a063d] min-h-screen text-white">
            <Navbar/>

      {/* Hero */}
      <section className="max-w-4xl py-20  mx-auto text-center">

<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">

   
          Leadership Message
        </h1>

       <p className="mt-8 text-base sm:text-lg leading-8 sm:leading-9 text-gray-400 px-4">
          At Zyntro Software Solutions Private Limited, our leadership team is driven by vision, integrity, and a commitment to
         delivering long-term value. Based in the historic city of Varanasi, we blend tradition with innovation to create cutting
         -edge IT solutions. We believe strong leadership builds trust, fuels innovation, and shapes sustainable growth in the ever-
         evolving technology landscape. Our directors lead by example and ensure that every project aligns with our values of
          excellence and client satisfaction.
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-10"></div>
        
      </section>
      

      <DirectorCard
        image={director1}
        name="Rishabh Singh"
        designation="Director"
        message={`As Director at Zyntro Software Solutions, Rishabh Singh provides strategic vision and oversight to drive 
            organizational excellence and innovation. He is committed to building lasting relationships with clients and partners while fostering a culture of transparency, integrity, and continuous improvement.

Rishabh's leadership focuses on leveraging cutting-edge technologies and talent to deliver transformative solutions that create sustainable value. His unwavering commitment to ethical business practices and operational excellence ensures Zyntro remains a trusted industry leader both in India and on the global stage.`}
      />

      <DirectorCard
        image={director2}
        reverse={true}
        name="Sunny Singh"
        designation="Director"
        message={`As Director at Zyntro Software Solutions, Sunny Singh brings strategic expertise and operational acumen to guide the company's growth trajectory. He plays a pivotal role in translating vision into actionable strategies while maintaining the highest standards of execution and client satisfaction.

Sunny is passionate about empowering teams, fostering innovation, and building sustainable partnerships that drive mutual success. His leadership philosophy centers on combining local insights with global best practices to deliver reliable, future-ready IT solutions that make a tangible difference in our clients' digital transformation journeys.`}
      />

      {/* CTA */}

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-10 flex flex-col md:flex-row justify-between items-center gap-6 transition-all duration-500 hover:translate-y-2 hover:shadow-[0_20px_60px_rgba(99,102,241,0.5)]">
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>

            <p className="mt-2 text-white/90">
              Let's create innovative solutions that drive your business
              forward.
            </p>
          </div>

          <button className="bg-white text-black px-8 py-3 rounded-xl font-semibold  transition-all duration-300 hover:bg-slate-900 hover:text-white">
            Contact Us
          </button>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default DirectorMessage;