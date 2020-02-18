import React from 'react';
import styles from './Projects.module.css';
import Project from "./Project";
import todo from './assets/img/todo.jpeg';
import network from './assets/img/social_network.jpeg';
import Fade from 'react-reveal/Fade';

function Projects() {

    const projects = [
        {
            id: 1,
            title: 'Samurai Social',
            img: network,
            link: '#',
            githubCode: 'https://github.com/dmitrap/react-samurai-social',
            description: 'React/Redux social network application. Work in progress.'
        },
        {
            id: 2,
            title: 'Svelte ToDo List',
            img: todo,
            link: 'http://dmitrap-svelte.surge.sh/',
            githubCode: 'https://github.com/dmitrap/svelte-todo/tree/master/src',
            description: 'My first Svelte application. I was trying to keep it simple and clean :) '
        }
    ];

    return (
        <div id={'projects'} className={styles.projects}>
            <Fade bottom>
                <div className={styles.container}>
                    <div className={styles.headerTitle}>
                        <h2 className={styles.headerTitle}>My projects</h2>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.projectsWrapper}>
                        {projects.map(p => {
                            return <Project key={p.id}
                                            title={p.title}
                                            img={p.img}
                                            link={p.link}
                                            githubCode={p.githubCode}
                                            description={p.description}/>
                        })}
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Projects;
