import Image from "next/image"
import Link from "next/link";
import LinkedinIcon from "/public/linkedinIcon.svg";
import WhatsappIcon from "/public/whatsappIcon.svg";
import InstagramIcon from "/public/instagramIcon.svg";

function Footer() {
  return (
    <footer className=" border-t border-no-dark h-60 flex items-center justify-center relative overflow-hidden">
      <div className="flex justify-center gap-4">
<Link href="https://www.linkedin.com/company/cygnus-agency/" className="">
<Image src={LinkedinIcon} alt="Icono de LinkedIn" className=" w-14 bg-gradient-socialmedia hover:brightness-125 transition-all duration-500 opacity-85 hover:opacity-100"/>
</Link>
<Link href="https://api.whatsapp.com/send?phone=543515129462">
<Image src={WhatsappIcon} alt="Icono de Whatsapp" className=" w-14 bg-gradient-socialmedia hover:brightness-125 transition-all duration-500 opacity-85 hover:opacity-100"/>
</Link>
<Link href="https://www.instagram.com/cygnus.agency/" >
<Image src={InstagramIcon} alt="Icono de instagram" className=" w-14 bg-gradient-socialmedia hover:brightness-125 transition-all duration-500 opacity-85 hover:opacity-100"/>
</Link>
      </div>
<div className=" absolute aspect-square w-96 border border-no-dark rounded-full z-0 top-3/4"></div>
    </footer>
  )
}

export default Footer
