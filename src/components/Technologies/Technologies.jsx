import { motion } from "framer-motion";
import logo from "../../assets/navbar/zyntro.png";
import { technologies } from "../../data/technologiesData";

const Technologies = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 lg:pt-24 lg:pb-16">
   
      <motion.div
        className="absolute w-3 h-3 rounded-full bg-blue-500"
        style={{ top: "30%", right: "15%" }}
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <motion.div
        className="absolute w-2 h-2 rounded-full bg-purple-400"
        style={{ bottom: "25%", left: "20%" }}
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        className="absolute w-3 h-3 rounded-full bg-cyan-300"
        style={{ bottom: "18%", right: "22%" }}
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 5.5, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Badge */}
          <span
            className="
      inline-flex
      items-center
      gap-2
      rounded-full
      border
      border-blue-500/20
      bg-gradient-to-r
      from-blue-500/20
      to-purple-500/20
      px-6
      py-2
      text-sm
      font-semibold
      tracking-[3px]
      uppercase
      text-white
      backdrop-blur-xl
    "
          >
            Technologies We Master
          </span>

          {/* Title */}

         
          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
  {/* First Line */}
  <motion.span
    initial={{ width: 0 }}
    whileInView={{ width: "100%" }}
    viewport={{ once: true }}
    transition={{
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    }}
    className="
      block
      overflow-hidden
      whitespace-nowrap
      text-white
    "
  >
    Building Future With
  </motion.span>

  {/* Second Line */}
  <motion.span
    initial={{ width: 0 }}
    whileInView={{ width: "100%" }}
    viewport={{ once: true }}
    transition={{
      duration: 1.1,
      delay: 0.35,
      ease: [0.16, 1, 0.3, 1],
    }}
    className="
      block
      overflow-hidden
      whitespace-nowrap
      bg-gradient-to-r
      from-blue-400
      to-purple-500
      bg-clip-text
      text-transparent
    "
  >
    Modern Technologies
  </motion.span>
</h2>

          {/* Description */}

          <p
            className="
      mx-auto
      mt-8
      max-w-3xl
      text-lg
      leading-8
      text-gray-300
    "
          >
            We leverage industry-leading technologies and modern frameworks to
            create secure, scalable and high-performance digital solutions.
          </p>
        </motion.div>
        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-center">
       <motion.div
  initial={{
    opacity: 0,
    x: -220,
    scale: 0.85,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
    scale: 1,
  }}
  viewport={{
    once: true,
    amount: 0.25,
  }}
  transition={{
    duration: 1.3,
    ease: [0.16, 1, 0.3, 1],
  }}
  className="flex justify-center"
>
            <div
              className="relative flex items-center justify-center
w-[300px] h-[300px]
sm:w-[360px] sm:h-[360px]
lg:w-[460px] lg:h-[460px]"
            >
          {/* Outer Orbit */}
<div
  className="
    absolute
    inset-0
    rounded-full
    border border-blue-400/60
    shadow-[0_0_8px_rgba(59,130,246,0.65),0_0_22px_rgba(59,130,246,0.35)]
  "
/>

{/* Second Orbit */}
<div
  className="
    absolute
    inset-[8%]
    rounded-full
    border border-purple-400/45
    shadow-[0_0_8px_rgba(168,85,247,0.45),0_0_18px_rgba(168,85,247,0.20)]
  "
/>

{/* Third Orbit */}
<div
  className="
    absolute
    inset-[17%]
    rounded-full
    border border-blue-400/30
    shadow-[0_0_6px_rgba(59,130,246,0.30)]
  "
/>
              {/* Center Circle */}
              <div
                className="
          relative
          w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56
          rounded-full
          border
          border-blue-500/20
          bg-gradient-to-br
          from-[#0B1120]
          to-[#111827]
          flex
          items-center
          justify-center
          shadow-[0_0_80px_rgba(59,130,246,0.18)]
        "
              >
                {/* Orbit Rotation */}
               {/* ================= SMOOTH ORBIT ================= */}
<motion.div
  className="absolute inset-0"
  initial={{
    opacity: 0,
    scale: 0.75,
    rotate: -20,
  }}
  whileInView={{
    opacity: 1,
    scale: 1,
    rotate: 0,
  }}
  viewport={{
    once: true,
    amount: 0.25,
  }}
  transition={{
    opacity: {
      duration: 0.5,
      ease: "easeOut",
    },
    scale: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
    rotate: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }}
>
  <motion.div
    className="absolute inset-0"
    animate={{ rotate: 360 }}
    transition={{
      duration: 40,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    {technologies.map((tech, index) => {
      const radius =
        window.innerWidth < 640
          ? 120
          : window.innerWidth < 1024
            ? 145
            : 180;

      const angle =
        (360 / technologies.length) * index - 90;

      const x =
        radius * Math.cos((angle * Math.PI) / 180);

      const y =
        radius * Math.sin((angle * Math.PI) / 180);

      return (
        <div
          key={tech.name}
          className="absolute left-1/2 top-1/2"
          style={{
            transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
          }}
        >
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              flex
              h-14 w-14
              items-center justify-center
              rounded-full
              border border-blue-500/20
              bg-[#0F172A]
              backdrop-blur-xl
              shadow-[0_0_15px_rgba(59,130,246,0.12)]
              transition-all duration-300
              hover:scale-110
              hover:border-cyan-400
              hover:shadow-[0_0_35px_rgba(59,130,246,0.4)]
              sm:h-16 sm:w-16
              lg:h-20 lg:w-20
            "
          >
            <img
              src={tech.logo}
              alt={tech.name}
              width="48"
              height="48"
              loading="lazy"
              className="h-10 w-10 object-contain sm:h-11 sm:w-11 lg:h-12 lg:w-12"
            />
          </motion.div>
        </div>
      );
    })}
  </motion.div>
</motion.div>

                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-3xl" />

                {/* Center Logo */}
                <div
                  className="
            relative
        w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40
            rounded-full
            bg-[#0F172A]
            border
            border-blue-500/20
            flex
            items-center
            justify-center
          "
                >
                  <img
                    src={logo}
                    alt="Zyntro"
                    className="w-28 object-contain drop-shadow-[0_0_25px_rgba(168,85,247,.7)]"
                  />
                </div>
              </div>
            </div>
          
          
</motion.div>

{/* RIGHT SIDE */}
<div className="grid grid-cols-2 gap-4 md:gap-6 max-w-2xl ml-auto">
  {technologies.map((tech, index) => (
    <motion.div
      key={tech.name}
      initial={{
        opacity: 0,
        x: 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -6,
      }}
      className="
        group
        rounded-xl
        border
        border-white/10
        bg-white/5
        p-3 sm:p-4
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400
        hover:shadow-[0_0_30px_rgba(59,130,246,.25)]
      "
    >
      <div className="flex flex-col sm:flex-row items-start gap-4">

        {/* Icon */}
        <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
          <img
            src={tech.logo}
            alt={tech.name}
            className="w-7 h-7 object-contain"
          />
        </div>

        {/* Content */}
        <div>
          <h3 className="text-sm sm:text-base font-semibold text-white">
            {tech.name}
          </h3>

          <p className="mt-1 text-xs text-gray-400 leading-5 break-words">
            {tech.description}
          </p>
        </div>

      </div>
    </motion.div>
  ))}
</div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;

