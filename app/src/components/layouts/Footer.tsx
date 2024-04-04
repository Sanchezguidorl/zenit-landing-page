import Image from "next/image"
import LinkedinIcon from "/public/linkedinIcon.svg";
import WhatsappIcon from "/public/whatsappIcon.svg";
import InstagramIcon from "/public/instagramIcon.svg";
import Link from "next/link";

function Footer() {
  return (
    <footer className=" border-t border-no-dark h-60 flex items-center justify-center reltative">
      <div className="flex justify-center gap-4">
<Link href="" className="">
<Image src={LinkedinIcon} alt="" className=" w-14 bg-gradient-socialmedia hover:brightness-125 transition-all duration-500 opacity-85 hover:opacity-100"/>
</Link>
<Link href="">
<Image src={WhatsappIcon} alt="" className=" w-14 bg-gradient-socialmedia hover:brightness-125 transition-all duration-500 opacity-85 hover:opacity-100"/>
</Link>
<Link href="">
<Image src={InstagramIcon} alt="" className=" w-14 bg-gradient-socialmedia hover:brightness-125 transition-all duration-500 opacity-85 hover:opacity-100"/>
</Link>
      </div>
<div className=" absolute aspect-square w-96 border border-no-dark rounded-full mt-[480px] z-0"></div>
    </footer>
  )
}

export default Footer
