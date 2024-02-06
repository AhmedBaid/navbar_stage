import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import Navhead from './Navbar-com/nav-head';
import LinkItem from './Link-item/linkItem';
import './Navbar.css';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(true);
    const location = useLocation(); // Get the current location

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className={`fixed top-0 left-0 h-screen w-[250px] ${isNavOpen ? '' : 'close'}`}>
            <Navhead onToggle={toggleNav}/>
            <div className="menu-bar flex flex-col justify-between mt-2">
                <div className="menu">
                    <ul className="menu-links">
                        <LinkItem path="/Acceuil" icon_name="home" link_name="Accueill" isActive={location.pathname === '/Acceuil'} />
                        <LinkItem path="/Stock" icon_name="storefront" link_name="Stocks" isActive={location.pathname === '/Stock'} />
                        <LinkItem path="/Commandes" icon_name="pricetag" link_name="Commandes" isActive={location.pathname === '/Commandes'} />
                        <LinkItem path="/Fournisseurs" icon_name="cart" link_name="Fournisseurs" isActive={location.pathname === '/Fournisseurs'} />
                        <LinkItem path="/Utilisateurs" icon_name="business" link_name="Direction & Bureaus" isActive={location.pathname === '/Utilisateurs'} />
                        <LinkItem path="/Client" icon_name="person" link_name="Utilisateurs" isActive={location.pathname === '/Client'} />
                        <LinkItem path="/Historiques" icon_name="time" link_name="Historiques" isActive={location.pathname === '/Historiques'} />
                        <LinkItem path="/LogOut" icon_name="log-out" link_name="LogOut" isActive={location.pathname === '/LogOut'} />
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
