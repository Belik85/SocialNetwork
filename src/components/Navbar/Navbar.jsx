import React from 'react';
import d from './Navbar.module.css'


const Navbar = () => {
    return (
        <nav className={d.nav}>
            <div className={d.item}><a href='/Profile'>Profile</a></div>
            <div className={d.item}><a href='/Dialogs'>Messages</a></div>
            <div className={d.item}><a>News</a></div>
            <div className={d.item}><a>Music</a></div>
            <div className={d.item}><a>Settings</a></div>
        </nav>
    )
}

export default Navbar;