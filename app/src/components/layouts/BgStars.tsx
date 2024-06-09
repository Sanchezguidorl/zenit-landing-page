import Image from 'next/image'
import "../styles/layouts/BgStars.css"
import Twinkling from '/public/twinkling.svg';
import Stars from '/public/stars.png';
function BgStars() {
  return (
    <div className="background-container fadeIn">
    <Image src={Stars} alt='' quality={5} className="stars"/>
    <Image src={Twinkling} alt="" loading='eager' quality={5} className="twinkling"/>
  </div>
  )
}

export default BgStars
