import Header from "./src/components/layouts/Header";
import Presentation from "./src/components/sections/Presentation";
import Positioning from "./src/components/sections/Positioning";
import OurService from "./src/components/sections/OurService";
import Footer from "./src/components/layouts/Footer";
import Benefits from "./src/components/sections/Benefits";
import Contact from "./src/components/sections/Contact";

function Home() {
  return (
    <div className="w-full h-full relative overflow-hidden z-20">
      <Header />
      <div className="container mx-auto fadeIn">
        <Presentation />
        <Positioning />
        <OurService />
        <Benefits />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
