import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import GlobalBackground from "./components/GlobalBackground/GlobalBackground";

// =========================
// Lazy Loaded Pages
// =========================

const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./components/About/About"));
const DirectorMessage = lazy(
  () => import("./components/About/DirectorMessage")
);

// =========================
// Services
// =========================

const AndroidManagement = lazy(
  () => import("./pages/Service/AndroidManagement")
);

const AndroidZeroTouch = lazy(
  () => import("./pages/Service/AndroidZeroTouch")
);

const CyberSecurity = lazy(
  () => import("./pages/Service/CyberSecurity")
);

const IOSManagement = lazy(
  () => import("./pages/Service/IOSManagement")
);

const MobileManagement = lazy(
  () => import("./pages/Service/MobileManagement")
);

const ITManagement = lazy(
  () => import("./pages/Service/ITManagement")
);

const ITSupport = lazy(
  () => import("./pages/Service/ITSupport")
);

const SoftwareDevelopment = lazy(
  () => import("./pages/Service/SoftwareDevelopment")
);

const DigitalMarketing = lazy(
  () => import("./pages/Service/DigitalMarketing")
);

const CloudComputing = lazy(
  () => import("./pages/Service/CloudComputing")
);

// =========================
// Industries
// =========================

const Accounting = lazy(
  () => import("./pages/Industries/Accounting")
);

const Education = lazy(
  () => import("./pages/Industries/Education")
);

const Energy = lazy(
  () => import("./pages/Industries/Energy")
);

const Government = lazy(
  () => import("./pages/Industries/Government")
);

const Legal = lazy(
  () => import("./pages/Industries/Legal")
);

const Manufacturing = lazy(
  () => import("./pages/Industries/Manufacturing")
);

// =========================
// Projects
// =========================

const FinanceApproved = lazy(
  () => import("./pages/UpcomingProject/FinanceApproved")
);

const SmartWatch = lazy(
  () => import("./pages/UpcomingProject/SmartWatch")
);

const VRGlass = lazy(
  () => import("./pages/UpcomingProject/VRGlass")
);

const MLModules = lazy(
  () => import("./pages/UpcomingProject/MLModules")
);

// =========================
// Portfolio
// =========================

const Portfolio = lazy(
  () => import("./pages/Portfolio")
);

// =========================
// Loading Component
// =========================

const PageLoader = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#131d38]">
      <div
        className="
          h-8
          w-8
          animate-spin
          rounded-full
          border-2
          border-white/20
          border-t-blue-400
        "
      />
    </div>
  );
};

// =========================
// App
// =========================
function App() {
  return (
    <div className="relative min-h-screen bg-transparent font-sans">
      
      {/* ONE GLOBAL BACKGROUND */}
      <GlobalBackground />

      {/* ALL CONTENT */}
      <main className="relative z-10">
        <ScrollToTop />

        <Suspense fallback={<PageLoader />}>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/director-message"
              element={<DirectorMessage />}
            />

            {/* SERVICES */}
            <Route
              path="/services/android-management-service"
              element={<AndroidManagement />}
            />
            <Route
              path="/services/android-zero-touch-enrollment"
              element={<AndroidZeroTouch />}
            />
            <Route
              path="/services/cyber-security"
              element={<CyberSecurity />}
            />
            <Route
              path="/services/iso-management"
              element={<IOSManagement />}
            />
            <Route
              path="/services/mobile-management"
              element={<MobileManagement />}
            />
            <Route
              path="/services/it-management"
              element={<ITManagement />}
            />
            <Route
              path="/services/it-support"
              element={<ITSupport />}
            />
            <Route
              path="/services/software-development"
              element={<SoftwareDevelopment />}
            />
            <Route
              path="/services/digital-marketing"
              element={<DigitalMarketing />}
            />
            <Route
              path="/services/cloud-computing"
              element={<CloudComputing />}
            />

            {/* INDUSTRIES */}
            <Route
              path="/Industries/accounting-finance"
              element={<Accounting />}
            />
            <Route
              path="/Industries/education"
              element={<Education />}
            />
            <Route
              path="/Industries/energy-utilities"
              element={<Energy />}
            />
            <Route
              path="/Industries/government-public"
              element={<Government />}
            />
            <Route
              path="/Industries/manufacturing"
              element={<Manufacturing />}
            />
            <Route
              path="/Industries/legal"
              element={<Legal />}
            />

            {/* PROJECTS */}
            <Route
              path="/Projects/finance-approved-tablet-laptop"
              element={<FinanceApproved />}
            />
            <Route
              path="/Projects/smart-watch-mdm"
              element={<SmartWatch />}
            />
            <Route
              path="/Projects/vr-glasses"
              element={<VRGlass />}
            />
            <Route
              path="/Projects/ml-module"
              element={<MLModules />}
            />

            {/* PORTFOLIO */}
            <Route
              path="/portfolio"
              element={<Portfolio />}
            />

          </Routes>
        </Suspense>
      </main>
    </div>
  );
}
export default App;

