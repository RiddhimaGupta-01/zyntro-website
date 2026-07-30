import { motion } from "framer-motion";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
    FaCheckCircle,
} from "react-icons/fa";

const contactCards = [
    {
        icon: FaPhoneAlt,
        title: "Call Us",
        value: "+91-8787044997",
        link: "tel:+918787044997",
    },
    {
        icon: FaEnvelope,
        title: "Email Us",
        value: "support@zyntro.in",
        link: "mailto:support@zyntro.in",
    },
    {
        icon: FaMapMarkerAlt,
        title: "Office Address",
        details: [
            {
                label: "Registered Address:",
                text: "Sant Ravidas Nagar, Bhadohi",
            },
            {
                label: "Office Address:",
                text: "S-2/1A-81-R-I/101, Tagore Town Colony, Orderly Bazar, Varanasi - 221002",
            }
        ],


    },
   
];

const highlights = [
    "Free Consultation",
    "Custom Software Development",
    "Mobile & Web Applications",
    "ERP & CRM Solutions",
    "Pan-India Digital Reach",
];

const ContactInfo = () => {
    return (
        <section className="bg-[#050816] py-24">
            <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Side */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-blue-500 font-semibold tracking-[3px] uppercase">
                        Get In Touch
                    </span>

                    <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white leading-tight">
                        Let's Discuss Your Next Project
                    </h2>

                    <p className="mt-6 text-gray-400 leading-8 text-lg">
                        Whether you're looking for enterprise software, ERP solutions,
                        mobile applications, or cloud services, our team is here to help
                        you build secure, scalable, and future-ready digital solutions.
                    </p>

                    <div className="mt-10 space-y-4">
                        {highlights.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 text-white"
                            >
                                <FaCheckCircle className="text-cyan-400" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
              
                </motion.div>

                {/* Right Side */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {contactCards.map((card, index) => {
                        const Icon = card.icon;

                        return (
                           <motion.div
    key={index}
    whileHover={{ y: -8 }}
    className={`rounded-3xl border border-white/10 bg-[#0B1220] p-6
    hover:border-cyan-400 transition-all duration-300
    hover:shadow-[0_0_30px_rgba(59,130,246,.25)]
   ${card.title === "Office Address"
  ? "md:col-span-2"
  : ""}`}
>
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-cyan-400 text-xl">
                                    <Icon />
                                </div>

                                <h3 className="mt-5 text-xl font-semibold text-white">
                                    {card.title}
                                </h3>
                                {card.details ? (
                                   
                                <div className="mt-6 grid md:grid-cols-5 gap-8">
  {card.details.map((item, i) => (
  <div
    key={i}
    className={i === 0 ? "md:col-span-2" : "md:col-span-3"}
  >
      <h4 className="text-white font-semibold text-lg mb-3">
        {item.label}
      </h4>

      <p className="text-gray-400 leading-7">
        {item.text}
      </p>
    </div>
  ))}
</div>
  
                                ) : card.link ? (
                                    <a
                                        href={card.link}
                                        className="mt-3 block text-gray-400 transition-colors hover:text-cyan-400"
                                    >
                                        {card.value}
                                    </a>
                                ) : (
                                    <p className="mt-3 text-gray-400">
                                        {card.value}
                                    </p>
                                )}
                                    
                                
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
};

export default ContactInfo;