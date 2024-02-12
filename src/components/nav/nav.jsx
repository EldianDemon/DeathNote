import React from "react";
import { NavLink } from "react-router-dom";
import n from './nav.module.css'

const Nav = (props) => {
    let NavOut = props.navPage.map(
        el => <li><NavLink to={el.root}>{el.name}</NavLink></li>
    )
    return (
        <nav className='Nav'>
            <ul className={`${n.nav__list}`}>
                {NavOut}
            </ul>
        </nav>
    );
}

export default Nav;