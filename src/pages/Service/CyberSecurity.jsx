import cyberSecurityGif from "../../assets/services/Cyber Security.gif";
import Navbar from "../../components/Navbar/Navbar";
import OtherServices from "../../components/Services/OtherServices";
import ServiceCTA from "../../components/Services/ServiceCTA";
import Footer from "../../components/Footer/Footer";


const features = [
  "Network Security — firewalls, IDS/IPS, and secure network design.",
  "Application Security — secure coding, vulnerability testing.",
  "Endpoint Protection — antivirus, encryption, mobile security.",
  "Cloud Security — securing cloud environments and access.",
  "Identity & Access Management — MFA, RBAC, SSO integration.",
  "Incident Response — proactive monitoring, detection, and recovery.",
  "Disaster Recovery — backup solutions and business continuity.",
  "Security Awareness Training — educating staff to reduce risks.",
];


const CyberSecurity = () => {
  return (
    
    <main className="bg-[#112737] text-white ">
       

 <Navbar/>

      {/* Cyber Security Hero */}

  <section className="bg-[#072339] pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">

        <div className="max-w-7xl mx-auto px-6">


          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">



            {/* LEFT IMAGE */}

            <div
              className="
              bg-white
              rounded-3xl
              p-8
              shadow-[0_0_40px_rgba(37,99,235,0.25)]
              mb-5 sm:mb-50
              "
            >

              <img
                src={cyberSecurityGif}
                alt="Cyber Security"
                className=" relative z-10
                w-64 sm:w-80 md:w-96 lg:w-90 lg:max-w-xl
                rounded-2xl
                "
              />

            </div>



            {/* RIGHT CONTENT */}
<div className="text-center lg:text-left order-2 lg:order-1">

              <h1
                className="
                text-3xl lg:text-5xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                text-cyan-400
                mb-5 mt-8
                "
              >
                Cyber Security
              </h1>


              <p
                className="
                mt-5 text-sm sm:text-base
                lg:text-lg                text-gray-300
                leading-8
                mb-6
                "
              >
                Cybersecurity is the practice of protecting systems,
                networks, and programs from digital attacks. At Zyntro,
                we offer comprehensive cybersecurity services to safeguard
                your organization against evolving threats and ensure
                compliance with global standards.
              </p>



              <h2
                className="
                text-2xl
                font-semibold
                text-cyan-400
                mb-5
                "
              >
                Our Cybersecurity Services
              </h2>



              <ul className="space-y-3">


                {features.map((item,index)=>(

                  <li
                    key={index}
                    className="
                    flex  items-start justify-center lg:justify-start
                    gap-3
                    text-gray-200
                    "
                  >

                    <span className="text-cyan-400">
                      •
                    </span>

                    <span>
                      {item}
                    </span>

                  </li>

                ))}


              </ul>
              <ServiceCTA />

            </div>


          </div>


        </div>


      </section>



      <OtherServices currentSlug="cyber-security" />

      

      <Footer />


    </main>
  );
};


export default CyberSecurity;
