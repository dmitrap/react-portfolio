import React from 'react';
import styles from './Footer.module.css'

export const FooterContacts = (props) => {
    return (
        <div className={styles.socialIcon}>
            <a className={styles.activeLink} href={props.link} target="_blank" rel="noopener noreferrer">
                <img src={props.img} alt={props.title}/>
            </a>
        </div>
    );
};

export default FooterContacts;