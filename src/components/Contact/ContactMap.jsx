import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const Map = () => {
  return (
    <section className="relative bg-[#050816] pb-32">

      {/* Map */}
      <div className="relative h-[550px]">

        <iframe
          title="Google Map"
          src="https://maps.google.com/maps?q=Lucknow%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full blackscale invert  contrast-125"
          loading="lazy"
        />

        {/* Dark Overlay */}
        <div className="
        absolute
        inset-0
        bg-black/40
        "/>


        {/* Visit Office Card */}
        <div className="
        absolute
        top-10
        left-10

        bg-[#050816]/80
        backdrop-blur-xl

        border border-white/10

        rounded-xl

        px-6
        py-4

        text-white
        ">

          <h3 className="font-semibold">
            📍 Visit Our Office
          </h3>

          <p className="text-sm text-gray-400">
            Get Direction →
          </p>

        </div>

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