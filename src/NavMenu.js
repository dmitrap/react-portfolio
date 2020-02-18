import React from 'react';
import styles from './NavMenu.module.css';
import {Link} from "react-scroll";

function NavMenu() {
    const links = [
        {
            id: 1,
            title: 'Main',
            link: 'main'
        },
        {
            id: 2,
            title: 'Skills',
            link: 'skills'
        },
        {
            id: 3,
            title: 'Projects',
            link: 'projects'
        },
        {
            id: 4,
            title: 'Contact me',
            link: 'contact-form'
        }
    ];
    return (
        <div className={styles.nav}>
            {links.map(p => {
                return <NavLinks key={p.id} title={p.title} link={p.link}/>
            })}
        </div>
    );
}

export default NavMenu;

export const NavLinks = (props) => {
    return (
        <div className={styles.item}>
            <Link to={props.link}
                  className={styles.activeLink}
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={1300}>
                {props.title}
            </Link>
        </div>
    );
};
