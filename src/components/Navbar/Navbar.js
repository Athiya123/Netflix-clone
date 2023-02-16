import  React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if(Window.scrolly > 100){
        setShow(true);
      }
      else{
        setShow(false);
      }
    }
  }, []);

  return (
    <div className="logo">
   <img
   className = "nav__logo"
   src = "/netflix-logo.png"
   alt = "Netflix Logo"
   />
   <img className="nav__avatar"
    src="/Netflix-avatar.png"
     alt="Netflix Avatar"
     />
</div>
  );
};

export default Navbar;