import React from 'react'
import styles from './Portfolio.module.css'
import cardData from '../../cardData'
import Cards from './Cards/Cards'
import Reveal from '../Reveal/Reveal'

const Portfolio = () => {
    return (
        <section id='portfolio' className={styles.portfolio}>
            <Reveal>
                <div className="container">
                    <div className={styles.title}>
                        <h2>My <span>Projects</span></h2>
                        <hr />
                    </div>
                    <ul className={styles.cards}>
                        {cardData?.map(item => (
                            <Cards
                                key={item.id}
                                image={item.image}
                                title={item.title}
                            ></Cards>
                        ))}
                    </ul>
                </div>
            </Reveal>
        </section>
    )
}

export default Portfolio