import React from 'react';
import d from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={d.nav}>
            <div className={d.item}>
                <NavLink to='/Profile' activeClassName={d.activeLink}>Profile</NavLink>
            </div>
            <div className={d.item}>
                <NavLink to='/Dialogs' activeClassName={d.activeLink}>Messages</NavLink>
            </div>
            <div className={d.item}>
                <a>News</a>
            </div>
            <div className={d.item}>
                <a>Music</a>
            </div>
            <div className={d.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;