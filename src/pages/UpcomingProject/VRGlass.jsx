import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import VRGlassAnimation from "../../components/upcoming/VRGlassAnimation";

const VRGlass = () => {
  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden bg-gradient-to-br from-[#290f41] via-[#0B2340] to-[#0e4585] pt-24 pb-16 lg:pt-36 lg:pb-20">
        {/* <section className="relative overflow-hidden bg-gradient-to-br from-[#290f41] via-[#0B2340] to-[#0e4585] pt-32 pb-20"> */}

        {/* Grid */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Glow */}
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mt-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-md">
            Upcoming Project
          </div>
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Left */}
            <div className="order-1 text-center lg:text-left">
              <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-6xl">
                Enterprise
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  VR Glasses
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8 lg:mx-0">
                <strong>Zyntro Software Solutions</strong> is thrilled to unveil
                our ambitious <strong>VR Glasses project,</strong>a
                next-generation virtual reality platform that promises to
                transform how users experience digital content, interactive
                environments, and immersive applications. This cutting-edge
                technology represents our commitment to pushing the boundaries
                of human-computer interaction, creating experiences that blur
                the lines between physical and digital realities.
                <br />
                <br />
                Our VR Glasses combine state-of-the-art optics, advanced motion
                tracking, and powerful processing capabilities to deliver an
                unparalleled immersive experience. Whether for gaming,
                professional training, virtual collaboration, educational
                simulations, or entertainment, our solution offers crystal-clear
                visuals, intuitive controls, and seamless integration with
                existing digital ecosystems, making virtual reality accessible
                and practical for everyday use.
              </p>
            </div>

            {/* Right */}
            <div className="order-2 flex justify-center lg:justify-end">
              <div className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[460px] md:h-[460px] lg:w-[620px] lg:h-[620px]">
                <VRGlassAnimation />
              </div>
            </div>
          </div>

          {/* About */}

          {/* <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#141414]/90 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(34,211,238,0.25)]"> */}

          <div className="group rounded-[32px] mt-20 border border-white/10 bg-[#141414]/90 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(34,211,238,0.25)]">
            <h2 className="text-3xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300 md:text-4xl">
              Immersive{" "}
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Technology & Design Innovation{" "}
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              At the core of our VR Glasses project lies groundbreaking display
              technology that delivers stunning visual fidelity and immersive
              depth perception. Our headset features dual high-resolution OLED
              displays with a combined resolution exceeding 4K per eye, ensuring
              that every virtual environment appears remarkably lifelike and
              detailed. The advanced optical system incorporates custom-designed
              Fresnel lenses that provide an expansive field of view exceeding
              120 degrees, creating a truly encompassing visual experience that
              draws users completely into virtual worlds
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              The refresh rate of 120Hz combined with low-persistence displays
              virtually eliminates motion blur and reduces latency t o
              imperceptible levels, ensuring smooth, comfortable experiences
              even during fast-paced action sequences or rapid head movements.
              Our proprietary visual processing pipeline includes real-time
              foveated rendering, which concentrates rendering power on the
              user's focal point while intelligently reducing detail in
              peripheral vision, maximizing performance without compromising
              perceived visual quality. This technology enables our VR Glasses
              to run demanding applications while maintaining exceptional
              battery life and thermal efficiency.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Comfort and ergonomics have been paramount in our design process.
              The VR Glasses feature a lightweight construction utilizing
              aerospace-grade materials that distribute weight evenly across the
              head, preventing fatigue during extended use sessions. The
              adjustable head strap system accommodates various head sizes and
              shapes, while the customizable interpupillary distance (IPD)
              adjustment ensures optimal visual clarity for all users. The
              device includes integrated spatial audio with precision-tuned
              speakers positioned for accurate 3D sound positioning, eliminating
              the need for separate headphones while delivering immersive audio
              that complements the visual experience. Advanced ventilation
              channels prevent lens fogging and maintain comfortable
              temperatures during intensive use.
            </p>
          </div>

          <div className="group rounded-[32px]  mt-20 border border-white/10 bg-[#141414]/90 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(34,211,238,0.25)]">
            <h2 className="text-3xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300 md:text-4xl">
              Applications
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                & Ecosystem Integration
              </span>
            </h2>
            <p className="mt-8 text-lg leading-8 text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
              The true power of our VR Glasses extends far beyond hardware
              specifications into a comprehensive ecosystem of applications and
              use cases that span industries and user needs. For gaming
              enthusiasts, our platform supports an extensive library of
              immersive titles, from action-packed adventures to contemplative
              exploration games, all optimized to take full advantage of our
              headset's capabilities. The intuitive controller system provides
              precise input with haptic feedback that enhances immersion, while
              hand-tracking technology allows for natural gesture-based
              interactions in supported applications.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              In professional environments, our VR Glasses are revolutionizing
              training and collaboration. Medical professionals can practice
              complex procedures in risk-free virtual environments with
              anatomically accurate simulations. Architects and designers can
              walk through their creations at full scale before construction
              begins, making real-time modifications and sharing immersive
              presentations with clients worldwide. Manufacturing facilities use
              our VR solution for equipment training, reducing costly downtime
              and improving worker safety by allowing practice in virtual
              replicas of actual facilities. Remote teams collaborate in shared
              virtual workspaces that feel more present and productive than
              traditional video conferencing.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Educational institutions are adopting our VR Glasses to create
              engaging learning experiences that were previously impossible.
              Students can explore ancient civilizations, dive into molecular
              structures, travel through space, or practice language skills in
              simulated real-world environments. The technology makes abstract
              concepts tangible and allows learners to engage with subjects in
              ways that significantly improve retention and understanding. Our
              educational platform includes curriculum-aligned content developed
              in partnership with leading educators and subject matter experts.
            </p>
          </div>
        </div>
        {/* </div> */}
      </section>

      <Footer />
    </>
  );
};

export default VRGlass;
