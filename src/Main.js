import React from 'react';
import styles from './Main.module.css';
import profileIcon from "./assets/img/profile.jpg";
import Jump from 'react-reveal/Jump';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

function Main() {
    return (
        <div className={styles.main} id={'main'}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <Jump>
                        <span className={styles.hi}>Hi!</span>
                    </Jump>
                    <Fade left cascade>
                        <div className={styles.nameSurname}>
                            <span>My name is</span>
                            <span>Dmitry Apatin</span>
                        </div>
                    </Fade>
                    <Flip top>
                        <span>...and i'm looking for a job as a {'\n'} Front-End Developer :)</span>
                    </Flip>
                </div>

                <div className={styles.photo}>
                    <img className={styles.image} src={profileIcon} alt={'me'}/>
                </div>
            </div>
        </div>
    );
}

export default Main;
