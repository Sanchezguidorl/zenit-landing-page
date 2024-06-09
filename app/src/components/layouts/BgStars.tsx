import Image from 'next/image'
import "../styles/layouts/BgStars.css"
import Twinkling from '/public/twinkling.svg';
function BgStars() {
  return (
    <div className="background-container fadeIn">
    <div className="stars"></div>
    <Image src={Twinkling} alt="" loading='eager' quality={5} className="twinkling"/>
  </div>
  )
}

export default BgStars
