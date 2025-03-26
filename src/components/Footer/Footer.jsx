import { useState } from "react";
import styles from './Footer.module.scss'
function Footer() {
    return (<footer>
        <div className={styles.footer__container}>
            <img data-src="assets/images/logo.svg" alt="logo" className="lazy" loading="lazy"/>
            <section>
                <h3>Discover us</h3>
                <a href="./index.html" className={styles.link}>Home</a>
                <a href="./pages/categories.html" className={styles.link}>Menu</a>
                <a href="./pages/contacts.html" className={styles.link}>Contacts</a>
                <a href="./pages/about.html" className={styles.link}>About</a>
            </section>
            <section>
                <h3>Our social media</h3>
                <a href="https://www.facebook.com/SMARTCOFFEEBLR" className={styles.link}>Facebook</a>
                <a href="https://www.instagram.com/varkacoffee.official/" className={styles.link}>Instagram</a>
                <a href="https://x.com/cafeyunost" className={styles.link}>Twitter</a>
            </section>
            <section>
                <h3>Check our apps</h3>
                <a href="#" className={styles.link}>Link</a>
                <a href="#" className={styles.link}>Link</a>
            </section>
        </div>
    </footer>)
}
export default Footer;