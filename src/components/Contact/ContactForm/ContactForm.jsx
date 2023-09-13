import React from 'react'
import styles from './ContactForm.module.css'

const ContactForm = () => {
    return (
        <form >
            <div className={styles['form-control']}>
                <input type="text" name='name' placeholder='Your Name' />
            </div>
            <div className={styles['form-control']}>
                <input type="email" name="email" id="" placeholder='Your Email' />
            </div>
            <div className={styles['form-control']}>
                <textarea name="message" placeholder='Your Message' className={styles.textarea}></textarea>
            </div>
            <button className={styles.button}>Send Message</button>
        </form>
    )
}

export default ContactForm