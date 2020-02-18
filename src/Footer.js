import React from 'react';
import styles from './Footer.module.css';
import telegramIcon from "./assets/img/telegram.svg";
import linkedInIcon from "./assets/img/linkedin.svg";
import gitHubIcon from "./assets/img/github.png";
import Flip from 'react-reveal/Flip';
import FooterContacts from "./FooterContacts";


export const Footer = () => {
    const contacts = [
        {
            id: 1,
            title: 'Telegram',
            img: telegramIcon,
            link: 'https://t.me/binaryrain'
        },
        {
            id: 2,
            title: 'Github',
            img: gitHubIcon,
            link: 'https://github.com/dmitrap'
        },
        {
            id: 3,
            title: 'LinkedIn',
            img: linkedInIcon,
            link: 'https://www.linkedin.com/in/dmitry-apatin-7b213645/'
        }
    ];
    return (
        <div className={styles.footer}>

                <div className={styles.container}>
                    <div className={styles.headerTitle}>
                        <Flip top>
                            <h2 className={styles.headerTitle}>Hire me</h2>
                            </Flip>
                        <div className={styles.line}></div>
                    </div>

                    <div className={styles.socialBlock}>
                        {contacts.map(c => {
                            return <FooterContacts key={c.id} title={c.title} img={c.img} link={c.link}/>
                        })}
                    </div>
                    <span className={styles.copyright}>© 2020 All rights reserved</span>
                </div>

        </div>
    );
}

export default Footer;
