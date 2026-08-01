import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const Map = () => {
  return (
    <section className="relative bg-[#050816] pb-32">

      {/* Map */}
      <div className="relative h-[550px]">

      <iframe
  title="Google Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.34740949036367!2d82.97747047479936!3d25.352590300000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2dccbab94747%3A0x41e293e4292ff073!2sS-2%2F978%2C%20Ordali%20Bazar%2C%20Tagore%20Town%2C%20Orderly%20Bazar%2C%20Varanasi%2C%20Uttar%20Pradesh%20221002!5e0!3m2!1sen!2sin!4v1785415715660!5m2!1sen!2sin"
  className="w-full h-full blackscale invert contrast-125"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="strict-origin-when-cross-origin"
/>

        {/* Dark Overlay */}
        <div className="
        absolute
        inset-0
        bg-black/40
        "/>

<a
  href="https://www.google.com/maps/place/S-2%2F978,+Ordali+Bazar,+Tagore+Town,+Orderly+Bazar,+Varanasi,+Uttar+Pradesh+221002"
  target="_blank"
  rel="noopener noreferrer"
  className="
    absolute
    top-10
    left-10
    rounded-xl
    border border-white/10
    bg-[#050816]/80
    backdrop-blur-xl
    px-6
    py-4
    text-white
    transition-all
    duration-300
    hover:border-blue-500
    hover:bg-[#0b1730]/90
    hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]
  "
>
  <h3 className="font-semibold">
    📍 Visit Our Office
  </h3>

  <p className="mt-1 text-sm text-gray-400">
    Get Directions →
  </p>
</a>

      </div>



      {/* Floating Form */}

      <motion.div

      initial={{opacity:0,y:60}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:.7}}

      className="
      absolute

      left-1/2
      -translate-x-1/2

      top-6 md:top-32
      sm:top-24
      lg:top-16

      w-[90%]
      sm:w-[90%]
      max-w-xl

      z-20

      "

      >

        <ContactForm/>

      </motion.div>


    </section>
  );
};

export default Map;