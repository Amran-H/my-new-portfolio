import React from 'react'
import styles from './Portfolio.module.css'

const Portfolio = () => {
    return (
        <section id='portfolio' className={styles.Portfolio}>
            <div className="container">
                <div className={styles.title}>
                    <h2>My <span>Projects</span></h2>
                    <hr />
                </div>
                <ul className={styles.cards}>

                </ul>
            </div>
        </section>
    )
}

export default Portfolio