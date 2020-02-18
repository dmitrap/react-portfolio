import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill";
import reactIcon from "./assets/img/react.svg";
import jsIcon from "./assets/img/js.svg";
import htmlIcon from "./assets/img/html.svg";
import gitIcon from "./assets/img/git.svg";
import reduxIcon from "./assets/img/redux.svg";
import Roll from 'react-reveal/Roll';


function Skills() {
    let react = reactIcon;
    let js = jsIcon;
    let html = htmlIcon;
    let git = gitIcon
    let redux = reduxIcon
    return (
        <div id={'skills'} className={styles.skills}>
            <Roll left cascade>
                <div className={styles.container}>
                    <div className={styles.headerTitle}>
                        <h2 className={styles.headerTitle}>My skills</h2>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.skillsWrapper}>
                        <Skill icon={js} title={"JavaScript"} description={""}/>
                        <Skill icon={html} title={"HTML&CSS"} description={""}/>
                        <Skill icon={react} title={"React"} description={""}/>
                        <Skill icon={redux} title={"Redux"} description={""}/>
                        <Skill icon={git} title={"Git"} description={""}/>
                    </div>
                </div>
            </Roll>
        </div>
    );
}

export default Skills;
