import React from 'react'
import styles from './About.module.css'
import profileImg from '../Home/images/profile.JPG'
import Reveal from '../Reveal/Reveal'

const About = () => {
    return (
        <section id='about' className={styles.about}>
            <Reveal>
                <div className="container">
                    <div className={styles.title}>
                        <h2>About <span>Me</span></h2>
                        <hr />
                    </div>

                    <div className="grid">
                        <div className={styles['about-img']}>
                            <img src={profileImg} alt="Amran Hossain" />
                        </div>

                        <div className={styles['about-content']}>
                            <h3 className={styles.border}>
                                Hello There!
                            </h3>
                            <p>
                                Hi, I'm <span className={styles.name}>Amran</span> , a certified MERN stack web developer with a year of experience. I specialize in dynamic web applications using MongoDB, Expressjs, Reactjs, and Nodejs. Expertise: HTML5, CSS3, JavaScript, Reactjs, Bootstrap, Tailwind CSS. Back-end: Nodejs, Expressjs, MongoDB, Mongoose, RESTful APIs. Tools: Git, GitHub, Netlify. I prioritize clean code, performance, and scalability.
                            </p>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    )
}

export default About