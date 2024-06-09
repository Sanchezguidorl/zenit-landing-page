import "../../../styles/layouts/BgStars.css"
import Image from 'next/image'
import Stars from '/public/stars.png';
import Twinkling from '/public/twinkling.svg';
function BgStars() {
  return (
    <div className="background-container fadeIn">
    <Image src={Stars} alt='' priority loading='eager' sizes="(max-width: 430px) 400px" quality={5} className="stars"/>
    <Image src={Twinkling} alt="" priority sizes="(max-width: 430px) 400px" quality={5} className="twinkling"/>
  </div>
  )
}

export default BgStars
