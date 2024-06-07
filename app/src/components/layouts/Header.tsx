import HeaderContent from "./HeaderContent";



function Header() {
  
  return (
    <header id="Header" className=" bg-dark border-b border-no-dark h-20 fixed w-full top-0 z-30 fadeIn">
      <HeaderContent/>
    </header>
  );
}

export default Header;
