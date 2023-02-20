import React, {useEffect, useState} from "react";
import "./Navbar.css";
import logo from "../../images/netflix-logo.png";
import logo1 from "../../images/Netflix-avatar.png";

const Navbar = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (Window.scrolly > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        }
    }, []);

    return (
        <div className="logo">
            <img className="nav__logo" src= {logo} alt=  "Netflix Logo"/>
            <img className="nav__avatar" src= {logo1} alt= "Netflix Avatar"/>
        </div>
    );
};

export default Navbar;
