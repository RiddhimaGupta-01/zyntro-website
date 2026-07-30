import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./components/About/About";
import DirectorMessage from "./components/About/DirectorMessage";

import AndroidManagement from "./pages/Service/AndroidManagement";
import AndroidZeroTouch from "./pages/Service/AndroidZeroTouch";
import CyberSecurity from "./pages/Service/CyberSecurity";
import IOSManagement from "./pages/Service/IOSManagement";
import MobileManagement from "./pages/Service/MobileManagement";
import ITManagement from "./pages/Service/ITManagement";
import ITSupport from "./pages/Service/ITSupport";
import SoftwareDevelopment from "./pages/Service/SoftwareDevelopment";
import DigitalMarketing from "./pages/Service/DigitalMarketing";
import CloudComputing from "./pages/Service/CloudComputing";
import Accounting from "./pages/Industries/Accounting";
import Education from "./pages/Industries/Education";
import Energy from "./pages/Industries/Energy";
import Government from "./pages/Industries/Government";
import Legal from "./pages/Industries/Legal";
import Manufacturing from "./pages/Industries/Manufacturing";
import FinanceApproved from "./pages/UpcomingProject/FinanceApproved";
import SmartWatch from "./pages/UpcomingProject/SmartWatch";
import VRGlass from "./pages/UpcomingProject/VRGlass";
import MLModules from "./pages/UpcomingProject/MLModules";
import Portfolio from "./pages/Portfolio";


function App() {
  return (
    <>
    <ScrollToTop/>
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/director-message" element={<DirectorMessage />} />

      {/* Services */}
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
      
       <Route path="/services/it-support" element={<ITSupport/>}/>
       <Route path="/services/software-development" element={<SoftwareDevelopment/>}/>
         <Route path="/services/digital-marketing" element={<DigitalMarketing/>}/>
         <Route path="/services/cloud-computing" element={<CloudComputing/>}/>

         {/* Industries */}
         <Route path="/Industries/accounting-finance" element={<Accounting/>}/>
          <Route path="/Industries/education" element={<Education/>}/>
          <Route path="/Industries/energy-utilities" element={<Energy/>}/>
          <Route path="/Industries/government-public" element={<Government/>}/>
           <Route path="/Industries/manufacturing" element={<Manufacturing/>}/>
            <Route path="/Industries/legal" element={<Legal/>}/>

            {/* upcoming project */}
            <Route path="/Projects/finance-approved-tablet-laptop" element={<FinanceApproved/>}/>
            <Route path="/Projects/smart-watch-mdm" element={<SmartWatch/>}/>
             <Route path="/Projects/vr-glasses" element={<VRGlass/>}/>
             <Route path="/Projects/ml-module" element={<MLModules/>}/>
             {/* Portfolio */}
              <Route path="/portfolio" element={<Portfolio/>}/>

    </Routes>
    </>
  );
}

export default App;