import React from 'react';
import d from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={d.header}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNsh1DNGZSv_4dfEGBnqzH3f4UYd2Ar0ZUPQ&usqp=CAU"/>
            <div className={d.loginBlock}>
                {props.isAuth ? props.login :
                    <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
    )
}

export default Header;