// import { Routes, Route } from "react-router-dom";

// import ScrollToTop from "./components/ScrollToTop";
// import GlobalBackground from "./components/GlobalBackground/GlobalBackground";

// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import About from "./components/About/About";
// import DirectorMessage from "./components/About/DirectorMessage";

// import AndroidManagement from "./pages/Service/AndroidManagement";
// import AndroidZeroTouch from "./pages/Service/AndroidZeroTouch";
// import CyberSecurity from "./pages/Service/CyberSecurity";
// import IOSManagement from "./pages/Service/IOSManagement";
// import MobileManagement from "./pages/Service/MobileManagement";
// import ITManagement from "./pages/Service/ITManagement";
// import ITSupport from "./pages/Service/ITSupport";
// import SoftwareDevelopment from "./pages/Service/SoftwareDevelopment";
// import DigitalMarketing from "./pages/Service/DigitalMarketing";
// import CloudComputing from "./pages/Service/CloudComputing";

// import Accounting from "./pages/Industries/Accounting";
// import Education from "./pages/Industries/Education";
// import Energy from "./pages/Industries/Energy";
// import Government from "./pages/Industries/Government";
// import Legal from "./pages/Industries/Legal";
// import Manufacturing from "./pages/Industries/Manufacturing";

// import FinanceApproved from "./pages/UpcomingProject/FinanceApproved";
// import SmartWatch from "./pages/UpcomingProject/SmartWatch";
// import VRGlass from "./pages/UpcomingProject/VRGlass";
// import MLModules from "./pages/UpcomingProject/MLModules";

// import Portfolio from "./pages/Portfolio";

// function App() {
//   return (
//     <div className="relative min-h-screen font-sans">

//       {/* Global Background — ONE INSTANCE ONLY */}
//       <GlobalBackground />

//       {/* Scroll Handling */}
//       <ScrollToTop />

//       {/* Page Content */}
//       <main className="relative z-0">
//         <Routes>

//           {/* ================= MAIN PAGES ================= */}

//           <Route path="/" element={<Home />} />

//           <Route path="/about" element={<About />} />

//           <Route path="/contact" element={<Contact />} />

//           <Route
//             path="/director-message"
//             element={<DirectorMessage />}
//           />

//           {/* ================= SERVICES ================= */}

//           <Route
//             path="/services/android-management-service"
//             element={<AndroidManagement />}
//           />

//           <Route
//             path="/services/android-zero-touch-enrollment"
//             element={<AndroidZeroTouch />}
//           />

//           <Route
//             path="/services/cyber-security"
//             element={<CyberSecurity />}
//           />

//           <Route
//             path="/services/iso-management"
//             element={<IOSManagement />}
//           />

//           <Route
//             path="/services/mobile-management"
//             element={<MobileManagement />}
//           />

//           <Route
//             path="/services/it-management"
//             element={<ITManagement />}
//           />

//           <Route
//             path="/services/it-support"
//             element={<ITSupport />}
//           />

//           <Route
//             path="/services/software-development"
//             element={<SoftwareDevelopment />}
//           />

//           <Route
//             path="/services/digital-marketing"
//             element={<DigitalMarketing />}
//           />

//           <Route
//             path="/services/cloud-computing"
//             element={<CloudComputing />}
//           />

//           {/* ================= INDUSTRIES ================= */}

//           <Route
//             path="/Industries/accounting-finance"
//             element={<Accounting />}
//           />

//           <Route
//             path="/Industries/education"
//             element={<Education />}
//           />

//           <Route
//             path="/Industries/energy-utilities"
//             element={<Energy />}
//           />

//           <Route
//             path="/Industries/government-public"
//             element={<Government />}
//           />

//           <Route
//             path="/Industries/manufacturing"
//             element={<Manufacturing />}
//           />

//           <Route
//             path="/Industries/legal"
//             element={<Legal />}
//           />

//           {/* ================= UPCOMING PROJECTS ================= */}

//           <Route
//             path="/Projects/finance-approved-tablet-laptop"
//             element={<FinanceApproved />}
//           />

//           <Route
//             path="/Projects/smart-watch-mdm"
//             element={<SmartWatch />}
//           />

//           <Route
//             path="/Projects/vr-glasses"
//             element={<VRGlass />}
//           />

//           <Route
//             path="/Projects/ml-module"
//             element={<MLModules />}
//           />

//           {/* ================= PORTFOLIO ================= */}

//           <Route
//             path="/portfolio"
//             element={<Portfolio />}
//           />

//         </Routes>
//       </main>
//     </div>
//   );
// }

// export default App;