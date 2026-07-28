import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };


  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}

      className="
      bg-white/5
      border border-white/10
      rounded-3xl
      p-8
      backdrop-blur-md
      space-y-5
      "
    >

      <input
        type="text"
        placeholder="Your Name"
        required
        className="
        w-full
        bg-transparent
        border border-white/20
        rounded-xl
        px-5 py-3
        text-white
        placeholder-gray-400
        outline-none
        focus:border-blue-400
        "
      />


      <input
        type="email"
        placeholder="Email Address"
        required
        className="
        w-full
        bg-transparent
        border border-white/20
        rounded-xl
        px-5 py-3
        text-white
        placeholder-gray-400
        outline-none
        focus:border-blue-400
        "
      />


   
      
      <input
        type="tel"
        placeholder="Phone Number"
        className="
        w-full
        bg-transparent
        border border-white/20
        rounded-xl
        px-5 py-3
        text-white
        placeholder-gray-400
        outline-none
        focus:border-blue-400
        "
      />
         <input
        type="text"
        placeholder="Subject"
        className="
        w-full
        bg-transparent
        border border-white/20
        rounded-xl
        px-5 py-3
        text-white
        placeholder-gray-400
        outline-none
        focus:border-blue-400
        "
      />


      <textarea
        rows="5"
        placeholder="Tell us about your project"
        className="
        w-full
        bg-transparent
        border border-white/20
        rounded-xl
        px-5 py-3
        text-white
        placeholder-gray-400
        outline-none
        focus:border-blue-400
        "
      />


      <button
        type="submit"
        className="
        w-full
        py-3
        rounded-xl
        bg-gradient-to-r
        from-blue-500
        to-purple-600
        text-white
        font-semibold
        hover:scale-105
        transition
        "
      >
        Send Message
      </button>


      {submitted && (
        <p className="text-green-400 text-center">
          Message submitted successfully!
        </p>
      )}

    </motion.form>
  );
};

export default ContactForm;