import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const Map = () => {
  return (
    <section className="relative bg-[#050816] pb-16 sm:pb-20 lg:pb-32">

      {/* ================= MAP ================= */}
      <div
        className="
          relative
          h-[380px]
          sm:h-[450px]
          lg:h-[550px]
          overflow-hidden
        "
      >
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.34740949036367!2d82.97747047479936!3d25.352590300000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2dccbab94747%3A0x41e293e4292ff073!2sS-2%2F978%2C%20Ordali%20Bazar%2C%20Tagore%20Town%2C%20Orderly%20Bazar%2C%20Varanasi%2C%20Uttar%20Pradesh%20221002!5e0!3m2!1sen!2sin!4v1785415715660!5m2!1sen!2sin"
          className="h-full w-full border-0 blackscale invert contrast-125"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />

        {/* Dark Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-black/40" />

        {/* ================= OFFICE BUTTON ================= */}
        <a
          href="https://www.google.com/maps/place/S-2%2F978,+Ordali+Bazar,+Tagore+Town,+Orderly+Bazar,+Varanasi,+Uttar+Pradesh+221002"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our office and get directions"
          className="
            absolute
            left-4
            top-4
            sm:left-6
            sm:top-6
            lg:left-10
            lg:top-10

            rounded-xl
            border
            border-white/10
            bg-[#050816]/85
            px-4
            py-3
            sm:px-6
            sm:py-4

            text-white
            backdrop-blur-xl

            transition-all
            duration-300

            hover:border-blue-500
            hover:bg-[#0b1730]/90
            hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]
          "
        >
          <h3 className="text-sm font-semibold sm:text-base">
            📍 Visit Our Office
          </h3>

          <p className="mt-1 text-xs text-gray-400 sm:text-sm">
            Get Directions →
          </p>
        </a>
      </div>

      {/* ================= CONTACT FORM ================= */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          relative
          z-20

          mx-auto
          -mt-12

          w-[calc(100%-2rem)]
          max-w-xl

          sm:-mt-20
          sm:w-[calc(100%-3rem)]

          lg:absolute
          lg:left-1/2
          lg:top-16
          lg:-translate-x-1/2
          lg:-mt-0
          lg:w-[90%]
        "
      >
        <ContactForm />
      </motion.div>

    </section>
  );
};

export default Map;