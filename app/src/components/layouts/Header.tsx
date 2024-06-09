import "../styles/layouts/Header.css";
import HeaderContent from "./HeaderContent";



function Header() {
  
  return (
    <header id="Header" className="border-b border-no-dark min-h-20 fixed w-full top-0 z-30 fadeIn">
      <HeaderContent/>
    </header>
  );
}

export default Header;
