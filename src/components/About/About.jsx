import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import FAQ from "./FAQ";
import {whyChooseData} from "../../data/WhyChooseData";
import WhyChooseCard from "./WhyChooseCard";

const About = () => {
  return (
    <div className=" relative bg-[#131d38] text-white overflow-hidden min-h-screen">
      <Navbar/>
      {/* Star Background */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Stars */}
        <span className="absolute top-20 left-[10%] w-1 h-1 bg-blue-400 rounded-full animate-pulse"></span>
        <span className="absolute top-40 left-[30%] w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
        <span className="absolute top-24 right-[20%] w-1 h-1 bg-blue-300 rounded-full animate-pulse"></span>
        <span className="absolute top-[60%] right-[15%] w-2 h-2 bg-purple-300 rounded-full animate-pulse"></span>
        <span className="absolute bottom-32 left-[20%] w-1 h-1 bg-blue-400 rounded-full animate-pulse"></span>
        <span className="absolute bottom-20 right-[40%] w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></span>


        {/* Soft Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full"></div>


        {/* Grid Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      </div>
      {/* Hero Section */}
      <section className="relative">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 blur-[150px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="text-center max-w-4xl mx-auto">

  <div className="flex items-center justify-center py-10 gap-4 mb-6">

    <span className="inline-block h-[2px] w-16 bg-gradient-to-r from-transparent to-blue-400"></span>

    <span className="text-3xl md:text-4xl font-bold tracking-[0.25em] uppercase 
    text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
      About Zyntro
    </span>

    <span className="inline-block h-[2px] w-16 bg-gradient-to-r from-purple-500 to-transparent"></span>

  

</div>
            <h1 className="mt-5 text-4xl md:text-5xl font-bold leading-tight">
              Transforming
              <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Businesses Through Technology
              </span>
            </h1>

            <p className="mt-6 py-6 text-base text-gray-400 md:text-lg leading-8">
              Zyntro Software Solutions empowers organizations with innovative
              digital solutions, cybersecurity, cloud services, enterprise
              mobility, and software development to accelerate business growth
              and digital transformation.
            </p>

            <div className="mt-7  flex justify-center gap-5 flex-wrap">
              <Link
                to="/services"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold hover:scale-105 transition"
              >
                Our Services
              </Link>

              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl border border-blue-500 hover:bg-blue-600 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      

      {/* About Us Section */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
       

            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Building Digital Solutions
              <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                That Drive Success
              </span>
            </h2>

            <p className="mt-6 text-gray-400 text-lg leading-8">
              Zyntro Software Solutions is a technology company focused on
              delivering innovative software solutions, cloud services,
              cybersecurity, enterprise mobility and digital transformation
              services.
            </p>

            <p className="mt-4 text-gray-400 text-lg leading-8">
              We combine creativity, technology and expertise to help businesses
              achieve their goals and grow in the digital era.
            </p>

            
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition">
              <h3 className="text-4xl font-bold text-blue-400">500+</h3>
              <p className="mt-3 text-gray-400">Projects Completed</p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition">
              <h3 className="text-4xl font-bold text-purple-400">98%</h3>
              <p className="mt-3 text-gray-400">Client Satisfaction</p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition">
              <h3 className="text-4xl font-bold text-blue-400">10+</h3>
              <p className="mt-3 text-gray-400">Years Experience</p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition">
              <h3 className="text-4xl font-bold text-purple-400">24/7</h3>
              <p className="mt-3 text-gray-400">Support Available</p>
            </div>
          </div>
        </div>
      </section>
     <section className="py-20 px-6">
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold">
        Why Choose
        <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Zyntro
        </span>
      </h2>

      <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
        We deliver innovative, secure and scalable solutions that help businesses grow.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {whyChooseData.map((item, index) => (
        <WhyChooseCard
          key={index}
          icon={item.icon}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </div>

  </div>
</section>

<FAQ />
<Footer/>


    
    </div>
  );
};

export default About;
