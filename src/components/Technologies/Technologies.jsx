import { motion } from "framer-motion";
import logo from "../../assets/navbar/zyntro.png";
import { technologies } from "../../data/technologiesData";
const Technologies = () => {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-28">
      {/* Blue Glow */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px]" />

      {/* Purple Glow */}
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px]" />
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-cyan-400"
        style={{ top: "18%", left: "12%" }}
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

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

          <h2
            className="
      mt-8
      text-4xl
      md:text-6xl
      font-bold
      leading-tight
      text-white
    "
          >
            Building Future with
            <br />
            <span
              className="
        bg-gradient-to-r
        from-cyan-400
        via-blue-300
        to-purple-400
        bg-clip-text
        text-transparent
      "
            >
              Modern Technologies
            </span>
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
          {/* LEFT SIDE */}
          <div className="flex justify-center">
            <div
              className="relative flex items-center justify-center
w-[300px] h-[300px]
sm:w-[360px] sm:h-[360px]
lg:w-[460px] lg:h-[460px]"
            >
              {/* Outer Orbit */}
              <div
                className="absolute
w-[240px] h-[240px]
sm:w-[300px] sm:h-[300px]
lg:w-[360px] lg:h-[360px]
rounded-full border border-dashed border-blue-500/20"
              />

              <div
                className="absolute
w-[300px] h-[300px]
sm:w-[360px] sm:h-[360px]
lg:w-[460px] lg:h-[460px]
rounded-full border border-dashed border-purple-500/15"
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
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
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
                    const angle = (360 / technologies.length) * index - 90;

                    const x = radius * Math.cos((angle * Math.PI) / 180);
                    const y = radius * Math.sin((angle * Math.PI) / 180);

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
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="
                  w-14 h-14
sm:w-16 sm:h-16
lg:w-20 lg:h-20
                    rounded-full
                    bg-[#0F172A]
                    border
                    border-blue-500/20
                    flex
                    items-center
                    justify-center
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:border-cyan-400
                    hover:shadow-[0_0_40px_rgba(59,130,246,.45)]
                  "
                        >
                          <img
                            src={tech.logo}
                            alt={tech.name}
                            className="w-11 h-11 object-contain"
                          />
                        </motion.div>
                      </div>
                    );
                  })}
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
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-col-4 gap-4 md:gap-8 max-w-2xl ml-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.01 }}
                whileHover={{ y: -6 }}
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
                  <div className="w-12 h-12 sm:w-12 sm:h-12 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-7 h-7 object-contain"
                    />
                  </div>

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

// import { motion } from "framer-motion";
// import logo from "../../assets/navbar/zyntro.png";
// import { technologies } from "../../data/technologiesData";

// const Technologies = () => {
//   return (
//     <section className="relative overflow-hidden bg-[#050816] py-28">

//       <div className="mx-auto max-w-7xl px-6">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center"
//         >
//           <span className="inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold tracking-[3px] text-cyan-300">
//             TECHNOLOGIES WE MASTER
//           </span>

//           <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
//             Building Modern Digital Products
//             <br />
//             with Powerful Technologies
//           </h2>

//           <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
//             We use modern frameworks and technologies to develop
//             fast, secure and scalable web & mobile applications.
//           </p>
//         </motion.div>

//         {/* Floating Tech Cloud */}
//         <div className="mt-24 flex justify-center">

//   <div
//     className="
//       relative
//       w-full
//       max-w-6xl
//       h-[650px]
//       rounded-[40px]
//       border border-white/10
//       bg-gradient-to-br
//       from-[#0B1120]/80
//       via-[#111827]/70
//       to-[#1E1B4B]/70
//       backdrop-blur-2xl
//       overflow-hidden
//     "
//   >

//     {/* Blue Glow */}
//     <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />

//     {/* Purple Glow */}
//     <div className="absolute -right-20 bottom-16 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px]" />

//   </div>

// </div>
//         <div className="mt-24 flex justify-center">

//           <div className="relative h-[520px] w-full max-w-5xl rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl">

//             {/* Step 2 me yahan logo aur technologies aayengi */}

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default Technologies;
