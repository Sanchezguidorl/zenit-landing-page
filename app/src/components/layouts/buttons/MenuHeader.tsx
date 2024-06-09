import "../../../../styles/layouts/MenuAnimatedButton.css";
function MenuHeader({isActive}:{isActive:boolean}) {
    return (
      <div className="menu">
      <div
        className={`menu-button ${isActive ? "triggerLabelActive" : ""}`}
      >
        <span className="menu-line"></span>
        <span className="menu-line"></span>
        <span className="menu-line"></span>
      </div>
    </div>
    )
  }
  
  export default MenuHeader
  