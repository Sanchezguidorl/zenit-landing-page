import Header from "./src/components/layouts/Header";
import Positioning from './src/components/sections/Positioning';
import Presentation from './src/components/sections/Presentation';



function Home() {
  return (

<div className="w-full h-full relative z-20">
<Header/>
<div className="container mx-auto">
<Presentation/>
<Positioning/>

</div>
</div>

  );
}

export default Home;
