import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const LinkItem = ({ path, icon_name, link_name }) => {
    const location = useLocation();
    const isActive = location.pathname === path;

    return (
        <li className="nav-links">
            <Link to={`${path}`} className={`a ${isActive ? 'active' : ''}`}>
                <ion-icon name={`${icon_name}-outline`}></ion-icon>
                <span className="text nav-text">
                    {link_name}
                </span>
            </Link>
        </li>
    );
};

export default LinkItem;
