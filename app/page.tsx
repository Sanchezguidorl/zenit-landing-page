import Header from "./src/components/layouts/Header";
import Presentation from "./src/components/sections/Presentation";
import ModernizaTuNegocio from "./src/components/sections/ModernizaTuNegocio";
import OurService from "./src/components/sections/OurService";
import Footer from "./src/components/layouts/Footer";
import Benefits from "./src/components/sections/Benefits";
import Contact from "./src/components/sections/Contact";
import Services from "./src/components/sections/Services";
import CarrouselPagesDeploy from "./src/components/layouts/CarrouselPagesDeploy";

function Home() {
  return (
    <div className="w-full h-full relative overflow-hidden z-20">
      <Header />
      <div className="container mx-auto px-4 fadeIn">
        <Presentation />
        <ModernizaTuNegocio />
        <OurService />
        <Services />
        <Benefits />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
