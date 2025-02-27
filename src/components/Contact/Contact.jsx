import React from 'react'
import styles from './Contact.module.css'
import Reveal from '../Reveal/Reveal'
import { TbPhoneCall } from 'react-icons/tb'
import { HiOutlineMail } from 'react-icons/hi'
import ContactForm from './ContactForm/ContactForm'

const Contact = () => {
    return (
        <section id='contact' className={styles.contact}>
            <Reveal>
                <div className="container">
                    <div className={styles.title}>
                        <h2>
                            Get In <span>Touch</span>
                        </h2>
                        <hr />
                    </div>
                    <div className={` ${styles['contact-form']} grid`}>
                        <div className={styles.content}>
                            <h3>Let's Connect</h3>
                            <p>Fill the contact form on this section or just simply mail me to contact.</p>
                            <div className={styles['contact-wrapper']}>
                                <TbPhoneCall size={50} />
                                <span>Call Me</span>
                                <h3>+880 1824-516488</h3>
                            </div>
                            <div className={styles['contact-wrapper']}>
                                <HiOutlineMail size={50} />
                                <span>Email</span>
                                <a href="mailto:amran.h.akash@gmail.com">amran.h.akash@gmail.com</a>
                            </div>
                        </div>
                        <div >
                            <h3 className={styles.heading}>
                                Send Me a Message!
                            </h3>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    )
}

export default Contact